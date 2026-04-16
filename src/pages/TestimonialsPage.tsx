import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

export default function TestimonialsPage() {
  return (
    <Box bg="navy.950" minH="100vh">
      <Navbar />
      <main id="main-content">
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </Box>
  )
}
