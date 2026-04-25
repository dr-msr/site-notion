import { TCategories } from "src/types"
import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <div className="mb-4 border-b border-gray-6">
      <CategorySelect />
      <div className="flex justify-end pb-2">
        <OrderButtons />
      </div>
    </div>
  )
}

export default FeedHeader
