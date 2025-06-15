"use client"

import Link from "next/link"

interface HeaderProps {
  showBackButton?: boolean
  backLink?: string
}

export function Header({ showBackButton = false, backLink = "/" }: HeaderProps) {
  return (
    <header className="flex justify-end p-4 md:p-8 space-x-4 md:space-x-8">
      {showBackButton && (
        <Link
          href={backLink}
          className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
        >
          ← Voltar
        </Link>
      )}
      <Link
        href="/projects"
        className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
      >
        Projetos
      </Link>
      <a
        href="https://www.linkedin.com/in/delfim-celestino-6187252b4"
        className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        @LinkedIn
      </a>
      <a
        href="https://github.com/delfimcelestino"
        className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        href="mailto:delfimcelestinoamissepastola@email.com"
        className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
      >
        @Email
      </a>
    </header>
  )
} 