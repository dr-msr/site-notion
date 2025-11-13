import { TCategories } from "src/types"
import React from "react"
import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <div className="flex mb-4 justify-between items-center border-b border-gray-6">
      <CategorySelect />
      <OrderButtons />
    </div>
  )
}

export default FeedHeader
