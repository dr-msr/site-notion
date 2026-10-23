import { FC, TouchEvent, useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export type GalleryItem = {
  src: string
  alt: string
  caption?: string
}

type Props = {
  items: GalleryItem[]
}

// Thumbnail grid (2 across on mobile, 4 on wider screens) that opens a swipeable lightbox.
const ImageGallery: FC<Props> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(null)
  const [touchX, setTouchX] = useState<number | null>(null)
  const count = items.length

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + count) % count)),
    [count]
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") step(-1)
      if (e.key === "ArrowRight") step(1)
    }
    window.addEventListener("keydown", onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
    }
  }, [open, close, step])

  const onTouchEnd = (e: TouchEvent) => {
    if (touchX === null) return
    const dx = e.changedTouches[0].clientX - touchX
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1)
    setTouchX(null)
  }

  const item = open === null ? null : items[open]

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => setOpen(i)}
            className="block w-full rounded-lg overflow-hidden border border-gray-6 bg-gray-3 cursor-zoom-in"
            aria-label={it.alt}
          >
            <img src={it.src} alt={it.alt} className="w-full h-36 sm:h-40 object-contain" />
          </button>
        ))}
      </div>

      {item && open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full bg-white/15 p-2 text-white"
          >
            <X size={24} />
          </button>

          <div className="flex w-full max-w-4xl items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous"
              className="shrink-0 rounded-full bg-white/15 p-2 text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <img
              src={item.src}
              alt={item.alt}
              className="min-w-0 flex-1 max-h-[70vh] object-contain rounded-lg"
            />
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next"
              className="shrink-0 rounded-full bg-white/15 p-2 text-white"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="mt-4 max-w-2xl text-center text-sm leading-6 text-white" onClick={(e) => e.stopPropagation()}>
            {item.caption && <p>{item.caption}</p>}
            <p className="mt-2 font-semibold">
              {open + 1} / {count}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
