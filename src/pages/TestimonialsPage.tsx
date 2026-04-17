import { Box } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Testimonials from "../components/Testimonials"

export default function TestimonialsPage() {
  return (
    <Layout>
      <Box bg="navy.950" minH="100vh">
        <Testimonials />
      </Box>
    </Layout>
  )
}