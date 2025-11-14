import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"
import Tag from "../../../components/Tag"
import { TPost } from "../../../types"
import Image from "next/image"
import Category from "../../../components/Category"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined
  const hasThumbnail = !!data.thumbnail
  const hasCategory = !!category

  return (
    <Link href={`/${data.slug}`}>
      <article className="overflow-hidden relative mb-6 md:mb-8 rounded-2xl bg-white shadow-sm border border-gray-6 dark:bg-gray-4 dark:border-transparent transition-shadow duration-300 hover:shadow-lg">
        {data.thumbnail && (
          <div className="thumbnail relative w-full bg-gray-2 pb-[66%] lg:pb-[50%]">
            <Image
              src={data.thumbnail}
              fill
              alt={data.title}
              className="object-cover"
            />
          </div>
        )}
        <div className="content p-4">
          <header className="top flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="mb-2 text-lg md:text-xl leading-7 font-medium cursor-pointer">
              {data.title}
            </h2>
          </header>
          <div className="summary mb-4">
            <p className="block leading-6 text-gray-11">
              {data.summary}
            </p>
          </div>
          <div className="date flex gap-2 items-center justify-end">
            <div className="border border-gray-6 rounded-full px-2 py-1 text-sm leading-5 text-gray-10">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
            {category && (
              <Category readOnly={false}>{category}</Category>
            )}
          </div>
          {/* <div className="tags flex gap-2">
            {data.tags &&
              data.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div> */}
        </div>
      </article>
    </Link>
  )
}

export default PostCard
