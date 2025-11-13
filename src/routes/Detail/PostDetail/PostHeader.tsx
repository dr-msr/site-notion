import { CONFIG } from "site.config"
import Tag from "src/components/Tag"
import { TPost } from "src/types"
import { formatDate } from "src/libs/utils"
import Image from "next/image"
import React from "react"

type Props = {
  data: TPost
}

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1 className="title text-3xl leading-9 font-bold">{data.title}</h1>
      {data.type[0] !== "Paper" && (
        <nav className="mt-6 text-gray-11">
          <div className="top flex mb-3 gap-3 items-center">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="author flex gap-2 items-center">
                  <Image
                    className="rounded-full"
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt="profile_photo"
                    width={24}
                    height={24}
                  />
                  <div className="">{data.author[0].name}</div>
                </div>
                <div className="hr mt-1 mb-1 self-stretch w-px bg-gray-10"></div>
              </>
            )}
            <div className="date mr-2 md:ml-0">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <div className="mid flex mb-4 items-center">
            {data.tags && (
              <div className="tags flex overflow-x-auto flex-nowrap gap-2 max-w-full">
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
          {data.thumbnail && (
            <div className="thumbnail overflow-hidden relative mb-7 rounded-3xl w-full bg-gray-4 pb-[66%] lg:pb-[50%]">
              <Image
                src={data.thumbnail}
                className="object-cover"
                fill
                alt={data.title}
              />
            </div>
          )}
        </nav>
      )}
    </div>
  )
}

export default PostHeader
