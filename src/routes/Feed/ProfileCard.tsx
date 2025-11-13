import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <div>
      <div className="mb-4 rounded-2xl w-full bg-white shadow-sm border border-gray-6 dark:bg-gray-4 dark:border-transparent md:p-4 lg:p-4">
        <div className="relative w-full rounded-2xl overflow-hidden after:content-[''] after:block after:pb-[100%]">
          <Image src={CONFIG.profile.image} fill alt="" className="object-cover" />
        </div>
        <div className="flex p-2 flex-col items-center text-center">
          <div className="name text-xl leading-7 font-bold">{CONFIG.profile.name}</div>
          <div className="role mb-4 text-xs leading-5 text-gray-11">{CONFIG.profile.role}</div>
          <div className="bio mb-2 text-sm text-muted-foreground leading-5">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
