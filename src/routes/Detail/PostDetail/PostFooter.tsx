import { useRouter } from "next/router"
import React from "react"

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className="flex justify-between font-medium text-gray-10">
      <a
        onClick={() => router.push("/")}
        className="mt-2 cursor-pointer hover:text-gray-12"
      >
        ← Back
      </a>
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-2 cursor-pointer hover:text-gray-12"
      >
        ↑ Top
      </a>
    </div>
  )
}

export default Footer
