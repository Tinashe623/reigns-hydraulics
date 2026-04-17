import { Box, Flex, Text, VStack, Icon, Grid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FiTruck, FiTool, FiPackage, FiAlertCircle, FiArrowRight } from "react-icons/fi"

const MotionBox = motion.create(Box)

const services = [
  {
    icon: FiTruck,
    title: "Truck Repairs",
    description: "Expert repair services for all major truck brands including Mercedes-Benz, Howo, MAN, Hino, and Volvo.",
    color: "brand.500",
    checkColor: "#3b82f6",
  },
  {
    icon: FiTool,
    title: "Yellow Machine Maintenance",
    description: "Comprehensive maintenance for construction equipment including TLBs, Bobcat loaders, excavators, and more.",
    color: "accent.500",
    checkColor: "#f97316",
  },
  {
    icon: FiPackage,
    title: "Hydraulic Parts Delivery",
    description: "Fast delivery of OEM and aftermarket hydraulic components. Extensive inventory for immediate dispatch.",
    color: "warning.500",
    checkColor: "#fbbf24",
  },
  {
    icon: FiAlertCircle,
    title: "Emergency Field Service",
    description: "24/7 emergency response team with fully equipped mobile service units.",
    color: "red.500",
    checkColor: "#ef4444",
  },
]

// Enhanced Service Card Component
const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 }
      }}
      role="article"
      aria-labelledby={`service-title-${index}`}
    >
      <Box
        bg="rgba(26, 35, 50, 0.95)"
        backdropFilter="blur(20px)"
        borderRadius="2xl"
        p={{ base: 6, md: 8 }}
        border="1px solid"
        borderColor="whiteAlpha.200"
        h="full"
        minH="320px"
        position="relative"
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          borderColor: `${service.color.split('.')[0]}.400`,
        }}
        _focusWithin={{
          borderColor: `${service.color.split('.')[0]}.400`,
          boxShadow: `0 0 0 3px ${service.color}30`
        }}
      >
        <VStack align="start" gap={5} h="full">
          <Flex
            w="20"
            h="20"
            bg={`linear-gradient(135deg, ${service.color}15, ${service.color}25)`}
            borderRadius="2xl"
            align="center"
            justify="center"
            border={`1px solid ${service.color}30`}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "2xl",
              bg: `${service.color}10`,
              opacity: 0.5
            }}
          >
            <Icon
              as={service.icon}
              boxSize={10}
              color={service.color}
              position="relative"
              zIndex={1}
            />
          </Flex>

          <VStack align="start" gap={3} flex={1}>
            <Text
              id={`service-title-${index}`}
              fontFamily="heading"
              fontSize="xl"
              color="white"
              fontWeight="800"
              lineHeight="1.2"
            >
              {service.title}
            </Text>

            <Text
              fontSize="md"
              color="gray.300"
              lineHeight="1.6"
              fontWeight="500"
            >
              {service.description}
            </Text>
          </VStack>

          <Flex
            as="button"
            color="white"
            bg={`${service.checkColor}15`}
            border={`1px solid ${service.checkColor}30`}
            fontSize="sm"
            fontWeight="600"
            px={6}
            py={3}
            borderRadius="lg"
            gap={2}
            align="center"
            cursor="pointer"
            transition="all 0.3s ease"
            mt="auto"
            w="full"
            justify="center"
            _hover={{
              bg: service.checkColor,
              borderColor: service.checkColor,
              transform: "translateY(-2px)",
              boxShadow: `0 8px 25px ${service.checkColor}40`
            }}
            _focus={{
              outline: "none",
              boxShadow: `0 0 0 3px ${service.checkColor}40`
            }}
            onClick={() => scrollTo("#contact")}
            aria-label={`Contact us for ${service.title}`}
          >
            <Text>CONTACT US</Text>
            <FiArrowRight size={16} />
          </Flex>
        </VStack>
      </Box>
    </MotionBox>
  )
}

export default function Services() {
  return (
    <Box
      id="services"
      py={{ base: 20, md: 32 }}
      bg="navy.950"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle Background Gradient */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
                    radial(circle at 75% 75%, rgba(249, 115, 22, 0.05) 0%, transparent 40%)"
      />

      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          mb={16}
          textAlign="center"
        >
          <VStack gap={6} align="center">
            <Text
              fontFamily="heading"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              color="white"
              fontWeight="900"
              letterSpacing="tight"
            >
              OUR{" "}
              <Text
                as="span"
                color="accent.500"
                borderBottom="3px solid"
                borderColor="accent.500"
              >
                SERVICES
              </Text>
            </Text>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="700px"
              mx="auto"
              fontWeight="500"
              lineHeight="1.6"
            >
              Professional hydraulic solutions and heavy equipment maintenance services.
              <br />
              Keeping your fleet running with expert care and reliable support.
            </Text>
          </VStack>
        </MotionBox>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)"
          }}
          gap={{ base: 6, md: 8 }}
          autoRows="1fr"
          alignItems="start"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
