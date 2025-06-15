"use client"

import { Header } from "@/components/Header"
import blogData from "@/data/blog.json"
import Link from "next/link"

type BlogPost = {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: {
    type: 'text' | 'code' | 'heading'
    content: string
    language?: string
  }[]
}

export default function BlogPage() {
  const posts = blogData.posts as BlogPost[]

  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      <Header />

      {/* Main content */}
      <main className="flex items-center justify-center md:justify-start px-6 md:pl-32 md:pr-8 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl">
          <h1 className="text-xl md:text-2xl font-normal mb-8 text-white">Blog</h1>
          
          <div className="space-y-12">
            {posts.map((post) => (
              <div key={post.id} className="space-y-4">
                <Link 
                  href={`/blog/${post.id}`}
                  className="block group"
                >
                  <h2 className="text-white text-lg group-hover:text-gray-300 transition-colors">
                    {post.title} →
                  </h2>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={tag}>
                        {tag}
                        {index < post.tags.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 