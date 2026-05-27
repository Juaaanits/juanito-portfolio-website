import { BlogPostPageClient } from "./BlogPostPageClient"
import type { Metadata } from "next"
import { getPostData, getAllPostSlugs } from "@/lib/posts"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const postData = await getPostData(slug)

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const postData = await getPostData(slug)
  return <BlogPostPageClient postData={postData} />
}
