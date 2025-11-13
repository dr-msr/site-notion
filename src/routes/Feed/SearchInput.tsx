import React, { InputHTMLAttributes } from "react"
import { Emoji } from "src/components/Emoji"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-4 w-full">
      <div className="rounded-2xl bg-white shadow-sm border border-gray-6 dark:bg-gray-4 dark:border-transparent">
        <input
          className="py-2 px-5 rounded-2xl outline-none w-full bg-transparent box-border"
          type="text"
          placeholder="Search..."
          {...props}
        />
      </div>
    </div>
  )
}

export default SearchInput
