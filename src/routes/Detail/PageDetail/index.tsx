import React from "react"
import NotionRenderer from "../components/NotionRenderer"
import usePostQuery from "src/hooks/usePostQuery"
type Props = {}

const PageDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null
  return (
    <div className="mx-auto max-w-3xl">
      <NotionRenderer recordMap={data.recordMap} />
    </div>
  )
}

export default PageDetail
