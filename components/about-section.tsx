"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-background to-secondary overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #E62727 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4 relative inline-block font-[family-name:var(--font-heading)]">
            About Me
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate piping designer with expertise in creating efficient and
            innovative industrial solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Card 1 */}
            <Card className="bg-card/80 backdrop-blur-md border border-border hover:shadow-2xl hover:border-accent/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-xl shadow-inner">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 font-[family-name:var(--font-heading)]">
                      Professional Background
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Experienced Piping Designer with 3+ years in the industry,
                      specializing in SP3D software and industrial piping
                      systems. Proven track record in delivering complex
                      projects for major industrial facilities and refineries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-card/80 backdrop-blur-md border border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl shadow-inner">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 font-[family-name:var(--font-heading)]">
                      Education
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Diploma in Mechanical Production Engineering from Aligarh
                      Muslim University (AMU). Strong foundation in mechanical
                      engineering principles and manufacturing processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-card/80 backdrop-blur-md border border-border hover:shadow-2xl hover:border-accent/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-xl shadow-inner">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 font-[family-name:var(--font-heading)]">
                      Professional Objective
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To leverage my expertise in piping design and 3D modeling
                      to contribute to innovative industrial projects while
                      continuously expanding my technical knowledge and skills
                      in the field of mechanical engineering.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Profile Circle */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <div className="w-64 h-64 bg-card/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-border">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                        TA
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground font-[family-name:var(--font-heading)]">
                      Tanveer Alam
                    </h3>
                    <p className="text-accent font-medium">
                      Piping Designer
                    </p>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
