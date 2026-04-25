import React from "react"
import CategorySelect from "./CategorySelect"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <div className="mb-4 border-b border-gray-6">
      <CategorySelect />
    </div>
  )
}

export default FeedHeader
