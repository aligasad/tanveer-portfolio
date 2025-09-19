"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-accent font-[family-name:var(--font-heading)] hover:text-primary transition-colors"
          >
            Tanveer Alam
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent rounded-full"></span>
                )}
              </Link>
            ))}

            <a
              href="/tanRes.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 py-6 bg-card rounded-xl shadow-xl"
            >
              <div className="flex flex-col space-y-4 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${
                      isActive(link.href)
                        ? "text-accent"
                        : "text-card-foreground hover:text-accent"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/tanRes.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
