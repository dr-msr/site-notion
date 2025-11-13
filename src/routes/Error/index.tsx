import React from "react"
import { Emoji } from "src/components/Emoji"

type Props = {}

const CustomError: React.FC<Props> = () => {
  return (
    <div className="mx-auto px-6 py-12 rounded-3xl max-w-3xl">
      <div className="wrapper flex py-20 flex-col gap-10 items-center">
        <div className="top flex items-center text-6xl leading-none">
          <div>4</div>
          <Emoji>🤔</Emoji>
          <div>4</div>
        </div>
        <div className="text text-3xl leading-9 text-gray-11">Post not found</div>
      </div>
    </div>
  )
}

export default CustomError
