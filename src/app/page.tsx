"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import avatar from "../../public/images/perfil.jpeg"
import projectsData from "@/data/projects.json"
import blogData from "@/data/blog.json"

export default function Portfolio() {
  const featuredProjects = projectsData.projects.slice(0, 4)
  const latestPosts = blogData.posts.slice(0, 4)

  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      <Header />

      {/* Main content - centered */}
      <main className="flex items-center justify-center px-6 min-h-screen">
        <div className="max-w-4xl w-full">
          {/* Profile Section */}
          <div className="text-center mb-12">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-gray-600 mb-6 overflow-hidden mx-auto relative">
              <Image
                src={avatar}
                alt="Delfim Celestino"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 64px, 64px"
              />
            </div>

            {/* Introduction */}
            <h1 className="text-xl md:text-2xl font-normal mb-6 text-white">Olá, eu sou Delfim Celestino.</h1>

            <div className="space-y-1 text-gray-400 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
              <p>Desenvolvedor apaixonado por criar soluções centradas no usuário.</p>
              <p>Focado em desenvolver experiências com princípios de engenharia e design.</p>
              <p>
                Atualmente trabalhando no meu projeto pessoal{" "}
                <a
                  href="https://play.google.com/store/apps/details?id=com.nirmata.planaki"
                  className="text-white underline hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  planakí
                </a>{" "}
                🍷 e sendo Engenheiro de Software no{" "}
                <a
                  href="https://www.futuromcb.com"
                  className="text-white underline hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FuturoMCB
                </a>
              </p>
            </div>

            {/* Status Section */}
            <div className="flex flex-wrap justify-center gap-1.5 text-xs text-gray-400 mb-8">
              <div className="flex items-center">
                <div className="relative -ml-1 mr-1">
                  <div className="absolute -inset-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="relative w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>codando</span>
              </div>
              <span>•</span>
              <span>vendo anime</span>
              <span>•</span>
              <span>comendo snacks</span>
              <span>•</span>
              <span>escutando lofi</span>
            </div>

            {/* Skills section */}
            <div className="mb-8">
              <h2 className="text-white text-sm font-medium mb-3">Top Skills</h2>
              <div className="flex flex-wrap justify-center gap-1.5">
                {["JavaScript", "React.js", "CSS", "Software Design", "UI/UX Design"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-1.5 py-0.5 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Projects */}
            <div>
              <h2 className="text-white text-sm font-medium mb-3">Projetos em Destaque</h2>
              <div className="space-y-4">
                {featuredProjects.map((project) => (
                  <Link 
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="block group"
                  >
                    <h3 className="text-white text-sm group-hover:text-gray-300 transition-colors">
                      {project.title} →
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{project.description}</p>
                  </Link>
                ))}
                <Link 
                  href="/projects"
                  className="inline-block text-white underline hover:text-gray-300 transition-colors text-xs mt-2"
                >
                  Ver todos os projetos →
                </Link>
              </div>
            </div>

            {/* Blog Preview */}
            <div>
              <h2 className="text-white text-sm font-medium mb-3">Últimos Artigos</h2>
              <div className="space-y-4">
                {latestPosts.map((post) => (
                  <Link 
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="block group"
                  >
                    <h3 className="text-white text-sm group-hover:text-gray-300 transition-colors">
                      {post.title} →
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{post.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('pt-BR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                ))}
                <Link 
                  href="/blog"
                  className="inline-block text-white underline hover:text-gray-300 transition-colors text-xs mt-2"
                >
                  Ver todos os artigos →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="md:block fixed md:static bottom-6 right-6 md:bottom-auto md:right-auto">
            <Button
              className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium shadow-lg md:shadow-none"
              onClick={() => (window.location.href = "mailto:delfimcelestinoamissepastola@gmail.com")}
            >
              Say Hello
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
