import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className="py-0.5 px-2 rounded-md text-xs leading-4 font-normal text-gray-10 bg-gray-5 cursor-pointer whitespace-nowrap flex-shrink-0"
    >
      {children}
    </div>
  )
}

export default Tag
