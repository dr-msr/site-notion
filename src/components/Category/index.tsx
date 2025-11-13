import { useRouter } from "next/router"
import React from "react"
import { COLOR_SET } from "./constants"

export const getColorClassByName = (name: string): string => {
  try {
    let sum = 0
    name.split("").forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)))
    const colorKey = sum
      .toString(16)
      ?.[sum.toString(16).length - 1].toUpperCase()
    return COLOR_SET[colorKey]
  } catch {
    return COLOR_SET[0]
  }
}

type Props = {
  children: string
  readOnly?: boolean
}

const Category: React.FC<Props> = ({ readOnly = false, children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    if (readOnly) return
    router.push(`/?category=${value}`)
  }
  return (
    <div
      onClick={() => handleClick(children)}
      className="py-1 px-2 rounded-full w-fit text-sm leading-5 font-medium text-gray-12 dark:text-gray-1 shadow-sm"
      style={{
        backgroundColor: getColorClassByName(children),
        cursor: readOnly ? "default" : "pointer",
        color: 'rgb(9, 9, 11)', // Force dark text for better contrast
      }}
    >
      {children}
    </div>
  )
}

export default Category
