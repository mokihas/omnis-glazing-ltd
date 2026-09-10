import { siteConfig } from "@/config/siteConfig"

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Take a look at some of our recent residential and commercial glazing work across the region.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                <img src="/images/pages/Omnis-Tight-Border-PNG-1920w.png" alt="Reigate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">Reigate</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">Our client wanted to follow the curvature of the patio with a minimal infinity look. This glass balustrade was templated and surveyed on the first visit and installed in only one day consisting of 20 linear meters of curved and straight glass. Using just 2 spigots per glass panel this gives a secure frameless look allowing the beautiful landscape to be appreciated from all angles.</p>
              </div>
            </div>

            <div className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                <img src="/images/project-placeholder.svg" alt="Soho" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">Soho</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">This full height glazed screen allows light to flood the entire office while creating a smart meeting room. The client was advised by many glazing companies to build a bulk head for an easier glass installation but was reluctant as this would have had a dramatic effect on the natural lighting. We were happy to oblige with the 3 meter full height glass partition following the curved in the ceiling.</p>
              </div>
            </div>

            <div className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                <img src="/images/project-placeholder.svg" alt="Nutfield" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">Nutfield</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">We worked along side the carpenter installing this beautiful decking to ensure we had plenty of secure fixings to allow for the load barring of this Poziglaze glass balustrade with handrail. They opted not to have glass down the stair so we supplied a sleek handrail and posts which coincide with the slot handrail on the glass.</p>
              </div>
            </div>

            <div className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                <img src="/images/project-placeholder.svg" alt="Guildford" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">Guildford</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">UV bonding was used on top of this glass shower enclosure for extra support. We glazed the shaped glass into the shower channel and UV bonded a small glass lid allowing us to glaze the door on the same visit as apposed to having to return once the silicone had cured.</p>
              </div>
            </div>

            <div className="group rounded-xl border border-border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                <img src="/images/project-placeholder.svg" alt="Contact Us" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">Contact Us</h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">By ticking, I agree to share my form responses with Omnis Glazing Ltd</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
