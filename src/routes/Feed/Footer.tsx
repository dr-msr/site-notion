import React from "react"

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={`text-center ${className || ""}`}>
      <p className="mt-3 text-sm leading-5 text-gray-10">
        DRMSR Digital & Health Solutions
      </p>
      <p className="text-xs text-gray-10">
        202503327216 (RA0130627-P)
      </p>
    </div>
  )
}

export default Footer
