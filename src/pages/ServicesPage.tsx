import { Box } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Services from "../components/Services"

export default function ServicesPage() {
  return (
    <Layout>
      <Box bg="navy.950" minH="100vh">
        <Services />
      </Box>
    </Layout>
  )
}