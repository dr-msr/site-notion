import { useEffect } from "react"
import { SchemeType } from "src/types"

type Props = {
  scheme: SchemeType
  children?: React.ReactNode
}

export const ThemeProvider = ({ scheme, children }: Props) => {
  useEffect(() => {
    const root = document.documentElement
    if (scheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [scheme])

  return <>{children}</>
}
