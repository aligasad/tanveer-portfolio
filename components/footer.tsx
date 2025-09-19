import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-background via-secondary to-background border-t border-border overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-repeat"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-primary/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold text-accent mb-4 font-[family-name:var(--font-heading)]">
              Tanveer Alam
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professional Piping Designer specializing in SP3D, AutoCAD, and
              industrial piping systems. Delivering innovative solutions for
              complex engineering challenges.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/in/tanveer-alam-1a631726a"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-all shadow-md"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tanveer.alig"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-all shadow-md"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:tanveer123alam@gmail.com"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-all shadow-md"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/aligasad"
                className="p-2 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground transition-all shadow-md"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4 font-[family-name:var(--font-heading)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={`${item.toLowerCase().replace(" ", "")}`}
                      className="relative text-muted-foreground hover:text-accent transition-colors before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-accent before:transition-all hover:before:w-full"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4 font-[family-name:var(--font-heading)]">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:tanveer123alam@email.com">
                  <span className="text-muted-foreground">
                  tanveer123alam@email.com
                </span>
                </a>
                
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">
                  <a href="tel:+919634612657">+91 9634612657</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 <a href="https://asadalam.info">asadalam.info</a> All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm italic">
            Designed with precision and innovation 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
