import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    console.log(isScrolled)
  }, [isScrolled])

  return (
    <div className={`z-[30] sticky top-0 bg-gray-2/50 transition-all duration-300 ease-in-out pt-4 ${isScrolled ? "pt-0 bg-gray-2/80" : ""}`}>
      <div className="mx-auto w-full max-w-[1120px] px-4">
        <div
          className={`flex px-2 justify-between items-center w-full h-12 rounded-2xl backdrop-blur-md shadow-sm border border-gray-4 transition-all duration-300 ease-in-out ${isScrolled ? "bg-gray-6/80 rounded-none" : "bg-white dark:bg-gray-4"} dark:shadow-none  ${
            fullWidth ? "md:px-24" : ""
          }`}
        >
          <Logo />
          <div className="nav flex gap-3 items-center">
            <NavBar isScrolled={isScrolled} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
