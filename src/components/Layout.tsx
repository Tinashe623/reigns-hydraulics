import { Box } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box as="main" flex="1" pt="80px">
        {children}
      </Box>
      <Footer />
      <BackToTop />
    </Box>
  )
}