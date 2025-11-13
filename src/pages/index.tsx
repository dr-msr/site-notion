import Feed from "src/routes/Feed"
import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "../types"
import { getPosts } from "../apis"
import MetaConfig from "src/components/MetaConfig"
import { queryKey } from "src/constants/queryKey"
import { GetStaticProps } from "next"
import { QueryClient, dehydrate } from "@tanstack/react-query"
import { filterPosts } from "src/libs/utils/notion"

export const getStaticProps: GetStaticProps = async () => {
  // Create a fresh QueryClient for each regeneration to avoid state leakage
  const queryClient = new QueryClient()
  
  const posts = filterPosts(await getPosts())
  await queryClient.prefetchQuery(queryKey.posts(), () => posts)

  const revalidatedAt = new Date().toISOString()
  console.log(`[getStaticProps] Regenerating homepage at ${revalidatedAt}`)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidatedAt, // Debug timestamp for testing
    },
    revalidate: CONFIG.revalidateTime,
  }
}

const FeedPage: NextPageWithLayout = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  }

  return (
    <>
      <MetaConfig {...meta} />
      <Feed />
    </>
  )
}

export default FeedPage
