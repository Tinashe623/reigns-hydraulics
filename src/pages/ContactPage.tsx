import { Box } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"

export default function ContactPage() {
  return (
    <Layout>
      <Box bg="navy.950" minH="100vh">
        <Contact />
      </Box>
    </Layout>
  )
}