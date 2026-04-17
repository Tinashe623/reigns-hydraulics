import { Box, Flex, Text, Button, Badge, VStack, useBreakpointValue } from "@chakra-ui/react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FiPhone, FiZap, FiArrowRight } from "react-icons/fi"
import { useRef, useEffect, useState } from "react"

const MotionBox = motion.create(Box)
const MotionFlex = motion.create(Flex)

// Particle component for background animation
const Particle = ({ delay = 0 }: { delay?: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const isMobile = useBreakpointValue({ base: true, md: false })

  useEffect(() => {
    if (isMobile) return
    
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      })
    }, 3000 + delay * 100)

    return () => clearInterval(interval)
  }, [delay, isMobile])

  if (isMobile) return null

  return (
    <MotionBox
      position="absolute"
      w="2px"
      h="2px"
      bg="accent.400"
      borderRadius="full"
      opacity={0.3}
      initial={{ scale: 0, x: position.x, y: position.y }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 0.6, 0]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ left: position.x, top: position.y }}
    />
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useBreakpointValue({ base: true, md: false })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "30%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Box
      id="home"
      ref={containerRef}
      position="relative"
      h={{ base: "calc(100vh - 60px)", md: "calc(100vh - 70px)" }}
      minH={{ base: "calc(100vh - 60px)", md: "calc(100vh - 70px)" }}
      display="flex"
      alignItems="center"
      overflow="hidden"
      bg="navy.950"
    >
      {/* Dynamic Background */}
      <MotionBox
        position="absolute"
        inset={0}
        style={{ y: yBg }}
      >
        <Box
          position="absolute"
          inset={0}
          bgImage="url('/images/hero-bg.png')"
          bgSize="cover"
          backgroundPosition="center"
          opacity={0.4}
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-br, rgba(10, 15, 26, 0.8), rgba(59, 130, 246, 0.1), navy.950)"
        />
        {/* Animated gradient mesh */}
        <Box
          position="absolute"
          inset={0}
          bgGradient="radial(circle at 20% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                      radial(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          style={{
            animation: "meshRotate 20s infinite linear"
          }}
        />
      </MotionBox>

      {/* Particle System */}
      <Box position="absolute" inset={0} overflow="hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </Box>

      {/* Enhanced Decorative Elements - Desktop only */}
      <MotionBox
        position="absolute"
        top="15%"
        right="-15%"
        w="800px"
        h="800px"
        bg="brand.500"
        borderRadius="full"
        filter="blur(200px)"
        opacity={0.15}
        display={{ base: "none", md: "block" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <MotionBox
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="600px"
        h="600px"
        bg="accent.500"
        borderRadius="full"
        filter="blur(180px)"
        opacity={0.12}
        display={{ base: "none", md: "block" }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Geometric Shapes - Desktop only */}
      <MotionBox
        position="absolute"
        top="30%"
        left="10%"
        w="4px"
        h="4px"
        bg="accent.300"
        borderRadius="full"
        display={{ base: "none", lg: "block" }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <MotionBox
        position="absolute"
        top="60%"
        right="15%"
        w="6px"
        h="6px"
        bg="brand.300"
        borderRadius="sm"
        display={{ base: "none", lg: "block" }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Enhanced Grid Pattern - Desktop only */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.02}
        display={{ base: "none", md: "block" }}
        backgroundImage="linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)"
        backgroundSize="60px 60px"
        style={{
          animation: "gridMove 30s infinite linear"
        }}
      />

      {/* Main Content */}
      <Flex
        position="relative"
        zIndex={10}
        maxW="1000px"
        mx="auto"
        px={{ base: 4, sm: 6, md: 8 }}
        py={{ base: 8, md: 12 }}
        pb={{ base: 8, md: 12 }}
        direction="column"
        align="center"
        justify="center"
        w="full"
        h="full"
      >
        {/* Main Text Content */}
        <MotionFlex
          style={{ opacity: opacityText }}
          direction="column"
          align="center"
          textAlign="center"
          w="full"
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1
            }}
          >
            <Badge
              bg="accent.500"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight="600"
              letterSpacing="0.5px"
              display="inline-flex"
              alignItems="center"
              gap={2}
              mb={{ base: 4, md: 6 }}
              boxShadow="0 4px 12px rgba(249,115,22,0.3)"
            >
              <FiZap size={12} />
              24/7 EMERGENCY SERVICE
            </Badge>
          </MotionBox>

            <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 80
            }}
            mb={{ base: 3, md: 4 }}
          >
            <VStack spacing={1} align="center">
              <Text
                fontFamily="heading"
                fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                lineHeight="1.2"
                color="white"
                textAlign="center"
                fontWeight="700"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Heavy Duty
              </Text>
              <Text
                fontFamily="heading"
                fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
                lineHeight="1.2"
                color="white"
                textAlign="center"
                fontWeight="700"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Hydraulic
              </Text>
              <Flex align="center" gap={2} w="full" justify="center" my={1}>
                <Box flex={1} h="1px" maxW="30px" bgGradient="linear(to-r, transparent, accent.500)" />
                <Box w="4px" h="4px" bg="accent.500" borderRadius="full" />
                <Box flex={1} h="1px" maxW="30px" bgGradient="linear(to-l, transparent, accent.500)" />
              </Flex>
              <Text
                fontFamily="heading"
                fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
                lineHeight="1.2"
                color="accent.400"
                textAlign="center"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                Solutions
              </Text>
            </VStack>
          </MotionBox>

          <MotionBox
            maxW="600px"
            mb={{ base: 4, md: 6 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }}
          >
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              color="gray.300"
              lineHeight="1.6"
              fontWeight="400"
              textAlign="center"
            >
              Professional hydraulic solutions for heavy equipment.
              <br />
              Reliable service that keeps your operations running.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
              type: "spring",
              stiffness: 60
            }}
            w={{ base: "full", sm: "auto" }}
          >
            <Flex gap={{ base: 3, sm: 4 }} direction={{ base: "column", sm: "row" }} justify="center" align="center" w="full" maxW="450px" mx="auto">
              <MotionBox
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  bg="brand.500"
                  color="white"
                  size="md"
                  h="48px"
                  px={6}
                  fontSize="sm"
                  fontWeight="600"
                  borderRadius="lg"
                  w={{ base: "full", sm: "160px" }}
                  boxShadow="0 4px 20px rgba(59, 130, 246, 0.3)"
                  _hover={{
                    bg: "brand.600",
                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.3s ease"
                  onClick={() => scrollTo("#contact")}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <Text fontSize="sm">Request Service</Text>
                  <MotionBox
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight />
                  </MotionBox>
                </Button>
              </MotionBox>
              <MotionBox
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  color="white"
                  size="md"
                  h="48px"
                  px={6}
                  fontSize="sm"
                  fontWeight="600"
                  borderRadius="lg"
                  w={{ base: "full", sm: "160px" }}
                  borderColor="whiteAlpha.600"
                  bg="transparent"
                  _hover={{
                    bg: "whiteAlpha.100",
                    borderColor: "white",
                    color: "white"
                  }}
                  transition="all 0.3s ease"
                  onClick={() => window.open("tel:+27604283606")}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                >
                  <MotionBox
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiPhone size={16} />
                  </MotionBox>
                  <Text>Call Now</Text>
                </Button>
              </MotionBox>
            </Flex>
          </MotionBox>
        </MotionFlex>
      </Flex>
    </Box>
  )
}

<style>{`
  @keyframes meshRotate {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(180deg); }
  }

  @keyframes gridMove {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
  }

  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes borderGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }

  @keyframes scrollLine {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
`}</style>
