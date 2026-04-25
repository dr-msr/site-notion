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
    checkOverflow()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkOverflow, { passive: true })
    window.addEventListener("resize", checkOverflow)
    return () => {
      el.removeEventListener("scroll", checkOverflow)
      window.removeEventListener("resize", checkOverflow)
    }
  }, [checkOverflow])

  // Re-check after categories load/change
  useEffect(() => {
    checkOverflow()
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
    router.push({
      query: {
        ...router.query,
        category: category === DEFAULT_CATEGORY ? undefined : category,
      },
    })
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
    "flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-gray-10 bg-gray-4 hover:bg-gray-6 hover:text-gray-12 transition-colors cursor-pointer"

  return (
    <div className="flex mt-2 mb-2 gap-1.5 items-center">
      <button
        onClick={() => scroll("left")}
        className={`${arrowClass} ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity`}
        aria-label="Scroll categories left"
        tabIndex={canScrollLeft ? 0 : -1}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-2 items-center overflow-x-auto flex-nowrap scrollbar-none flex-1 min-w-0"
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

      <button
        onClick={() => scroll("right")}
        className={`${arrowClass} ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity`}
        aria-label="Scroll categories right"
        tabIndex={canScrollRight ? 0 : -1}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

export default CategorySelect
