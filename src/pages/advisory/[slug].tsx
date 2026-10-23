import { getPosts } from "src/apis"
import { filterPosts } from "src/libs/utils/notion"
import DetailPage from "../[slug]"

// Advisory posts are also served at /advisory/<slug>, the address that gets shared.
export const getStaticPaths = async () => {
  const posts = filterPosts(await getPosts(), {
    acceptStatus: ["Public", "PublicOnDetail"],
    acceptType: ["Paper", "Post", "Page"],
  })

  return {
    paths: posts
      .filter((row) => row.category?.includes("Advisory"))
      .map((row) => `/advisory/${row.slug}`),
    fallback: false,
  }
}

export { getStaticProps } from "../[slug]"

export default DetailPage
