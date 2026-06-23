import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectsData: Record<string, any> = {
  "jkt48": {
    title: "JKT48",
    description: "Website Redesign & Voting Platform",
    fullDescription:
      "A comprehensive redesign and voting platform for JKT48, Japan's sister group in Indonesia. This project focused on enhancing user engagement and modernizing the platform.",
    image: "/project-jkt48.png",
    category: "Website Design",
    year: 2023,
  },
  "jba-indonesia": {
    title: "JBA INDONESIA",
    description: "Corporate Website & Mobile App",
    fullDescription:
      "A complete corporate presence overhaul including responsive website design and native mobile application for JBA Indonesia.",
    image: "/project-jba.png",
    category: "Web & Mobile",
    year: 2023,
  },
  "miura-asean": {
    title: "MIURA ASEAN",
    description: "Enterprise Website",
    fullDescription:
      "Enterprise-level website design and development for MIURA ASEAN, focusing on B2B solutions and corporate presence.",
    image: "/project-miura.png",
    category: "Enterprise",
    year: 2023,
  },
  "jtrust": {
    title: "JTRUST",
    description: "Enterprise Website",
    fullDescription:
      "Professional enterprise website for JTRUST, emphasizing corporate branding and user experience.",
    image: "/project-miura.png",
    category: "Enterprise",
    year: 2023,
  },
  "kazokku": {
    title: "KAZOKKU",
    description: "Enterprise Website",
    fullDescription:
      "Enterprise website solution for KAZOKKU with focus on modern design and scalability.",
    image: "/project-miura.png",
    category: "Enterprise",
    year: 2023,
  },
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projectSlug = slug?.toLowerCase().trim()
  const project = projectsData[projectSlug]

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="text-muted-foreground mt-2">Slug: {projectSlug}</p>
        <Link href="/#projects" className="mt-4 text-primary hover:underline">
          Back to projects
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Back button */}
      <Link href="/#projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      {/* Project header */}
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">Year: {project.year}</p>
      </div>

      {/* Project image placeholder */}
      <div className="mb-12 overflow-hidden rounded-2xl border border-border bg-muted aspect-video flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Project Image: {project.image}</p>
          <p className="text-sm text-muted-foreground mt-2">(Design coming soon)</p>
        </div>
      </div>

      {/* Full description */}
      <div className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Project Overview</h2>
        <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
      </div>

      {/* Dummy sections */}
      <div className="grid gap-12 md:grid-cols-2 mb-12">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">Challenge</h3>
          <p className="text-muted-foreground">
            Detailed challenge description will be provided as design is finalized.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">Solution</h3>
          <p className="text-muted-foreground">
            Solution implementation details will be added with design assets.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border pt-12">
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
          Ready to discuss your project?
        </h3>
        <Link
          href="/#contact"
          className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
