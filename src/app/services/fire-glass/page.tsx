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
              Fire Glass.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/Omnis-Tight-Border-PNG-1920w.png" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <p className="text-muted-foreground leading-relaxed mb-4">Fire Rated Glazing</p>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_485314774-bb08217b-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Why have fire glass?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Fire protection should be considered in any building, that’s why we offer a robust range of fire rated glass solutions to suit a variety of complex and stringent environments.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">As specialists, we have the expertise and knowledge to support you in selecting the best glazing solution for you, considering Building Control Office (BCO) requirements and your building regulations.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">We’ve installed 100’s of fully tested and approved glazing systems across the UK, including doors, partitions of various framing materials and designs that comply or exceed the UK and European standards across refurbished and new build residential, commercial and industrial properties.</p>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">How does Fire Rated Glass work?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Protection against a spreading fire can be split into two:</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Fire Integrity</p>
            <p className="text-muted-foreground leading-relaxed mb-4">The fire rated glazing solution works as a barrier to reduce the progress of the fire. It also reduces the amount of smoke, or any other toxic gases, spreading.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Fire Insulation</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Fire rated insulated partitions can withstand extremely high temperatures meaning it restricts heat, and fire passing through.</p>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/MicrosoftTeams-image+%2817%29-1920w.png" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Why Fire Rated Glazing Partitioning?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Certain areas of your building will require more protection than others, such as frequently used corridors or escape routes. When installed, these systems provide maximum protection in the unfortunate event of a fire.</p>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_188765384-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">What is 60/60 Protection?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Each building will require a different classification, with protection levels measured in defined time periods 30, 60, 90, 120 and 180.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Different classifications are listed in terms of integrity and insulation. If the participation installed is 60/60 then this means it provides 60 minutes of integrity and 60 of insulation.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">We collaborate with a range of fire rated companies who can accommodate your needs by offering assured levels of fire protection at the rating you require. As we have a system that suits every specification, contact us regarding your project and let us find you the best suited, with fully framed and frameless integrated doors.</p>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Our services.</h2>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Fire Glass</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/MicrosoftTeams-image--2816-29-1920w.png" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">External Glazing</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_87522906-8c88b1aa-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Internal Glazing</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_568985372-f4a0f383-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Office Partitioning</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_249826261-29167214-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Feature Glass</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/MicrosoftTeams-image--2816-29-1920w.png" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Splashbacks</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_176033964-8f983f2f-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Balustrades</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_558005957-f02be4b6-11c86c70-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight mt-8">Architectural Glass</h2>
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/AdobeStock_188765384-32ac28be-1920w.jpeg" alt="Fire Glass" className="w-full h-full object-cover" /></div>
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
            <div className="aspect-[21/9] bg-muted border border-border flex items-center justify-center overflow-hidden my-8 rounded-xl"><img src="/images/pages/Omnis-Tight-Border-PNG-1920w.png" alt="Fire Glass" className="w-full h-full object-cover" /></div>
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
