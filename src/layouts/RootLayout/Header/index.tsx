import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <div className="z-[30] sticky top-0 bg-gray-2/50 pt-4">
      <div className="mx-auto w-full max-w-[1120px] px-4">
        <div
          className={`flex px-2 justify-between items-center w-full h-12 rounded-2xl backdrop-blur-md bg-white shadow-sm border border-gray-6 dark:bg-gray-4 dark:shadow-none  ${
            fullWidth ? "md:px-24" : ""
          }`}
        >
          <Logo />
          <div className="nav flex gap-3 items-center">
            <NavBar />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
