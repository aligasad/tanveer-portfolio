import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Layers, Settings, FileText, Zap, Shield, Cpu, Database } from "lucide-react"

const skills = [
  {
    icon: Layers,
    title: "SP3D (SmartPlant 3D)",
    description: "Advanced 3D piping design and modeling expertise",
    level: 95,
  },
  {
    icon: FileText,
    title: "AutoCAD",
    description: "Technical drawing and 2D design proficiency",
    level: 90,
  },
  {
    icon: Settings,
    title: "Naviswork",
    description: "Clash detection and project review capabilities",
    level: 85,
  },
  {
    icon: Shield,
    title: "Industrial Codes",
    description: "ASME, API, and international piping standards",
    level: 88,
  },
  {
    icon: Wrench,
    title: "Piping Design",
    description: "Process piping layout and system optimization",
    level: 92,
  },
  {
    icon: Cpu,
    title: "Process Engineering",
    description: "Understanding of industrial processes and systems",
    level: 80,
  },
  {
    icon: Database,
    title: "Project Management",
    description: "Coordination and delivery of complex projects",
    level: 85,
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Analytical thinking and innovative solutions",
    level: 90,
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-[family-name:var(--font-heading)]">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in piping design software, industrial standards, and engineering principles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <skill.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2 font-[family-name:var(--font-heading)]">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{skill.description}</p>

                {/* Skill Level Bar */}
                <div className="w-full bg-border rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
