import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

export default function HomePage() {
  return (
    <Box bg="navy.950" minH="100vh">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </Box>
  )
}
