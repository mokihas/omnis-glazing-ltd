import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ArrowRight, Play, Star } from "lucide-react"
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema"

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* SECTION 1 - HERO (FinRise SaaS Inspired + GHL Quote Form) */}
      <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden border-b border-border">
        
        
        {/* Right Side GHL Embed or Fallback */}
        <div className="absolute inset-0 w-full h-full lg:w-[45%] lg:left-auto lg:right-0 bg-muted/50 z-0 flex items-center justify-center border-l border-border">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          {siteConfig.ghl?.heroFormEmbedCode && siteConfig.ghl.heroFormEmbedCode.includes('<') && !siteConfig.ghl.heroFormEmbedCode.includes('Paste your GHL') ? (
            <div 
              className="w-full h-full bg-white/80 backdrop-blur-sm flex items-center justify-center p-8 lg:p-12 overflow-y-auto relative z-10"
              dangerouslySetInnerHTML={{ __html: siteConfig.ghl.heroFormEmbedCode }}
            />
          ) : (
            <div className="w-full h-full bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 lg:p-16 relative z-10">
              <div className="w-full max-w-md space-y-6">
                <div className="text-center space-y-2">
                  <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">GHL Lead Capture</span>
                  <h3 className="text-2xl font-bold text-foreground">Request a Quote</h3>
                  <p className="text-muted-foreground text-sm">Paste your GHL Form Embed Code into siteConfig.ts to replace this skeleton.</p>
                </div>
                <div className="space-y-4 pt-4 opacity-40">
                  <div className="h-12 w-full bg-muted border border-border rounded-xl" />
                  <div className="h-12 w-full bg-muted border border-border rounded-xl" />
                  <div className="h-24 w-full bg-muted border border-border rounded-xl" />
                  <div className="h-12 w-full bg-primary rounded-xl" />
                </div>
              </div>
            </div>
          )}
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:block hidden pointer-events-none z-20" />
           <div className="absolute inset-0 bg-background/90 lg:hidden block pointer-events-none z-20" />
        </div>
        
        {/* Left Side Copy & CTAs */}
        <div className="container relative z-10 animate-fade-up">
          <div className="max-w-2xl flex flex-col items-start text-left pt-12 pb-12">
            
            {/* High-Impact Headline */}
            <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold leading-[1.05] tracking-tight text-primary mb-6">
              Transform Spaces Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Lasting Elegance
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-lg mb-10">
              Turning complex architectural glass visions into seamless reality. 
              We engineer transparency, guiding you every step of the way so you can focus on the design.
            </p>
            
            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto mb-12">
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
            
            {/* Social Proof Pill Badge */}
            {siteConfig.reviews?.aggregateRating && (
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border shadow-sm rounded-full px-4 py-1.5 transform hover:scale-105 transition-transform cursor-default mt-auto">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-foreground">
                  Google & Trustpilot <span className="text-amber-500">★★★★★</span> {siteConfig.reviews.aggregateRating} Rating
                </span>
              </div>
            )}
          </div>
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
