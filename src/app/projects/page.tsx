"use client"

import { Header } from "@/components/Header"
import projectsData from "@/data/projects.json"
import Link from "next/link"

type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  playStoreLink: string
}

export default function ProjectsPage() {
  const projects = projectsData.projects as Project[]

  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      <Header />

      {/* Main content */}
      <main className="flex items-center justify-center md:justify-start px-6 md:pl-32 md:pr-8 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl">
          <h1 className="text-xl md:text-2xl font-normal mb-8 text-white">Projetos</h1>
          
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="space-y-4">
                <Link 
                  href={`/projects/${project.id}`}
                  className="block group"
                >
                  <h2 className="text-white text-lg group-hover:text-gray-300 transition-colors">
                    {project.title} →
                  </h2>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-1.5 py-0.5 text-xs rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 