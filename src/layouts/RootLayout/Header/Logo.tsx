import Link from "next/link"
import { CONFIG } from "site.config"

const Logo = () => {
  return (
    <Link href="/" aria-label={CONFIG.blog.title} className="cursor-pointer text-lg font-bold hover:bg-gray-6 rounded-2xl px-3 py-1">
      {CONFIG.blog.title}
    </Link>
  )
}

export default Logo
