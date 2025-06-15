"use client"

import { Header } from "@/components/Header"
import blogData from "@/data/blog.json"
import { notFound } from "next/navigation"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Link from "next/link"
import { use } from "react"

type ContentSection = {
  type: 'text' | 'code' | 'heading'
  content: string
  language?: string
}

type BlogPost = {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: ContentSection[]
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const post = blogData.posts.find(p => p.id === id) as BlogPost | undefined
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      <Header />

      {/* Main content */}
      <main className="flex items-center justify-center md:justify-start px-4 md:px-6 md:pl-32 md:pr-8 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)]">
        <article className="w-full max-w-2xl">
          <header className="mb-8 md:mb-12">
            <Link 
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors mb-4 inline-block text-sm md:text-base"
            >
              ← Voltar para o blog
            </Link>
            <h1 className="text-xl md:text-3xl font-normal mb-4 text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
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
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-1.5 py-0.5 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            {post.content.map((section: ContentSection, index: number) => (
              <div key={index} className="mb-6 md:mb-8">
                {section.type === 'text' && (
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                    {section.content}
                  </p>
                )}
                {section.type === 'code' && (
                  <div className="my-4 md:my-6">
                    <SyntaxHighlighter
                      language={section.language}
                      style={vscDarkPlus}
                      customStyle={{
                        margin: 0,
                        borderRadius: '0.5rem',
                        padding: '0.75rem',
                        fontSize: '0.875rem',
                      }}
                    >
                      {section.content}
                    </SyntaxHighlighter>
                  </div>
                )}
                {section.type === 'heading' && (
                  <h2 className="text-lg md:text-xl font-normal text-white mt-6 md:mt-8 mb-3 md:mb-4">
                    {section.content}
                  </h2>
                )}
              </div>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
} 