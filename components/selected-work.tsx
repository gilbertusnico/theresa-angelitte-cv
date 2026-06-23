"use client"

import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useMemo, useState, useRef } from "react"
import Link from "next/link"

const projects = [
  {
    title: "JKT48",
    description: "Website Redesign & Voting Platform",
    image: "/project-jkt48.png",
  },
  {
    title: "JBA INDONESIA",
    description: "Corporate Website & Mobile App",
    image: "/project-jba.png",
  },
  {
    title: "MIURA ASEAN",
    description: "Enterprise Website",
    image: "/project-miura.png",
  },
  {
    title: "JTRUST",
    description: "Enterprise Website",
    image: "/project-miura.png",
  },
  {
    title: "KAZOKKU",
    description: "Enterprise Website",
    image: "/project-miura.png",
  },
]

export function SelectedWork() {
  const itemsPerPage = 3
  const [page, setPage] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)

  const pages = useMemo(() => {
    const chunks = [] as typeof projects[] | any[]
    for (let i = 0; i < projects.length; i += itemsPerPage) {
      chunks.push(projects.slice(i, i + itemsPerPage))
    }
    return chunks
  }, [projects])

  const totalPages = pages.length || 1
  const fmt = (n: number) => String(n).padStart(2, "0")

  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  const getSlug = (title: string) => title.toLowerCase().replace(/\s+/g, "-")

  // Touch & mouse swipe handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    startXRef.current = e.clientX
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    const diff = e.clientX - startXRef.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev()
      else next()
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startXRef.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev()
      else next()
    }
  }

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Selected Work</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Crafting Impactful Digital Experiences
          </h2>
        </div>
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <span className="text-sm font-medium text-muted-foreground">{fmt(page + 1)} / {fmt(totalPages)}</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={page === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={page === totalPages - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next projects"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-8 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={sliderRef}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((chunk, idx) => (
            <div key={idx} className="flex-shrink-0 px-4" style={{ minWidth: "100%" }}>
              <div className="max-w-7xl mx-auto px-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                  {chunk.map((p: any) => (
                    <article
                      key={p.title}
                      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md max-w-[360px] mx-auto"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <Image
                          src={p.image || "/placeholder.svg"}
                          alt={`${p.title} — ${p.description}`}
                          width={640}
                          height={480}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                        <Link
                          href={`/works/${getSlug(p.title)}`}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                        >
                          View Case Study
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
