"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import avatar from "../../public/images/perfil.jpeg"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with social links */}
      <header className="flex justify-end p-4 md:p-8 space-x-4 md:space-x-8">
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

      {/* Main content - responsive positioning */}
      <main className="flex items-center justify-center md:justify-start px-6 md:pl-32 md:pr-8 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)]">
        <div className="max-w-md text-center md:text-left">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-gray-600 mb-6 overflow-hidden mx-auto md:mx-0 relative">
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

          <div className="space-y-1 text-gray-400 text-sm leading-relaxed mb-8">
            <p>Desenvolvedor apaixonado por criar soluções centradas no usuário.</p>
            <p>Focado em desenvolver experiências com princípios de engenharia e design.</p>
            <p>
              Atualmente trabalhando na{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.nirmata.planaki"
                className="text-white underline hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                planakí
              </a>{" "}
              🍷
            </p>
          </div>

          {/* Skills section */}
          <div className="mb-8">
            <h2 className="text-white text-sm font-medium mb-3">Top Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs text-gray-400">
              <span>JavaScript</span>
              <span>•</span>
              <span>React.js</span>
              <span>•</span>
              <span>CSS</span>
              <span>•</span>
              <span>Software Design</span>
              <span>•</span>
              <span>UI/UX Design</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium"
            onClick={() => (window.location.href = "mailto:delfimcelestinoamissepastola@email.com")}
          >
            Say Hello
          </Button>
        </div>
      </main>
    </div>
  )
}
