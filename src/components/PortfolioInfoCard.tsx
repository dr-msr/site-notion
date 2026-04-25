import React from "react"
import Link from "next/link"

type MetadataField = {
  label: string
  value: string
}

type Props = {
  fields: MetadataField[]
}

/**
 * Parses portfolio metadata from the top of a markdown content string.
 * Looks for lines matching **Label:** Value pattern after the first heading,
 * stopping at the first --- horizontal rule or non-matching line.
 *
 * Returns { fields, remainingContent } where remainingContent has the
 * metadata lines and trailing --- stripped out.
 */
export function parsePortfolioMetadata(content: string): {
  fields: MetadataField[]
  remainingContent: string
} {
  const lines = content.split("\n")
  const fields: MetadataField[] = []
  let metadataStartIdx = -1
  let metadataEndIdx = -1
  let foundHeading = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Skip empty lines
    if (!line) continue

    // Look for the first heading
    if (!foundHeading) {
      if (line.startsWith("# ")) {
        foundHeading = true
      }
      continue
    }

    // After heading, look for **Label:** Value patterns
    const match = line.match(/^\*\*(.+?):\*\*\s*(.+)$/)
    if (match) {
      if (metadataStartIdx === -1) metadataStartIdx = i
      metadataEndIdx = i
      fields.push({
        label: match[1].trim(),
        value: match[2].trim(),
      })
      continue
    }

    // If we've started collecting fields and hit ---, that's the end delimiter
    if (fields.length > 0 && line === "---") {
      metadataEndIdx = i
      break
    }

    // If we've started collecting and hit something else, stop
    if (fields.length > 0) {
      break
    }
  }

  // No metadata found
  if (fields.length === 0) {
    return { fields: [], remainingContent: content }
  }

  // Remove the metadata lines and trailing --- from content
  const remaining = lines.filter((_, idx) => {
    if (idx >= metadataStartIdx && idx <= metadataEndIdx) return false
    return true
  })

  return {
    fields,
    remainingContent: remaining.join("\n"),
  }
}

/**
 * Renders a value string, converting markdown links [text](url) inline
 * and stripping markdown emphasis markers (* and _).
 */
function renderValue(value: string) {
  // Split the value by markdown link patterns, preserving the links
  const parts: React.ReactNode[] = []
  const linkRegex = /\[(.+?)\]\((.+?)\)/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = linkRegex.exec(value)) !== null) {
    // Add text before this link
    if (match.index > lastIndex) {
      parts.push(cleanMarkdown(value.slice(lastIndex, match.index)))
    }
    const [, text, url] = match
    const isInternal = url.startsWith("/")
    parts.push(
      isInternal ? (
        <Link key={match.index} href={url} className="text-blue-11 hover:text-blue-12 underline underline-offset-2">
          {text}
        </Link>
      ) : (
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-11 hover:text-blue-12 underline underline-offset-2"
        >
          {text}
        </a>
      )
    )
    lastIndex = match.index + match[0].length
  }

  // Add remaining text after last link
  if (lastIndex < value.length) {
    parts.push(cleanMarkdown(value.slice(lastIndex)))
  }

  // If no links were found, check for plain URLs
  if (parts.length === 0) {
    if (value.startsWith("http://") || value.startsWith("https://")) {
      return (
        <a href={value} target="_blank" rel="noreferrer"
          className="text-blue-11 hover:text-blue-12 underline underline-offset-2">
          {value}
        </a>
      )
    }
    return <span>{cleanMarkdown(value)}</span>
  }

  return <span>{parts}</span>
}

/** Strip markdown emphasis markers from plain text segments */
function cleanMarkdown(text: string): string {
  return text.replace(/\*+/g, "").replace(/_+/g, "")
}

const PortfolioInfoCard: React.FC<Props> = ({ fields }) => {
  if (!fields.length) return null

  return (
    <div className="portfolio-info-card my-6 rounded-2xl overflow-hidden">
      <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-7 via-indigo-6 to-gray-6">
        <div className="rounded-2xl bg-gray-2 dark:bg-gray-3 p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-9 mb-4">
            Project Details
          </div>
          <div className="space-y-3">
            {fields.map((field, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:gap-3">
                <div className="text-sm font-semibold text-gray-11 sm:min-w-[140px] sm:flex-shrink-0">
                  {field.label}
                </div>
                <div className="text-sm text-gray-12 leading-relaxed">
                  {renderValue(field.value)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioInfoCard
