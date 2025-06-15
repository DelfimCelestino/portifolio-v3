"use client"

import { Header } from "@/components/Header"
import projectsData from "@/data/projects.json"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header showBackButton backLink="/" />

      {/* Main content */}
      <main className="flex items-center justify-center md:justify-start px-6 md:pl-32 md:pr-8 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl">
          <h1 className="text-xl md:text-2xl font-normal mb-8 text-white">Projetos</h1>
          
          <div className="space-y-12">
            {projectsData.projects.map((project) => (
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
                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={tech}>
                      {tech}
                      {index < Math.min(3, project.technologies.length - 1) && <span> • </span>}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span>+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 