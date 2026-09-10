import { siteConfig } from "@/config/siteConfig"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              About {siteConfig.businessName}
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted local glazing experts, delivering quality and reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>At Omnis Glazing Ltd, we cover all aspects of glass, whether implementing one single glazing solution or working on several projects in your home, we promise a stress-free experience, from your dynamic initial design right through to your satisfying end product. Boasting over 20 years of experience in all glazing fields, we can accommodate all your personal requirements, making us the ultimate one-stop-shop for all your needs. We’ve worked on a number of high-end and complex residential and commercial structural glazing projects, ensuring requirements and regulations are adhered to with seamless results.</p>
              <p>Our bespoke, flexible range of glazing solutions include fire glass, external and internal glazing, office partitioning, feature glass, splashbacks, balustrades, shower screens and architectural glass.</p>
              <p>Working alongside many trusted, skilled teams for several years means we have great experience in allocating the right qualified specialist to your project.</p>
              <p>We’ve worked on a number of high-end and complex residential structural glazing projects, ensuring requirements and regulations are adhered to with seamless results.</p>
              <p>For all enquiries please email, call, or complete our contact form. A team member is ready and waiting to discuss your project and find the right bespoke glazing solution for you. From design to completion, we will be with you every step of the way.</p>
              <p>Boasting installation teams across the UK, no project is too far away.</p>
            </div>
            
            <div className="pt-6">
               <Button size="lg" asChild>
                 <Link href="/request-a-quote">Contact Our Team</Link>
               </Button>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-muted rounded-lg border border-border flex flex-col items-center justify-center overflow-hidden">
             <img src="/images/pages/Omnis-Tight-Border-PNG-1920w.png" alt="Our Glazing Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
