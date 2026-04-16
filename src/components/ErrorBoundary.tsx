import React from 'react'
import { Box, Text, Button, VStack } from '@chakra-ui/react'

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="navy.950"
          p={4}
        >
          <VStack gap={4} textAlign="center">
            <Text fontSize="2xl" color="white">
              Something went wrong
            </Text>
            <Text color="gray.400">
              We're sorry for the inconvenience. Please try refreshing the page.
            </Text>
            <Button
              onClick={() => window.location.reload()}
              bg="accent.500"
              color="white"
              _hover={{ bg: "accent.600" }}
            >
              Refresh Page
            </Button>
          </VStack>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary