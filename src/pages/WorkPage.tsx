import { Box } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"

export default function WorkPage() {
  return (
    <Layout>
      <Box bg="navy.950" minH="100vh">
        <Portfolio />
      </Box>
    </Layout>
  )
}