import { NextApiRequest, NextApiResponse } from "next"
import { getPosts } from "../../apis"

/**
 * Server-only on-demand revalidate endpoint
 * 
 * Security: This endpoint should ONLY be called from trusted server-side code
 * (CI, admin backend, webhooks). DO NOT call from public client code.
 * 
 * Usage:
 * - Revalidate all posts: POST /api/revalidate?secret=<REVALIDATE_SECRET>
 * - Revalidate specific path: POST /api/revalidate?secret=<REVALIDATE_SECRET>&path=<path>
 * - Revalidate homepage: POST /api/revalidate?secret=<REVALIDATE_SECRET>&path=/
 * 
 * Example: curl -X POST "https://your-site/api/revalidate?secret=$REVALIDATE_SECRET&path=/"
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("[revalidate] Request received", { query: req.query })
  
  // Check secret from query param or header
  const secret = req.query.secret || req.headers['x-revalidate-secret']
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    console.error("[revalidate] Invalid token provided")
    return res.status(401).json({ message: "Invalid token" })
  }

  try {
    const { path } = req.query
    
    if (path && typeof path === "string") {
      console.log(`[revalidate] Revalidating path: ${path}`)
      await res.revalidate(path)
      return res.json({ revalidated: true, path })
    } else {
      // Revalidate all posts
      console.log("[revalidate] Revalidating all posts")
      const posts = await getPosts()
      const revalidateRequests = posts.map((row) =>
        res.revalidate(`/${row.slug}`)
      )
      await Promise.all(revalidateRequests)
      return res.json({ revalidated: true, count: posts.length })
    }
  } catch (err) {
    console.error("[revalidate] Error:", err)
    return res.status(500).json({ 
      message: "Error revalidating", 
      error: err instanceof Error ? err.message : String(err) 
    })
  }
}
