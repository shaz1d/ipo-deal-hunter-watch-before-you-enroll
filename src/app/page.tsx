import Header from "@/components/Header"
import HeroTitle from "@/components/HeroTitle"
import ExitsStrip from "@/components/ExitsStrip"
import VideoGrid from "@/components/VideoGrid"
import ChrisBioSection from "@/components/ChrisBioSection"
import FinalCTA from "@/components/FinalCTA"
import TestimonialsSection from "@/components/TestimonialsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative bg-navy-900 text-white font-kanit overflow-hidden selection:bg-accent selection:text-navy-900 min-h-screen">
      
      {/* Deep Atmospheric Ambient Glows */}
      <div className="absolute top-0 right-0 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[25%] left-0 w-[80vw] h-[100vh] bg-[radial-gradient(ellipse_at_center-left,_var(--tw-gradient-stops))] from-[#0b3366]/30 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <Header />
        <HeroTitle />
        
        <VideoGrid part={1} />
        <ChrisBioSection />
        <VideoGrid part={2} />
        
        <FinalCTA />
        <TestimonialsSection />
        <ExitsStrip />
        
        <Footer />
      </div>
      
    </main>
  )
}
