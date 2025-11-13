import { useRouter } from "next/router"
import React from "react"
import { Emoji } from "src/components/Emoji"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagList: React.FC<Props> = () => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined
  const data = useTagsQuery()

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <div>
      <div className="top hidden lg:block p-1 mb-3">
        <Emoji>🏷️</Emoji> Tags
      </div>
      <div className="list flex mb-6 gap-1 overflow-x-scroll scrollbar-none lg:block">
        {Object.keys(data).map((key) => (
          <a
            key={key}
            data-active={key === currentTag}
            onClick={() => handleClickTag(key)}
            className={`block py-1 px-4 mt-1 mb-1 rounded-xl text-sm leading-5 text-gray-10 flex-shrink-0 cursor-pointer hover:bg-gray-4 ${
              key === currentTag
                ? "text-gray-12 bg-gray-4 hover:bg-gray-4"
                : ""
            }`}
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  )
}

export default TagList
