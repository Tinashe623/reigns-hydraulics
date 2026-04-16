import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

export default function ServicesPage() {
  return (
    <Box bg="navy.950" minH="100vh">
      <Navbar />
      <main id="main-content">
        <Services />
      </main>
      <Footer />
      <BackToTop />
    </Box>
  )
}
