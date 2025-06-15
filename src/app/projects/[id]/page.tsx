"use client"

import { use } from "react"
import { Header } from "@/components/Header"
import projectsData from "@/data/projects.json"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const project = projectsData.projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header showBackButton backLink="/projects" />

      {/* Main content */}
      <main className="flex items-center justify-center md:justify-start px-6 md:pl-32 md:pr-8 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl">
          <h1 className="text-xl md:text-2xl font-normal mb-6 text-white">{project.title}</h1>
          
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p className="whitespace-pre-line">{project.longDescription}</p>

            <div>
              <h2 className="text-white text-sm font-medium mb-3">Tecnologias</h2>
              <div className="flex flex-wrap gap-3 text-xs">
                {project.technologies.map((tech, index) => (
                  <span key={tech}>
                    {tech}
                    {index < project.technologies.length - 1 && <span> • </span>}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-white text-sm font-medium mb-3">Recursos</h2>
              <ul className="space-y-1 text-xs">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <a
              href={project.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white underline hover:text-gray-300 transition-colors"
            >
              Ver no Google Play →
            </a>
          </div>
        </div>
      </main>
    </div>
  )
} 