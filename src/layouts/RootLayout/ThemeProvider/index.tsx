import { useEffect } from "react"
import { SchemeType } from "src/types"

type Props = {
  scheme: SchemeType
  children?: React.ReactNode
}

export const ThemeProvider = ({ scheme, children }: Props) => {
  useEffect(() => {
    const root = document.documentElement
    // Add transition class before changing theme
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease'
    
    if (scheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [scheme])

  return <>{children}</>
}
