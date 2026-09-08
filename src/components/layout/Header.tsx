"use client"

import * as React from "react"
import Link from "next/link"
import { Phone, Menu, X, ArrowRight } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-6 flex justify-center w-full px-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <div className="flex items-center justify-between rounded-full border border-border/40 bg-white/70 backdrop-blur-md px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] supports-[backdrop-filter]:bg-white/60">
          
          <Link href="/" className="flex items-center space-x-2 pl-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-sm">
              <span className="font-bold leading-none text-lg tracking-tighter">O</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-primary">
              {siteConfig.businessName !== "[BUSINESS NAME]" ? "Omnis Glazing" : "Omnis"}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 rounded-full bg-muted/50 px-2 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-white hover:text-foreground hover:shadow-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 pr-1">
            <Link 
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
              className="group flex items-center text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              <Phone className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              {siteConfig.phone}
            </Link>
            <Button asChild className="rounded-full h-10 px-6 font-semibold shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all group">
              <Link href="/request-a-quote">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground rounded-full hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 rounded-2xl border border-border/50 bg-white/95 backdrop-blur-lg p-4 shadow-xl z-50 pointer-events-auto">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-base font-medium hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col space-y-3 pt-4 border-t border-border">
              <Button asChild className="w-full justify-center rounded-xl h-12">
                <Link href={`tel:${siteConfig.phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-center rounded-xl h-12">
                <Link href="/request-a-quote">Request a Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
