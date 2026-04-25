import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { TPosts, TPost } from "src/types"

const CONTENT_DIR = path.join(process.cwd(), "content")

function readPostsFromDir(dir: string): TPost[] {
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"))
  return files.map((file) => {
    const filePath = path.join(dir, file)
    const raw = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(raw)

    return {
      id: data.slug || file.replace(".md", ""),
      title: data.title || "Untitled",
      slug: data.slug || file.replace(".md", ""),
      date: { start_date: data.date || new Date().toISOString() },
      type: Array.isArray(data.type) ? data.type : [data.type || "Post"],
      status: Array.isArray(data.status) ? data.status : [data.status || "Public"],
      category: Array.isArray(data.category) ? data.category : data.category ? [data.category] : [],
      tags: data.tags || [],
      summary: data.summary || "",
      thumbnail: data.thumbnail || null,
      author: data.author || [{ id: "drmsr", name: "Dr. Syamirul", profile_photo: null }],
      createdTime: data.date || new Date().toISOString(),
      fullWidth: data.fullWidth || false,
    } as TPost
  })
}

export const getPosts = async (): Promise<TPosts> => {
  const posts = [
    ...readPostsFromDir(path.join(CONTENT_DIR, "posts")),
    ...readPostsFromDir(path.join(CONTENT_DIR, "pages")),
  ]

  // Sort by date descending
  posts.sort((a, b) => {
    const dateA = new Date(a.date?.start_date || a.createdTime).getTime()
    const dateB = new Date(b.date?.start_date || b.createdTime).getTime()
    return dateB - dateA
  })

  return posts
}

export const getPostContent = async (slug: string): Promise<string> => {
  const dirs = [
    path.join(CONTENT_DIR, "posts"),
    path.join(CONTENT_DIR, "pages"),
  ]

  for (const dir of dirs) {
    const filePath = path.join(dir, `${slug}.md`)
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8")
      const { content } = matter(raw)
      return content
    }
  }

  return ""
}
