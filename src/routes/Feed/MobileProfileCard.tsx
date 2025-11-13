import { CONFIG } from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="mid p-2 mb-4 rounded-2xl bg-white shadow-sm border border-gray-6 dark:bg-gray-4 dark:border-transparent">
        <div className="wrapper flex gap-2 items-start">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            className="relative rounded-lg"
            alt="profile_image"
          />
          <div className="wrapper h-fit">
            <div className="top text-xl leading-7 font-bold italic">{CONFIG.profile.name}</div>
            <div className="mid mb-2 text-sm leading-5 text-gray-11">{CONFIG.profile.role}</div>
            <div className="btm text-sm text-muted-foreground leading-5">{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileProfileCard
