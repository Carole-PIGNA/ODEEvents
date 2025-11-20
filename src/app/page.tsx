import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Inspirations from "@/components/Inspirations"
import Testimonials from "@/components/Testimonials"
import About from "@/components/About"
import Values from "@/components/Values"
import Blog from "@/components/Blog"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Inspirations />
      <Testimonials /> 
      <About/> 
      <Values />
      <Blog />
      <CTA />

       {/* autres sections */}
    </>
  )
}
