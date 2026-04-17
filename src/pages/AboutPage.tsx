import { Box } from "@chakra-ui/react"
import Layout from "../components/Layout"
import About from "../components/About"

export default function AboutPage() {
  return (
    <Layout>
      <Box bg="navy.950" minH="100vh">
        <About />
      </Box>
    </Layout>
  )
}