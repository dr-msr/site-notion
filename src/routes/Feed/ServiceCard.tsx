import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import { Emoji } from "src/components/Emoji"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className="p-1 mb-3">
        <Emoji>🌟</Emoji> Service
      </div>
      <div className="flex p-1 mb-9 flex-col rounded-2xl bg-white shadow-sm border border-gray-6 dark:bg-gray-4 dark:border-transparent">
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
            className="flex p-3 gap-3 items-center rounded-2xl text-gray-11 cursor-pointer hover:text-gray-12 hover:bg-gray-5"
          >
            <AiFillCodeSandboxCircle className="icon text-2xl leading-8" />
            <div className="name text-sm leading-5">{project.name}</div>
          </a>
        ))}
      </div>
    </>
  )
}

export default ServiceCard
