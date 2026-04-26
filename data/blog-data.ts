import { getSortedPostsData } from "@/lib/posts"

export const allBlogPosts = getSortedPostsData()

// Get featured blog posts (top 3)
export const featuredBlogPosts = allBlogPosts.slice(0, 3)

export default {
  allBlogPosts,
  featuredBlogPosts,
}
