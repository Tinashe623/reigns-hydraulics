import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

export default function ContactPage() {
  return (
    <Box bg="navy.950" minH="100vh">
      <Navbar />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </Box>
  )
}
