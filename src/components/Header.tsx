"use client"

import Link from "next/link"
import Image from "next/image"
import avatar from "../../public/images/perfil.jpeg"



export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="flex items-center justify-between p-4 md:p-8 max-w-7xl mx-auto">
        {/* Left side - Avatar */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden relative">
              <Image
                src={avatar}
                alt="Delfim Celestino"
                className="object-cover"
                fill
                sizes="32px"
              />
            </div>
            <span className="hidden md:inline text-gray-400 group-hover:text-white transition-colors text-xs md:text-sm">
              Delfim Celestino
            </span>
          </Link>
        </div>

        {/* Right side - Navigation links */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link
            href="/project"
            className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
          >
            Projetos
          </Link>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
          >
            Blog
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
            href="mailto:delfimcelestinoamissepastola@gmail.com"
            className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
          >
            @Email
          </a>
        </div>
      </div>
    </header>
  )
} 