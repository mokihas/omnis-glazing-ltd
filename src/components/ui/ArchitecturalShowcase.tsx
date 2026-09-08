"use client"

import * as React from "react"
import { CheckCircle2, TrendingUp, ShieldCheck, Ruler, ArrowRight, MousePointer2 } from "lucide-react"

export function ArchitecturalShowcase() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 lg:mt-0 z-20 perspective-[2000px]">
      
      {/* Interactive floating badges */}
      <div className="absolute -left-12 top-20 z-30 animate-float delay-100 hidden md:flex items-center gap-2 bg-yellow-100 border border-yellow-200 text-yellow-800 px-4 py-2 rounded-full shadow-lg transform -rotate-6">
        <span className="font-bold text-sm">Fast 48h Quote</span>
        <MousePointer2 className="w-4 h-4 fill-yellow-800 text-yellow-800" />
      </div>
      
      <div className="absolute -right-8 bottom-32 z-30 animate-float delay-300 hidden md:flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full shadow-lg transform rotate-3">
        <ShieldCheck className="w-4 h-4" />
        <span className="font-bold text-sm">10-Year Guarantee</span>
      </div>

      {/* Main Mockup Frame */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transform rotate-x-12 rotate-y-[-5deg] scale-100 hover:scale-[1.02] hover:rotate-x-6 hover:rotate-y-0 transition-all duration-700 ease-out">
        
        {/* Browser Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="ml-4 flex-1">
            <div className="w-full max-w-[240px] h-6 bg-white rounded-md border border-border/50 flex items-center px-2">
              <div className="text-[10px] text-muted-foreground font-medium">omnisglazing.uk/projects</div>
            </div>
          </div>
        </div>

        {/* Mockup Dashboard Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50/50">
          
          {/* Left Column: Project Stats */}
          <div className="col-span-1 space-y-4">
            <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
              <div className="text-sm font-semibold text-muted-foreground mb-1">Total Projects</div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="flex items-center gap-1 text-emerald-600 mt-2 text-xs font-medium">
                <TrendingUp className="w-3 h-3" />
                <span>24% increase YoY</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-border shadow-sm">
              <div className="text-sm font-semibold text-foreground mb-3">Compliance</div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> BS EN 12150
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> FENSA Certified
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-border flex justify-between items-center">
              <div className="font-semibold text-foreground flex items-center gap-2">
                <Ruler className="w-4 h-4 text-secondary" />
                Recent Installation
              </div>
              <div className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-md">
                Oxted, Surrey
              </div>
            </div>
            
            <div className="flex-1 p-4 relative bg-slate-50">
              {/* Fake image representation */}
              <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md shadow-sm text-xs font-bold text-foreground">
                  Structural Glass Facade
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                  <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
                </div>
                <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 cursor-pointer hover:bg-secondary transition-colors">
                  View Case Study <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
