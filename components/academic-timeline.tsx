import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

export function AcademicTimeline() {
  const education = [
    {
      year: "2019",
      degree: "Diploma in Mech Engg.",
      score: "70.4%",
      status: "Completed",
    },
    {
      year: "2014",
      degree: "High School",
      score: "65%",
      status: "Completed",
    },
  ];

  return (
    <section
      id="education"
      className=" relative py-20 bg-gradient-to-br from-background via-secondary to-background overflow-hidden"
    >
      {/* Background floating shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Academic <span className="text-[#e53939]">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A progressive academic journey showcasing consistent growth and
            specialization in Mechanical Engineering.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-rose-500"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {index % 2 === 0 ? (
                          <>
                            <div className="flex-1">
                              <Badge
                                variant={
                                  edu.status === "In Progress"
                                    ? "default"
                                    : "secondary"
                                }
                                className="mb-2"
                              >
                                {edu.status}
                              </Badge>
                              <h3 className="text-xl font-semibold text-foreground">
                                {edu.degree}
                              </h3>
                            </div>
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </>
                        ) : (
                          <>
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <div className="flex-1">
                              <Badge
                                variant={
                                  edu.status === "In Progress"
                                    ? "default"
                                    : "secondary"
                                }
                                className="mb-2"
                              >
                                {edu.status}
                              </Badge>
                              <h3 className="text-xl font-semibold text-foreground">
                                {edu.degree}
                              </h3>
                            </div>
                          </>
                        )}
                      </div>
                      <p className="text-2xl font-bold text-primary mb-1">
                        {edu.score}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Academic Performance
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 w-4 h-4 bg-rose-500 rounded-full border-4 border-background shadow-lg">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {edu.year}
                  </div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
