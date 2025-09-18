"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Reliance Industries",
    project: "Integrated PV Manufacturing Facility",
    role: "Piping Designer",
    duration: "2023 - Present",
    location: "Gujarat, India",
    responsibilities: [
      "Designed complex piping systems for photovoltaic manufacturing processes",
      "Created detailed 3D models using SP3D software",
      "Collaborated with process engineers to optimize system layouts",
      "Ensured compliance with industrial safety standards and codes",
    ],
  },
  {
    company: "Saipem",
    project: "Perdaman Project",
    role: "Piping Designer",
    duration: "2022 - 2023",
    location: "Western Australia",
    responsibilities: [
      "Developed piping layouts for ammonia and urea production facility",
      "Performed clash detection and resolution using Naviswork",
      "Generated isometric drawings and material take-offs",
      "Coordinated with international engineering teams",
    ],
  },
  {
    company: "Zeeco India",
    project: "Numaligarh Refinery Expansion",
    role: "Junior Piping Designer",
    duration: "2021 - 2022",
    location: "Assam, India",
    responsibilities: [
      "Assisted in piping design for refinery expansion project",
      "Created 2D drawings and supported 3D modeling activities",
      "Learned industrial piping standards and best practices",
      "Participated in design reviews and technical discussions",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-[family-name:var(--font-heading)]">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track record of successful project delivery across diverse industrial sectors
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent hidden md:block rounded-full shadow-lg shadow-accent/30" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-accent rounded-full border-4 border-background hidden md:block shadow-md shadow-accent/50" />

                  {/* Experience Card */}
                  <Card className="md:ml-16 bg-gradient-to-br from-card to-background border-border hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-card-foreground mb-1 font-[family-name:var(--font-heading)]">
                            {exp.project}
                          </h3>
                          <div className="flex items-center text-accent mb-2">
                            <Building className="w-5 h-5 mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <p className="text-primary font-medium text-lg">{exp.role}</p>
                        </div>

                        <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-4 md:mt-0">
                          <div className="flex items-center mb-1">
                            <Calendar className="w-4 h-4 mr-2 text-accent" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-primary" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-4 text-lg">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start bg-accent/5 rounded-lg p-3 hover:bg-accent/10 transition-colors"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm" />
                              <span className="text-muted-foreground leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
