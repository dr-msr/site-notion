import { useQuery, useQueryClient } from "@tanstack/react-query"
import { queryKey } from "src/constants/queryKey"
import { TPost } from "src/types"
import { CONFIG } from "../../site.config"
import { useEffect } from "react"

const usePostsQuery = () => {
  const queryClient = useQueryClient()
  
  const { data } = useQuery({
    queryKey: queryKey.posts(),
    initialData: [] as TPost[],
    enabled: false,
    staleTime: CONFIG.revalidateTime * 1000, // Match server revalidate time
  })

  // Invalidate and refetch on mount to ensure fresh data after hydration
  useEffect(() => {
    queryClient.invalidateQueries(queryKey.posts())
  }, [queryClient])

  if (!data) throw new Error("Posts data is not found")

  return data
}

export default usePostsQuery
