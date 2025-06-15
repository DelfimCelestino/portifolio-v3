import { Metadata } from 'next'
import projectsData from '@/data/projects.json'

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
  const project = projectsData.projects.find((p: Project) => p.id === id)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    }
  }

  return {
    title: `${project.title} | Delfim Celestino`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      tags: project.technologies,
      images: [
        {
          url: '/perfil.jpeg',
          width: 1200,
          height: 630,
          alt: 'Delfim Celestino'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: ['/perfil.jpeg']
    }
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projectsData.projects.find((p: Project) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{project.description}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project.features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {project.playStoreLink && (
          <div className="mt-8">
            <a
              href={project.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View on Play Store
            </a>
          </div>
        )}
      </div>
    </main>
  )
} 