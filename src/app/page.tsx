import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ArrowRight, Play, Star } from "lucide-react"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"
import { ArchitecturalShowcase } from "@/components/ui/ArchitecturalShowcase"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* SECTION 1 - HERO (FinRise SaaS Inspired) */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-background overflow-hidden pt-32 pb-20">
        
        {/* Ambient Lighting & Grid Background */}
        <div className="absolute inset-0 bg-radial-gradient z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 z-0 pointer-events-none" />
        
        <div className="container relative z-10 flex flex-col items-center text-center animate-fade-up">
          
          {/* Social Proof Pill Badge */}
          {siteConfig.reviews?.aggregateRating && (
            <div className="mb-8 inline-flex items-center gap-2 bg-white border border-border shadow-sm rounded-full px-4 py-1.5 transform hover:scale-105 transition-transform cursor-default">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-foreground">
                Google & Trustpilot <span className="text-amber-500">★★★★★</span> {siteConfig.reviews.aggregateRating} Rating
              </span>
            </div>
          )}
          
          {/* High-Impact Headline */}
          <h1 className="max-w-4xl text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-extrabold leading-[1.05] tracking-tight text-primary mb-6">
            Transform Spaces Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Lasting Elegance
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mb-10">
            Turning complex architectural glass visions into seamless reality. 
            We engineer transparency, guiding you every step of the way so you can focus on the design, not the stress.
          </p>
          
          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" asChild className="rounded-full w-full sm:w-auto px-8 h-14 text-base shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5">
              <Link href="/request-a-quote">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild className="rounded-full w-full sm:w-auto px-8 h-14 text-base border-border/60 bg-white/50 backdrop-blur-sm hover:bg-white transition-all hover:-translate-y-0.5">
              <Link href="/projects" className="group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 mr-2 group-hover:bg-indigo-200 transition-colors">
                  <Play className="w-3 h-3 text-indigo-700 ml-0.5" />
                </div>
                Watch Showcase
              </Link>
            </Button>
          </div>

        </div>

        {/* Interactive Dashboard / Showcase Mockup */}
        <div className="container mt-16 lg:mt-24 relative z-20 animate-fade-up delay-200">
          <ArchitecturalShowcase />
        </div>
        
      </section>

      {/* SECTION 2 - STATS / TRUST */}
      <section className="py-20 bg-white border-y border-border/50 relative z-30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "BS EN Compliant" },
              { value: "24/7", label: "Emergency Response" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                <span className="text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">{stat.value}</span>
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICES */}
      <section className="py-32 bg-slate-50 relative">
        <div className="absolute inset-0 bg-grid opacity-[0.03] z-0 pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
            <div className="mb-6 inline-flex items-center gap-3 bg-white px-4 py-1.5 rounded-full border border-border shadow-sm">
               <span className="w-2 h-2 rounded-full bg-secondary" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
              Architectural Glazing Solutions.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From structural commercial glass to bespoke residential installations, we engineer transparency.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* SECTION 4 - CTA FOOTER */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-20" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your space?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">Get in touch today for a free, no-obligation consultation and bespoke quote tailored to your architectural needs.</p>
          <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-8 h-14 text-base">
            <Link href="/request-a-quote">Request a Consultation</Link>
          </Button>
        </div>
      </section>

    </>
  )
}
