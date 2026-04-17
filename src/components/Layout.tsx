import { Box } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navHeight = scrolled ? "60px" : "70px"

  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column"
      overflow="hidden"
    >
      <Navbar />
      <Box 
        as="main" 
        flex="1" 
        pt={navHeight}
        overflowY="auto"
        overflowX="hidden"
      >
        {children}
      </Box>
      <Footer />
      <BackToTop />
    </Box>
  )
}