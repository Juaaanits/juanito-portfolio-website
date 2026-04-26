import { BlogPostPageClient } from "./BlogPostPageClient"
import type { Metadata } from "next"
import { getPostData, getAllPostSlugs } from "@/lib/posts"

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const postData = await getPostData(params.slug)

  if (!postData) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: postData.title,
    description: postData.excerpt,
    openGraph: {
      title: postData.title,
      description: postData.excerpt,
      type: "article",
      publishedTime: postData.date,
      authors: ["Giovani Moutinho"],
      tags: postData.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)
  return <BlogPostPageClient postData={postData} />
}
