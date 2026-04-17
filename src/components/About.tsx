import { Box, Flex, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FiAward, FiTrendingUp, FiShield } from "react-icons/fi"

// Modern Check Icon Component
const ModernCheckIcon = ({ color, size = 16 }: { color: string, size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      stroke: color,
      strokeWidth: 2.2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      filter: `drop-shadow(0 0.5px 0.8px ${color}20)`,
    }}
  >
    <path
      d="M16 6L8 14L4 10"
      stroke={color}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MotionBox = motion.create(Box)
const MotionFlex = motion.create(Flex)

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 2000 }: { value: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endValue = parseInt(value.toString().replace(/[^\d]/g, ''))

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const currentValue = Math.floor(endValue * easeOutCubic(progress))

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration, isVisible])

  return (
    <motion.span
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  )
}

export default function About() {
  return (
    <Box
      id="about"
      py={{ base: 20, md: 32 }}
      bg="navy.900"
      position="relative"
      overflow="hidden"
    >
      {/* Modern Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-br, navy.900, navy.950, navy.900)"
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(circle at 70% 30%, rgba(249, 115, 22, 0.03) 0%, transparent 50%),
                    radial(circle at 30% 70%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)"
      />

      <Box maxW="1400px" mx="auto" px={{ base: 4, sm: 6, md: 8 }} position="relative">
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          gap={{ base: 10, md: 12 }}
          align="center"
        >
          {/* Left Column - Image */}
          <MotionBox
            flex={1}
            w={{ base: "full", md: "45%" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box
              overflow="hidden"
              borderRadius="2xl"
              boxShadow="0 20px 40px rgba(0,0,0,0.4)"
            >
              <Image
                src="/images/services.jpg"
                alt="Reigns Hydraulics workshop"
                w="full"
                h={{ base: "auto", sm: "280px", md: "350px" }}
                objectFit="cover"
                minH={{ base: "220px", sm: "280px" }}
              />
            </Box>
          </MotionBox>

          {/* Right Column - Content */}
          <MotionBox
            flex={1}
            w={{ base: "full", md: "55%" }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            >
              <VStack gap={4} align="start">
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="white"
                  fontWeight="900"
                  lineHeight="0.9"
                  letterSpacing="1px"
                >
                  ABOUT{" "}
                  <Text
                    as="span"
                    color="accent.500"
                    borderBottom="3px solid"
                    borderColor="accent.500"
                  >
                    REIGNS
                  </Text>
                </Text>
              </VStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.300"
                mt={12}
                fontWeight="500"
                lineHeight="1.6"
              >
                Your trusted partner for heavy equipment solutions since 2019
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.300"
                lineHeight="1.7"
                mb={10}
                fontWeight="400"
              >
                Reigns Hydraulics delivers cutting-edge hydraulic solutions and comprehensive
                heavy equipment maintenance. Our modern approach combines advanced technology
                with proven expertise, ensuring maximum uptime and operational efficiency for
                your fleet.
              </Text>
            </MotionBox>

            {/* Modern Stats Cards */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mb={12}>
                {[
                  {
                    icon: FiAward,
                    value: 7,
                    suffix: "+",
                    label: "Years",
                    sublabel: "Experience",
                    color: "accent.500",
                    iconColor: "#f97316",
                    bgColor: "rgba(249, 115, 22, 0.08)",
                    borderColor: "rgba(249, 115, 22, 0.3)"
                  },
                  {
                    icon: FiTrendingUp,
                    value: 500,
                    suffix: "+",
                    label: "Projects",
                    sublabel: "Completed",
                    color: "brand.500",
                    iconColor: "#3b82f6",
                    bgColor: "rgba(59, 130, 246, 0.08)",
                    borderColor: "rgba(59, 130, 246, 0.3)"
                  },
                  {
                    icon: FiShield,
                    value: 200,
                    suffix: "+",
                    label: "Happy",
                    sublabel: "Clients",
                    color: "warning.500",
                    iconColor: "#fbbf24",
                    bgColor: "rgba(245, 158, 11, 0.08)",
                    borderColor: "rgba(245, 158, 11, 0.3)"
                  },
                ].map((stat, index) => (
                  <MotionBox
                    key={stat.label}
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 1 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <Box
                      bg={`linear-gradient(135deg, ${stat.bgColor}, rgba(15, 23, 42, 0.9))`}
                      backdropFilter="blur(25px)"
                      borderRadius="xl"
                      p={6}
                      border="1px solid"
                      borderColor={stat.borderColor}
                      position="relative"
                      overflow="hidden"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: `linear-gradient(135deg, ${stat.bgColor}, rgba(15, 23, 42, 0.95))`,
                        borderColor: stat.color,
                        boxShadow: `0 16px 48px ${stat.color}30, inset 0 1px 0 rgba(255,255,255,0.2)`,
                        transform: "translateY(-3px)"
                      }}
                      _before={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        bg: `linear-gradient(90deg, ${stat.color}90, ${stat.color}50, transparent)`,
                        opacity: 0.9
                      }}
                    >
                      <VStack gap={3} align="center">
                        <Box
                          p={3}
                          borderRadius="lg"
                          bg={`${stat.color}20`}
                          border={`1px solid ${stat.color}30`}
                          position="relative"
                          _before={{
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "lg",
                            bg: stat.iconColor,
                            opacity: 0.1
                          }}
                        >
                          <stat.icon
                            size={24}
                            style={{
                              color: stat.iconColor,
                              strokeWidth: 2,
                              filter: `drop-shadow(0 1px 2px ${stat.iconColor}40)`
                            }}
                          />
                        </Box>
                        <VStack gap={1} align="center">
                          <Text
                            fontFamily="heading"
                            fontSize="2xl"
                            color="white"
                            fontWeight="800"
                            lineHeight="1"
                          >
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </Text>
                          <VStack gap={0} align="center">
                            <Text
                              fontSize="sm"
                              color="gray.200"
                              fontWeight="700"
                              textTransform="uppercase"
                              letterSpacing="0.5px"
                            >
                              {stat.label}
                            </Text>
                            <Text
                              fontSize="xs"
                              color="gray.400"
                              fontWeight="500"
                              textTransform="uppercase"
                              letterSpacing="0.5px"
                            >
                              {stat.sublabel}
                            </Text>
                          </VStack>
                        </VStack>
                      </VStack>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </MotionBox>

            {/* Modern Feature List */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <VStack align="start" gap={4}>
                {[
                  "Expert certified technicians with industry certifications",
                  "Rapid turnaround times with scheduled maintenance programs",
                  "Quality OEM parts guaranteed with extended warranties",
                  "Competitive pricing with transparent cost structures",
                  "24/7 emergency support with dedicated response teams"
                ].map((point, index) => (
                  <MotionFlex
                    key={point}
                    gap={4}
                    align="center"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.2 + index * 0.08,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <Box
                      w="6"
                      h="6"
                      borderRadius="md"
                      bg="linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.1))"
                      border={`1px solid rgba(249, 115, 22, 0.3)`}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      position="relative"
                    >
                      <ModernCheckIcon color="#f97316" size={12} />
                    </Box>
                    <Text
                      color="gray.300"
                      fontSize="md"
                      fontWeight="500"
                      lineHeight="1.5"
                      transition="color 0.2s ease"
                      _hover={{ color: "white" }}
                    >
                      {point}
                    </Text>
                  </MotionFlex>
                ))}
              </VStack>
            </MotionBox>
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  )
}
