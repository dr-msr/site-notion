import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="flex p-1 flex-col rounded-2xl bg-white shadow-sm border border-gray-6 dark:bg-gray-4 dark:border-transparent">
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-2xl text-gray-11 cursor-pointer hover:text-gray-12 hover:bg-gray-5"
          >
            <AiOutlineGithub className="icon text-2xl leading-8" />
            <div className="name text-sm leading-5">github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-2xl text-gray-11 cursor-pointer hover:text-gray-12 hover:bg-gray-5"
          >
            <AiOutlineInstagram className="icon text-2xl leading-8" />
            <div className="name text-sm leading-5">instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-2xl text-gray-11 cursor-pointer hover:text-gray-12 hover:bg-gray-5 overflow-hidden"
          >
            <AiOutlineMail className="icon text-2xl leading-8" />
            <div className="name text-sm leading-5">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-2xl text-gray-11 cursor-pointer hover:text-gray-12 hover:bg-gray-5"
          >
            <AiFillLinkedin className="icon text-2xl leading-8" />
            <div className="name text-sm leading-5">linkedin</div>
          </a>
        )}
      </div>
    </>
  )
}

export default ContactCard
