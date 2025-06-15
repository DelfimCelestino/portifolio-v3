"use client"

import { use } from "react"
import { Header } from "@/components/Header"
import projectsData from "@/data/projects.json"
import { notFound } from "next/navigation"
import { Metadata } from 'next'

type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  playStoreLink: string
}

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate metadata for each project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projectsData.projects.find(p => p.id === id)
  
  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto que você está procurando não existe.'
    }
  }

  return {
    title: `${project.title} | Projetos de Delfim Celestino`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      authors: ['Delfim Celestino'],
      tags: project.technologies,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    }
  }
}

export default function ProjectPage({ params }: Props) {
  const { id } = use(params)
  const project = projectsData.projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20 md:pb-0">
      <Header />

      {/* Main content */}
      <main className="flex items-center justify-center md:justify-start px-6 md:pl-32 md:pr-8 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)]">
        <div className="max-w-2xl">
          <h1 className="text-xl md:text-2xl font-normal mb-6 text-white">{project.title}</h1>
          
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
            <p className="whitespace-pre-line">{project.longDescription}</p>

            <div>
              <h2 className="text-white text-sm font-medium mb-3">Tecnologias</h2>
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