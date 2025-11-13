import { useRouter } from "next/router"
import React from "react"

type TOrder = "asc" | "desc"

type Props = {}

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter()

  const currentOrder = `${router.query.order || ``}` || ("desc" as TOrder)

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }
  return (
    <div className="flex gap-2 text-sm leading-5">
      <a
        data-active={currentOrder === "desc"}
        onClick={() => handleClickOrderBy("desc")}
        className={`cursor-pointer ${
          currentOrder === "desc"
            ? "font-bold text-gray-12"
            : "text-gray-10"
        }`}
      >
        Desc
      </a>
      <a
        data-active={currentOrder === "asc"}
        onClick={() => handleClickOrderBy("asc")}
        className={`cursor-pointer ${
          currentOrder === "asc"
            ? "font-bold text-gray-12"
            : "text-gray-10"
        }`}
      >
        Asc
      </a>
    </div>
  )
}

export default OrderButtons
