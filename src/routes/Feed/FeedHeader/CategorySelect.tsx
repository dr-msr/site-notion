import { useRouter } from "next/router"
import React, { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DEFAULT_CATEGORY } from "src/constants"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"

type Props = {}

const SCROLL_AMOUNT = 200

const CategorySelect: React.FC<Props> = () => {
  const router = useRouter()
  const data = useCategoriesQuery()
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY

  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkOverflow = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 1)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    // Delayed initial check to ensure layout has settled
    const raf = requestAnimationFrame(() => checkOverflow())
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkOverflow, { passive: true })
    window.addEventListener("resize", checkOverflow)

    // ResizeObserver catches font loading, dynamic content, and container resizes
    let ro: ResizeObserver | undefined
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => checkOverflow())
      ro.observe(el)
    }

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener("scroll", checkOverflow)
      window.removeEventListener("resize", checkOverflow)
      ro?.disconnect()
    }
  }, [checkOverflow])

  // Re-check after categories load/change
  useEffect(() => {
    const raf = requestAnimationFrame(() => checkOverflow())
    return () => cancelAnimationFrame(raf)
  }, [data, checkOverflow])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    })
  }

  const handleOptionClick = (category: string) => {
    router.push(
      {
        query: {
          ...router.query,
          category: category === DEFAULT_CATEGORY ? undefined : category,
        },
      },
      undefined,
      { scroll: false }
    )
  }

  // Create array with Home first, then other categories sorted by count descending
  const otherCategories = Object.keys(data)
    .filter(key => key !== DEFAULT_CATEGORY)
    .map(key => ({ key, label: key, count: data[key] }))
    .sort((a, b) => b.count - a.count)
  const homeCount = data[DEFAULT_CATEGORY] || 0

  const categories = [
    { key: DEFAULT_CATEGORY, label: "Home", count: homeCount },
    ...otherCategories
  ]

  const arrowClass =
    "w-7 h-7 flex items-center justify-center rounded-full text-gray-10 bg-gray-4 hover:bg-gray-6 hover:text-gray-12 transition-colors cursor-pointer"

  return (
    <div className="relative mt-2 mb-2 min-w-0">
      {/* Left arrow overlay */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 ${arrowClass} ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity`}
        aria-label="Scroll categories left"
        tabIndex={canScrollLeft ? 0 : -1}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Left fade */}
      {canScrollLeft && (
        <div className="absolute left-7 top-0 bottom-0 w-4 z-[5] pointer-events-none bg-gradient-to-r from-gray-1 to-transparent dark:from-gray-1" />
      )}

      <div
        ref={scrollRef}
        className="flex gap-2 items-center overflow-x-auto flex-nowrap scrollbar-none w-full"
        style={{ paddingLeft: canScrollLeft ? '2.25rem' : '0', paddingRight: canScrollRight ? '2.25rem' : '0', transition: 'padding 150ms ease' }}
      >
        {categories.map((category) => {
          const isActive = currentCategory === category.key
          return (
            <button
              key={category.key}
              onClick={() => handleOptionClick(category.key)}
              className={`px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors flex-shrink-0 whitespace-nowrap ${
                isActive
                  ? "bg-gray-6 text-gray-12 dark:bg-gray-6 dark:text-gray-12"
                  : "bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-10 dark:hover:bg-gray-6 dark:hover:text-gray-12"
              }`}
            >
              {category.key === DEFAULT_CATEGORY ? category.label : `${category.label} (${category.count})`}
            </button>
          )
        })}
      </div>

      {/* Right fade */}
      {canScrollRight && (
        <div className="absolute right-7 top-0 bottom-0 w-4 z-[5] pointer-events-none bg-gradient-to-l from-gray-1 to-transparent dark:from-gray-1" />
      )}

      {/* Right arrow overlay */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 ${arrowClass} ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity`}
        aria-label="Scroll categories right"
        tabIndex={canScrollRight ? 0 : -1}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export default CategorySelect
