import { Box } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import Contact from "../components/Contact"

export default function HomePage() {
  return (
    <Layout>
      <Box bg="navy.950" minH="100vh" position="relative" id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </Box>
    </Layout>
  )
}