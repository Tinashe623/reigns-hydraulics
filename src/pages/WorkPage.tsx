import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

export default function WorkPage() {
  return (
    <Box bg="navy.950" minH="100vh">
      <Navbar />
      <main id="main-content">
        <Portfolio />
      </main>
      <Footer />
      <BackToTop />
    </Box>
  )
}
