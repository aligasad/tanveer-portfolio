"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Layers, Zap, Factory } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "PV Manufacturing Facility Piping",
    description:
      "Complete piping design for integrated photovoltaic manufacturing plant including process piping, utilities, and safety systems.",
    icon: Zap,
    technologies: ["SP3D", "AutoCAD", "Naviswork", "ASME B31.3"],
    highlights: [
      "Designed 15+ process piping systems",
      "Optimized layout for manufacturing efficiency",
      "Implemented advanced safety protocols",
    ],
  },
  {
    title: "Ammonia Plant Piping Systems",
    description:
      "Comprehensive piping design for ammonia and urea production facility with complex process requirements.",
    icon: Factory,
    technologies: ["SP3D", "Clash Detection", "Isometric Drawings", "API Standards"],
    highlights: [
      "Handled high-pressure piping systems",
      "International project coordination",
      "Zero clash delivery achievement",
    ],
  },
  {
    title: "Refinery Expansion Project",
    description:
      "Piping design support for major refinery expansion including new processing units and interconnecting systems.",
    icon: Layers,
    technologies: ["AutoCAD", "SP3D", "Process Engineering", "Material Optimization"],
    highlights: [
      "Supported multiple processing units",
      "Cost-effective material selection",
      "Compliance with refinery standards",
    ],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-[family-name:var(--font-heading)]">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of industrial piping projects demonstrating technical expertise, innovation, and precision
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative bg-card border-border group hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 overflow-hidden rounded-2xl">
                {/* Glow Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/10 via-primary/10 to-transparent pointer-events-none" />

                <CardContent className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <project.icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 font-[family-name:var(--font-heading)]">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-2 text-sm uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-accent/10 text-accent hover:bg-accent/20 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-card-foreground mb-3 text-sm uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0 shadow-sm" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center text-accent font-medium group-hover:text-primary transition-colors cursor-pointer">
                      <span className="relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full mr-2">
                        View Details
                      </span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    </section>
  )
}
