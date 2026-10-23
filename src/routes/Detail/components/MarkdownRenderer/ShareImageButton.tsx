import { FC, MouseEvent, ReactNode, useEffect, useState } from "react"
import { Share2 } from "lucide-react"

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
    <span style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
      <a
        href={src}
        download={name}
        onClick={onClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          background: "#c8321e",
          color: "#ffffff",
          fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        }}
      >
        {children}
        <Share2 size={18} aria-hidden="true" />
      </a>
    </span>
  )
}

export default ShareImageButton
