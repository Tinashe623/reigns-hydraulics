import { Box, Text, Button, HStack, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FiPhone, FiMessageCircle, FiArrowRight } from "react-icons/fi"

const MotionBox = motion.create(Box)

export default function CTA() {
  return (
    <Box
      py={{ base: 20, md: 32 }}
      position="relative"
      overflow="hidden"
      bg="navy.950"
    >
      {/* Enhanced Gradient Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-br, navy.950, navy.900, brand.900)"
      />

      {/* Animated Mesh Overlay */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.05}
        backgroundImage="radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                        radial-gradient(circle at 75% 75%, white 2px, transparent 2px)"
        backgroundSize="100px 100px"
        style={{
          animation: "meshMove 20s infinite linear"
        }}
      />

      {/* Floating Geometric Shapes */}
      <MotionBox
        position="absolute"
        top="15%"
        left="10%"
        w="60px"
        h="60px"
        border="2px solid"
        borderColor="accent.500"
        borderRadius="xl"
        opacity={0.1}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        right="15%"
        w="40px"
        h="40px"
        bg="brand.500"
        borderRadius="full"
        opacity={0.15}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        <VStack gap={8} align="center">
          <MotionBox
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            textAlign="center"
          >
            <Text
              fontFamily="heading"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color="white"
              fontWeight="800"
              lineHeight="1.2"
            >
              NEED{" "}
              <Text
                as="span"
                color="accent.500"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  right: 0,
                  height: "3px",
                  bg: "accent.500",
                  borderRadius: "2px",
                  opacity: 0.8
                }}
              >
                EMERGENCY
              </Text>{" "}
              REPAIR?
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.400"
              mt={6}
              mb={8}
              maxW="600px"
              mx="auto"
              lineHeight="1.6"
            >
              We're available 24/7 for urgent repairs. Don't let equipment downtime slow down your operations.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <HStack gap={6} flexWrap="wrap" justify="center">
              <MotionBox
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  bg="accent.500"
                  color="white"
                  size="lg"
                  fontWeight="bold"
                  px={10}
                  py={6}
                  fontSize="lg"
                  borderRadius="2xl"
                  boxShadow="0 20px 40px -10px rgba(249, 115, 22, 0.5)"
                   _hover={{
                     bg: "accent.600",
                     boxShadow: "0 25px 50px -10px rgba(249, 115, 22, 0.7)",
                     _before: {
                       transform: "translateX(100%)"
                     }
                   }}
                   transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                   onClick={() => window.open("tel:+27604283606")}
                   display="flex"
                   alignItems="center"
                   gap={3}
                   position="relative"
                   overflow="hidden"
                   _before={{
                     content: '""',
                     position: "absolute",
                     inset: 0,
                     bgGradient: "linear(to-r, transparent, rgba(255,255,255,0.2), transparent)",
                     transform: "translateX(-100%)",
                     transition: "transform 0.6s"
                   }}
                >
                  <MotionBox
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiPhone size={20} />
                  </MotionBox>
                  <Text>Call Now</Text>
                  <FiArrowRight size={16} />
                </Button>
              </MotionBox>

              <MotionBox
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  bg="green.500"
                  color="white"
                  size="lg"
                  fontWeight="bold"
                  px={10}
                  py={6}
                  fontSize="lg"
                  borderRadius="2xl"
                  boxShadow="0 20px 40px -10px rgba(37, 211, 102, 0.5)"
                   _hover={{
                     bg: "green.600",
                     boxShadow: "0 25px 50px -10px rgba(37, 211, 102, 0.7)",
                     _before: {
                       transform: "translateX(100%)"
                     }
                   }}
                   transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                   onClick={() => window.open("https://wa.me/27604283606", "_blank")}
                   display="flex"
                   alignItems="center"
                   gap={3}
                   position="relative"
                   overflow="hidden"
                   _before={{
                     content: '""',
                     position: "absolute",
                     inset: 0,
                     bgGradient: "linear(to-r, transparent, rgba(255,255,255,0.2), transparent)",
                     transform: "translateX(-100%)",
                     transition: "transform 0.6s"
                   }}
                >
                  <MotionBox
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiMessageCircle size={20} />
                  </MotionBox>
                  <Text>WhatsApp Us</Text>
                  <FiArrowRight size={16} />
                </Button>
              </MotionBox>
            </HStack>
          </MotionBox>
        </VStack>
      </Box>

      <style>{`
        @keyframes meshMove {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50px, 50px) rotate(180deg); }
        }
      `}</style>
    </Box>
  )
}
