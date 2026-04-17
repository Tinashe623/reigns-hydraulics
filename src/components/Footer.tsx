import { Box, Flex, Text, VStack, HStack, SimpleGrid, Image } from "@chakra-ui/react"
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"

const services = [
  "Truck Repairs",
  "Yellow Machine Maintenance",
  "Hydraulic Parts Delivery",
  "Emergency Field Service",
  "Preventive Maintenance",
  "Engine Diagnostics"
]

export default function Footer() {
  return (
    <Box bg="navy.900" borderTop="1px solid" borderColor="whiteAlpha.100">
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }} py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={{ base: 8, md: 12 }}>
          {/* Logo & Description */}
          <VStack align="start" gap={3}>
            <Text
              fontFamily="heading"
              fontSize="2xl"
              color="white"
              fontWeight="800"
              letterSpacing="1px"
            >
              <Image
                src="/images/reigns-logo.png"
                alt="Reigns Hydraulics"
                h="44px"
                w="auto"
                objectFit="contain"
              />
            </Text>
            <Box
              bg="accent.500"
              color="white"
              fontSize="xs"
              fontWeight="600"
              px={3}
              py={1}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="0.5px"
            >
              Mall of Africa, Midrand
            </Box>
            <Box
              bg="green.500"
              color="white"
              fontSize="xs"
              fontWeight="600"
              px={3}
              py={1}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="0.5px"
            >
              Coming to Zimbabwe Soon
            </Box>
            <Text fontSize="sm" color="gray.400" lineHeight="1.8">
              Your trusted partner for heavy duty hydraulic solutions, truck repairs, and yellow machine maintenance. Available 24/7 for emergency service.
            </Text>
            <HStack gap={4} mt={2}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Flex
                  w="40px"
                  h="40px"
                  bg="whiteAlpha.100"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  _hover={{ bg: "accent.500", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FiFacebook size={18} color="white" />
                </Flex>
              </a>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Flex
                  w="40px"
                  h="40px"
                  bg="whiteAlpha.100"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  _hover={{ bg: "accent.500", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FiInstagram size={18} color="white" />
                </Flex>
              </a>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Flex
                  w="40px"
                  h="40px"
                  bg="whiteAlpha.100"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  _hover={{ bg: "accent.500", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FiLinkedin size={18} color="white" />
                </Flex>
              </a>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Flex
                  w="40px"
                  h="40px"
                  bg="whiteAlpha.100"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  _hover={{ bg: "accent.500", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  <FiTwitter size={18} color="white" />
                </Flex>
              </a>
            </HStack>
          </VStack>

          {/* Services */}
          <VStack align="start" gap={4}>
            <Text
              fontFamily="heading"
              fontSize="xl"
              color="white"
              letterSpacing="1px"
            >
              SERVICES
            </Text>
            <VStack align="start" gap={2}>
              {services.map((service) => (
                <a
                  href="#services"
                  key={service}
                  style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  {service}
                </a>
              ))}
            </VStack>
          </VStack>

          {/* Contact Info */}
          <VStack align="start" gap={4}>
            <Text
              fontFamily="heading"
              fontSize="xl"
              color="white"
              letterSpacing="1px"
            >
              CONTACT
            </Text>
            <VStack align="start" gap={4}>
              <HStack gap={3}>
                <Flex
                  w="36px"
                  h="36px"
                  bg="accent.500"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <FiPhone size={16} color="white" />
                </Flex>
                <Text fontSize="sm" color="gray.400">
                  +27 60 428 3606
                </Text>
              </HStack>
              <HStack gap={3}>
                <Flex
                  w="36px"
                  h="36px"
                  bg="brand.500"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <FiMail size={16} color="white" />
                </Flex>
                <Text fontSize="sm" color="gray.400">
                  info@reignshydraulics.com
                </Text>
              </HStack>
              <HStack gap={3}>
                <Flex
                  w="36px"
                  h="36px"
                  bg="warning.500"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <FiMapPin size={16} color="white" />
                </Flex>
                <Text fontSize="sm" color="gray.400">
                  Mall of Africa, Midrand<br />
                  Johannesburg, South Africa
                </Text>
              </HStack>
            </VStack>
          </VStack>

          {/* Hours */}
          <VStack align="start" gap={4}>
            <Text
              fontFamily="heading"
              fontSize="xl"
              color="white"
              letterSpacing="1px"
            >
              BUSINESS HOURS
            </Text>
            <VStack align="start" gap={2}>
              <Flex justify="space-between" w="full" gap={8}>
                <Text fontSize="sm" color="gray.400">Mon - Fri</Text>
                <Text fontSize="sm" color="white">7:00 AM - 6:00 PM</Text>
              </Flex>
              <Flex justify="space-between" w="full" gap={8}>
                <Text fontSize="sm" color="gray.400">Saturday</Text>
                <Text fontSize="sm" color="white">8:00 AM - 4:00 PM</Text>
              </Flex>
              <Flex justify="space-between" w="full" gap={8}>
                <Text fontSize="sm" color="gray.400">Sunday</Text>
                <Text fontSize="sm" color="accent.500">24/7 Emergency</Text>
              </Flex>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Bottom Bar */}
      <Box borderTop="1px solid" borderColor="whiteAlpha.100">
        <Flex
          maxW="1400px"
          mx="auto"
          px={{ base: 4, md: 8 }}
          py={4}
          justify="space-between"
          align="center"
          direction={{ base: "column", md: "row" }}
          gap={2}
        >
          <Text fontSize="sm" color="gray.500">
            © 2024 Reigns Hydraulics. All rights reserved.
          </Text>
          <HStack gap={4}>
            <a href="#" style={{ fontSize: '14px', color: '#64748b' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: '14px', color: '#64748b' }}>Terms of Service</a>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}
