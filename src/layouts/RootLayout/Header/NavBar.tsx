import Link from "next/link"
import { useRouter } from "next/router"

const NavBar: React.FC = () => {
  const router = useRouter()
  const links = [{ id: 1, name: "About", to: "/about" }]
  
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row gap-2">
        {links.map((link) => {
          const isActive = router.pathname === link.to
          return (
            <li key={link.id} className="block">
              <Link 
                href={link.to}
                className={`cursor-pointer px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors ${
                  isActive
                    ? "bg-gray-6 text-gray-12 dark:bg-gray-6 dark:text-gray-12"
                    : "bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-10 dark:hover:bg-gray-6 dark:hover:text-gray-12"
                }`}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavBar
