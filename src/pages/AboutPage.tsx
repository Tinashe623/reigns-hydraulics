import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

export default function AboutPage() {
  return (
    <Box bg="navy.950" minH="100vh">
      <Navbar />
      <main id="main-content">
        <About />
      </main>
      <Footer />
      <BackToTop />
    </Box>
  )
}
