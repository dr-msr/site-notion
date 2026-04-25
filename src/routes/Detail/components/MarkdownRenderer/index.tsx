import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type Props = {
  content: string
}

const MarkdownRenderer: FC<Props> = ({ content }) => {

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ src, alt, ...props }) => {
            if (!src) return null
            if (src.startsWith("http")) {
              return (
                <span className="block relative w-full my-4">
                  <img src={src} alt={alt || ""} className="rounded-lg max-w-full" {...props} />
                </span>
              )
            }
            return (
              <span className="block relative w-full my-4 overflow-hidden rounded-lg">
                <Image src={src} alt={alt || ""} width={800} height={450} className="rounded-lg" />
              </span>
            )
          },
          a: ({ href, children, ...props }) => {
            if (href?.startsWith("/")) {
              return <Link href={href}>{children}</Link>
            }
            return (
              <a href={href} target="_blank" rel="noreferrer" {...props}>
                {children}
              </a>
            )
          },
          pre: ({ children, ...props }) => (
            <pre className="rounded-lg overflow-x-auto my-4" {...props}>
              {children}
            </pre>
          ),
          code: ({ className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "")
            if (match) {
              return (
                <code className={`language-${match[1]}`} {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code className="px-1.5 py-0.5 rounded bg-gray-5 text-sm" {...props}>
                {children}
              </code>
            )
          },
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-5 mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="my-3 leading-7">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 my-3 space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 my-3 space-y-1">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-8 pl-4 my-4 italic text-gray-11">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-gray-6">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-6 px-4 py-2 bg-gray-3 font-semibold text-left">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-6 px-4 py-2">{children}</td>
          ),
          hr: () => <hr className="my-8 border-gray-6" />,
        }}
      >
        {content}
      </ReactMarkdown>
      <style jsx global>{`
        .markdown-content {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--gray-12);
        }
        .markdown-content a {
          color: var(--blue-11);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .markdown-content a:hover {
          color: var(--blue-12);
        }
      `}</style>
    </div>
  )
}

export default MarkdownRenderer
