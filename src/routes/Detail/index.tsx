import useMermaidEffect from "./hooks/useMermaidEffect"
import PostDetail from "./PostDetail"
import PageDetail from "./PageDetail"
import usePostQuery from "src/hooks/usePostQuery"

type Props = {}

const Detail: React.FC<Props> = () => {
  const data = usePostQuery()
  useMermaidEffect()

  if (!data) return null
  return (
    <div
      className={`py-8 ${
        data.type[0] === "Paper" ? "py-10" : ""
      }`}
    >
      {data.type[0] === "Page" && <PageDetail />}
      {data.type[0] !== "Page" && <PostDetail />}
      <style jsx global>{`
        code[class*="language-mermaid"],
        pre[class*="language-mermaid"] {
          background-color: var(--gray-5);
        }
      `}</style>
    </div>
  )
}

export default Detail
