"use client";

import { Button } from "@/components/ui/button";
import { Download, ChevronDown, Briefcase, Wrench, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-22 pb-15 flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background overflow-hidden">
      {/* Background floating shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Flex Wrapper */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-center md:justify-between gap-10 max-w-6xl mx-auto animate-fade-in-up">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Tagline */}
            <p className="text-sm md:text-base uppercase tracking-widest font-medium text-muted-foreground mb-3">
              Turning Ideas Into Industrial Reality
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-[family-name:var(--font-heading)] bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Tanveer Alam
            </h1>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6 font-[family-name:var(--font-heading)]">
              Piping Designer (SP3D & AutoCAD Specialist)
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Designing efficient piping systems with precision and innovation.
              I specialize in <span className="font-semibold text-accent">SP3D</span>, 
              <span className="font-semibold text-accent"> AutoCAD</span>, and industrial piping 
              solutions — with over <span className="font-semibold text-primary">3 years</span> 
              of hands-on experience in delivering projects that matter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button
                size="lg"
                className="bg-primary hover:scale-105 hover:shadow-xl transition-transform duration-300 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <a
                  href="tanRes.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </div>
                </a>
              </Button>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg rounded-xl bg-transparent"
                >
                  View My Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end md:mr-15">
            <div className="relative w-60 h-78 md:w-80 md:h-[440px] rounded-full overflow-hidden border-4 border-accent shadow-xl backdrop-blur-xl">
              <Image
                src="/images/tanveer-profile.png"
                alt="Tanveer Alam - Piping Designer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md flex flex-col items-center">
            <Briefcase className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-2xl font-bold text-primary">3+ Years</h3>
            <p className="text-muted-foreground">Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md flex flex-col items-center">
            <CheckCircle className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-2xl font-bold text-primary">15+ Projects</h3>
            <p className="text-muted-foreground">Completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md flex flex-col items-center">
            <Wrench className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-2xl font-bold text-primary">SP3D, AutoCAD</h3>
            <p className="text-muted-foreground">Core Tools</p>
          </div>
        </div>

        
      </div>
      {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            href="/about"
            className="text-accent hover:text-primary transition-colors"
          >
            <ChevronDown className="w-8 h-8 animate-pulse" />
          </Link>
        </div>
    </section>
  );
}
