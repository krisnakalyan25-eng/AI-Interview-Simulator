import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import Benefits from "../components/Benefits"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="bg-slate-50">

      <Navbar />

      <HeroSection />

      <HowItWorks />

      <Benefits />

      <Footer />

    </div>
  )
}

export default Home