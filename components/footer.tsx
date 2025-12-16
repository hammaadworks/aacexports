"use client"

import { useModal } from "@/lib/modal-context"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function Footer() {
  const { openModal } = useModal()
  
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary">
                AL AHMED
              </span>
              <span className="text-xs tracking-widest text-muted-foreground uppercase">
                Continental
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Global merchandise exports since 1996. Delivering trust, quality, and consistency across borders.
            </p>
            <div className="text-sm font-medium">
              Bangalore, India
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Verticals</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#stones" className="hover:text-primary">Natural Stones</a></li>
              <li><a href="#produce" className="hover:text-primary">Fresh Produce</a></li>
              <li><a href="#powders" className="hover:text-primary">Food Ingredients</a></li>
              <li><a href="#steel" className="hover:text-primary">Iron & Steel</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#quality" className="hover:text-primary">Quality Assurance</a></li>
              <li><a href="#markets" className="hover:text-primary">Global Markets</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Partner With Us</h3>
            <p className="text-sm text-muted-foreground">
              Ready to source premium Indian merchandise?
            </p>
            <ShimmerButton onClick={openModal} className="w-full text-xs h-10">
              Send Requirement
            </ShimmerButton>
          </div>

        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Al Ahmed Continental. All rights reserved.</p>
          <p>Designed for Global Trade.</p>
        </div>
      </div>
    </footer>
  )
}
