import { FC, MouseEvent, ReactNode, useEffect, useState } from "react"

type Props = {
  src: string
  children: ReactNode
}

// Shares an image file through the native share sheet; falls back to a download.
const ShareImageButton: FC<Props> = ({ src, children }) => {
  const [file, setFile] = useState<File | null>(null)
  const name = src.split("/").pop() || "image.png"

  // Fetch ahead of the click: awaiting a fetch inside the handler loses the
  // user gesture on Safari and navigator.share then refuses.
  useEffect(() => {
    let alive = true
    fetch(src)
      .then((r) => r.blob())
      .then((b) => {
        if (alive) setFile(new File([b], name, { type: b.type || "image/png" }))
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [src, name])

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (file && navigator.canShare?.({ files: [file] })) {
      e.preventDefault()
      navigator.share({ files: [file] }).catch(() => {})
    }
  }

  return (
    <a
      href={src}
      download={name}
      onClick={onClick}
      style={{
        display: "inline-block",
        padding: "0.6rem 1.2rem",
        borderRadius: "9999px",
        background: "var(--gray-12)",
        color: "var(--gray-1)",
        fontWeight: 600,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  )
}

export default ShareImageButton
