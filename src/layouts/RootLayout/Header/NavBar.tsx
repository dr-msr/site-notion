import Link from "next/link"
import { useRouter } from "next/router"

type Props = {
  isScrolled?: boolean
}

const NavBar: React.FC<Props> = ({ isScrolled = false }) => {
  const router = useRouter()
  const links = [{ id: 1, name: "About", to: "/about" }]

  const handleBack = () => {
    router.back()
  }

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row gap-2 items-center justify-center">
        <li className={`block transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "opacity-100 translate-x-0 pointer-events-auto" 
            : "opacity-0 -translate-x-2 pointer-events-none w-0 overflow-hidden"
        }`}>
          <button
            onClick={handleBack}
            className="cursor-pointer px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-10 dark:hover:bg-gray-6 dark:hover:text-gray-12 whitespace-nowrap"
          >
            Back
          </button>
        </li>
        <li className={`block transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "opacity-100 translate-x-0 pointer-events-auto" 
            : "opacity-0 -translate-x-2 pointer-events-none w-0 overflow-hidden"
        }`}>
          <button
            onClick={handleTop}
            className="cursor-pointer px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-10 dark:hover:bg-gray-6 dark:hover:text-gray-12 whitespace-nowrap"
          >
            Top
          </button>
        </li>
        {links.map((link) => {
          const isActive = router.pathname === link.to
          return (
            <li 
              key={link.id} 
              className={`block transition-all duration-300 ease-in-out ${
                !isScrolled 
                  ? "opacity-100 translate-x-0 pointer-events-auto" 
                  : "opacity-0 translate-x-2 pointer-events-none w-0 overflow-hidden"
              }`}
            >
              <Link 
                href={link.to}
                className={`cursor-pointer px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors whitespace-nowrap ${
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
