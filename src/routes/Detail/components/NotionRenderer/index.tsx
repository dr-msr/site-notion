import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ExtendedRecordMap } from "notion-types"
import useScheme from "src/hooks/useScheme"
import usePostsQuery from "src/hooks/usePostsQuery"

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css"

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css"

// used for rendering equations (optional)

import "katex/dist/katex.min.css"
import { FC, useMemo } from "react"

const _NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
)

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => m.Code)
)

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
)

// Normalize Notion ID by removing dashes for comparison
const normalizeId = (id: string) => id.replace(/-/g, "")

type Props = {
  recordMap: ExtendedRecordMap
}

const NotionRenderer: FC<Props> = ({ recordMap }) => {
  const [scheme] = useScheme()
  const posts = usePostsQuery()

  // Create a mapping from normalized page ID to slug
  const idToSlugMap = useMemo(() => {
    const map = new Map<string, string>()
    posts.forEach((post) => {
      const normalizedId = normalizeId(post.id)
      map.set(normalizedId, post.slug)
    })
    return map
  }, [posts])

  const mapPageUrl = (id: string) => {
    const normalizedId = normalizeId(id)
    const slug = idToSlugMap.get(normalizedId)
    
    if (slug) {
      return `/${slug}`
    }
    
    // Fallback to Notion URL if page not found in posts
    return "https://www.notion.so/" + normalizedId
  }

  return (
    <div className="notion-wrapper">
      <_NotionRenderer
        darkMode={scheme === "dark"}
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          nextImage: Image,
          nextLink: Link,
        }}
        mapPageUrl={mapPageUrl}
      />
      <style jsx global>{`
        .notion-wrapper .notion-collection-page-properties {
          display: none !important;
        }
        .notion-wrapper .notion-page {
          padding: 0;
        }
        .notion-wrapper .notion-list {
          width: 100%;
        }
        .notion-wrapper .notion-callout .notion-page-icon-inline {
          display: none !important;
        }
        .notion-wrapper .notion-callout .notion-h3 {
          margin-top: 0 !important;
        }
      `}</style>
    </div>
  )
}

export default NotionRenderer
