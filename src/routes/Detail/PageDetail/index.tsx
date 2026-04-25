import React from "react"
import MarkdownRenderer from "../components/MarkdownRenderer"
import usePostQuery from "src/hooks/usePostQuery"
type Props = {}

const PageDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null
  return (
    <div className="mx-auto max-w-3xl">
      <MarkdownRenderer content={data.content} />
    </div>
  )
}

export default PageDetail
