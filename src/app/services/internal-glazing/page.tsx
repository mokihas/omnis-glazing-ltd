import Link from "next/link"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/Button"

export default function Page() {
  return (
    <>
      <section className="bg-background border-b border-border py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3">
               <span className="w-8 h-[1px] bg-secondary" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">Service Specialization</span>
            </div>
            <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-foreground leading-[1.1]">
              Internal Glazing.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/Omnis-Tight-Border-PNG-1920w.png" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <p className="text-muted-foreground leading-relaxed mb-4">Internal Glazing</p>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_224071326-403b8071-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">20 Years Experience</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We’re glazing specialists that have been offering the highest quality glass solutions for over 20 years. Boasting experience in all glazing fields, we can accommodate all your personal internal glazing requirements, making us the ultimate one-stop-shop for multiple or complete house projects.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">We offer bespoke, made-to-measure glass panels, partitions, splashbacks and screens for internal features of your property, as well as a range of acoustic glass, fire glass, solar control coatings, security laminates and more.</p>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Our internal glazing solutions include, but are not limited to:</h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 mb-4">Glass partitioningFeature glassSplashbacksBalustradesShower screens</ul>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_568985224-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Our services.</h2>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Fire Glass</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/MicrosoftTeams-image--2816-29-1920w.png" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">External Glazing</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_87522906-8c88b1aa-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Internal Glazing</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_568985372-f4a0f383-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Office Partitioning</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_249826261-29167214-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Feature Glass</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/MicrosoftTeams-image--2816-29-1920w.png" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Splashbacks</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_176033964-8f983f2f-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Balustrades</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_558005957-f02be4b6-11c86c70-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Architectural Glass</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_188765384-32ac28be-1920w.jpeg" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Our projects.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We’ve worked on a number of high-end and complex residential structural glazing projects, ensuring requirements and regulations are adhered to with seamless results.</p>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Reigate</h2>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Soho</h2>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Nutfield</h2>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Guildford</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">For all enquiries please email, call, or complete our contact form. A team member is ready and waiting to discuss your project and find the right bespoke glazing solution for you. From design to completion, we will be with you every step of the way.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">A:Suite 3, 157 Station Road East Station, Oxted, England, RH8 0QE</p>
            <p className="text-muted-foreground leading-relaxed mb-4">E:info@omnisglazing.uk</p>
            <p className="text-muted-foreground leading-relaxed mb-4">UK Wide Installation</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Boasting installation teams across the UK, no project is too far away.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Hours</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Monday - Friday</p>
            <p className="text-muted-foreground leading-relaxed mb-4">8:00am - 5:30pm</p>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Send a Message</h2>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">By ticking, I agree to share my form responses with Omnis Glazing Ltd</p>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/Omnis-Tight-Border-PNG-1920w.png" alt="Internal Glazing" className="w-full h-full object-cover" /></div>
            <p className="text-muted-foreground leading-relaxed mb-4">Website byInfoserve|Cookies & Privacy Policy</p>

            </div>
          </div>

          <div className="space-y-12">
            <div className="border border-border p-8 space-y-6 bg-muted/50">
              <h3 className="text-lg font-bold uppercase tracking-[0.1em]">Engage Our Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Schedule a technical consultation or request an immediate estimate.</p>
              <div className="space-y-3">
                <Button className="w-full" size="sm" asChild>
                  <Link href="/request-a-quote">Request Estimate</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`tel:${siteConfig.phone}`}>Call {siteConfig.phone}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
