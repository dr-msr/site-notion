import { useRouter } from "next/router"
import React from "react"
import { DEFAULT_CATEGORY } from "src/constants"
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery"

type Props = {}

const CategorySelect: React.FC<Props> = () => {
  const router = useRouter()
  const data = useCategoriesQuery()
  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY

  const handleOptionClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category: category === DEFAULT_CATEGORY ? undefined : category,
      },
    })
  }

  // Create array with Home first (representing DEFAULT_CATEGORY), then other categories (excluding DEFAULT_CATEGORY)
  const otherCategories = Object.keys(data).filter(key => key !== DEFAULT_CATEGORY)
  // Use the DEFAULT_CATEGORY count directly (it already represents total posts)
  const homeCount = data[DEFAULT_CATEGORY] || 0
  
  const categories = [
    { key: DEFAULT_CATEGORY, label: "Home", count: homeCount },
    ...otherCategories.map(key => ({ key, label: key, count: data[key] }))
  ]

  return (
    <div className="flex mt-2 mb-2 gap-2 items-center flex-wrap">
      {categories.map((category) => {
        const isActive = currentCategory === category.key
        return (
          <button
            key={category.key}
            onClick={() => handleOptionClick(category.key)}
            className={`px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors ${
              isActive
                ? "bg-gray-6 text-gray-12 dark:bg-gray-6 dark:text-gray-12"
                : "bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-10 dark:hover:bg-gray-6 dark:hover:text-gray-12"
            }`}
          >
            {category.key === DEFAULT_CATEGORY ? category.label : `${category.label} (${category.count})`}
          </button>
        )
      })}
    </div>
  )
}

export default CategorySelect
