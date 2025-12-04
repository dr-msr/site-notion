import Link from "next/link"
import { useRouter } from "next/router"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/libs/utils"

type Props = {
  isScrolled?: boolean
}

const NavBar: React.FC<Props> = ({ isScrolled = false }) => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const links = [
    { id: 1, name: "About", to: "/about" },
    { id: 2, name: "Clinical", to: "/clinical" },
    { id: 3, name: "Consultancy", to: "/consultancy" },
    { id: 4, name: "Training", to: "/training" },
  ]

  const handleBack = () => {
    router.back()
  }

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  
  return (
    <div className="flex-shrink-0 flex items-center gap-2">
      {/* Back and Top buttons */}
      <div className={cn(
        "flex items-center gap-2 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "opacity-100 translate-x-0 pointer-events-auto" 
          : "opacity-0 -translate-x-2 pointer-events-none w-0 overflow-hidden"
      )}>
        <button
          onClick={handleBack}
          className="cursor-pointer px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-12 dark:hover:bg-gray-6 dark:hover:text-gray-12 whitespace-nowrap"
        >
          Back
        </button>
        <button
          onClick={handleTop}
          className="cursor-pointer px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-12 dark:hover:bg-gray-6 dark:hover:text-gray-12 whitespace-nowrap"
        >
          Top
        </button>
      </div>

      {/* Navigation Menu - Links */}
      {!isScrolled && (
        <NavigationMenu className="ml-auto md:ml-0">
          <NavigationMenuList className="transition-all duration-300 ease-in-out">
            {isMobile ? (
              // Mobile: Single trigger with dropdown
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="px-3 py-1 rounded-full text-sm leading-5 font-medium text-gray-12 dark:text-gray-12 hover:text-gray-12 dark:hover:text-gray-12"
                  showChevron={true}
                >
                  {links.find(link => router.pathname === link.to)?.name || "Navigate"}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    {links.map((link) => {
                      const isActive = router.pathname === link.to
                      return (
                        <li key={link.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.to}
                              className={cn(
                                "block select-none space-y-1 rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors text-gray-12 hover:bg-gray-6 hover:text-gray-12 focus:bg-gray-6 focus:text-gray-12 dark:text-gray-12 dark:hover:bg-gray-6 dark:hover:text-gray-12 dark:focus:bg-gray-6",
                                isActive && "bg-gray-6 text-gray-12 dark:bg-gray-6 dark:text-gray-12"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">
                                {link.name}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      )
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              // Desktop: Individual links
              links.map((link) => {
                const isActive = router.pathname === link.to
                return (
                  <NavigationMenuItem key={link.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.to}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "cursor-pointer px-3 py-1 rounded-full text-sm leading-5 font-medium transition-colors whitespace-nowrap",
                          isActive
                            ? "bg-gray-6 text-gray-12 dark:bg-gray-6 dark:text-gray-12"
                            : "bg-transparent text-gray-12 hover:bg-gray-6 hover:text-gray-12 dark:text-gray-10 dark:hover:bg-gray-6 dark:hover:text-gray-12"
                        )}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })
            )}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  )
}

export default NavBar
