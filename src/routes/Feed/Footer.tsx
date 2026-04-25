import React from "react"

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={`text-center ${className || ""}`}>
      <div className="mt-3">
        <p className="text-sm leading-5 text-gray-10">
          Dr. Mohd Syamirulah Rahim
        </p>
        <p className="text-xs text-gray-10">
          M.D. (Nizhny Novgorod) (2012)
        </p>
        <p className="text-xs text-gray-10">
          MMC 63043
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-700">
        <p className="text-sm leading-5 text-gray-10">
          DRMSR Digital & Health Solutions
        </p>
        <p className="text-xs text-gray-10">
          202503327216 (RA0130627-P)
        </p>
      </div>
    </div>
  )
}

export default Footer
