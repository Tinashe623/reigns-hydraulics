import { Box, Flex, Text, VStack, HStack, Input, Textarea, Button, SimpleGrid } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { FiPhone, FiMail, FiMapPin, FiSend, FiMessageCircle } from "react-icons/fi"

const MotionBox = motion.create(Box)

const serviceTypes = [
  { value: "truck-repairs", label: "Truck Repairs" },
  { value: "yellow-machine", label: "Yellow Machine Maintenance" },
  { value: "hydraulic-parts", label: "Hydraulic Parts Delivery" },
  { value: "emergency", label: "Emergency Field Service" },
  { value: "other", label: "Other" }
]



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      // Reset form on success
      setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box
      id="contact"
      py={{ base: 16, md: 24 }}
      bg="navy.950"
      position="relative"
    >
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          mb={12}
          textAlign="center"
        >
          <Text
            fontFamily="heading"
            fontSize={{ base: "3xl", md: "4xl" }}
            color="white"
            letterSpacing="2px"
            mb={4}
          >
            GET IN <Text as="span" color="accent.500">TOUCH</Text>
          </Text>
          <Box w="80px" h="3px" bg="accent.500" mx="auto" />
        </MotionBox>

        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 12, lg: 16 }}>
          {/* Contact Form */}
          <MotionBox
            flex={1.2}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              bg="rgba(26, 35, 50, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              p={{ base: 6, md: 10 }}
              border="1px solid"
              borderColor="whiteAlpha.100"
              overflow="visible"
            >
              <Text fontFamily="heading" fontSize="2xl" color="white" mb={6}>
                REQUEST SERVICE
              </Text>
              
              <form onSubmit={handleSubmit}>
                <VStack gap={5}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} w="full">
                    <Box>
                      <Text fontSize="sm" color="gray.400" mb={2}>Name *</Text>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        bg="navy.800"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        color="white"
                        _placeholder={{ color: "gray.500" }}
                        _focus={{ borderColor: "accent.500", boxShadow: "none" }}
                        _hover={{ borderColor: "accent.500" }}
                        py={6}
                      />
                    </Box>
                    <Box>
                      <Text fontSize="sm" color="gray.400" mb={2}>Email *</Text>
                      <Input
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        type="email"
                        placeholder="your@email.com"
                        bg="navy.800"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        color="white"
                        _placeholder={{ color: "gray.500" }}
                        _focus={{ borderColor: "accent.500", boxShadow: "none" }}
                        _hover={{ borderColor: "accent.500" }}
                        py={6}
                      />
                    </Box>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} w="full">
                    <Box>
                      <Text fontSize="sm" color="gray.400" mb={2}>Phone *</Text>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        bg="navy.800"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        color="white"
                        _placeholder={{ color: "gray.500" }}
                        _focus={{ borderColor: "accent.500", boxShadow: "none" }}
                        _hover={{ borderColor: "accent.500" }}
                        py={6}
                      />
                    </Box>
                    <Box>
                      <Text fontSize="sm" color="gray.400" mb={2}>Service Type *</Text>
                      <Box
                        position="relative"
                        border="1px solid"
                        borderRadius="lg"
                        borderColor={formData.serviceType ? "accent.500" : "whiteAlpha.200"}
                        bg="navy.800"
                        transition="border-color 0.2s"
                        _hover={{ borderColor: "accent.500" }}
                        overflow="hidden"
                      >
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          style={{
                            width: "100%",
                            padding: "16px",
                            background: "transparent",
                            border: "none",
                            color: formData.serviceType ? "#f97316" : "#94a3b8",
                            fontSize: "16px",
                            outline: "none",
                            cursor: "pointer",
                          }}
                        >
                          <option value="" style={{ background: "#0f172a", color: "#94a3b8" }}>Select service</option>
                          {serviceTypes.map(type => (
                            <option key={type.value} value={type.value} style={{ background: "#0f172a", color: "#f97316" }}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </Box>
                    </Box>
                  </SimpleGrid>

                  <Box w="full">
                    <Text fontSize="sm" color="gray.400" mb={2}>Message</Text>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your issue or requirements..."
                      rows={5}
                      bg="navy.800"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      color="white"
                      _placeholder={{ color: "gray.500" }}
                      _focus={{ borderColor: "accent.500", boxShadow: "none" }}
                      _hover={{ borderColor: "accent.500" }}
                      resize="vertical"
                    />
                  </Box>

                  <MotionBox
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      type="submit"
                      bg="brand.500"
                      color="white"
                      size="lg"
                      fontWeight="bold"
                      w="full"
                      loading={isSubmitting}
                      loadingText="SENDING REQUEST..."

                       _hover={{
                         bg: "brand.600",
                         transform: "translateY(-1px)",
                         _before: {
                           transform: "translateX(100%)"
                         }
                       }}
                       _disabled={{
                         bg: "gray.600",
                         cursor: "not-allowed",
                         transform: "none"
                       }}
                       transition="all 0.3s ease"
                       borderRadius="xl"
                       py={6}
                       fontSize="md"
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
                      <HStack gap={3}>
                        <MotionBox
                          animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0, ease: "linear" }}
                        >
                          <FiSend size={18} />
                        </MotionBox>
                        <Text>
                          Send Request
                        </Text>
                      </HStack>
                    </Button>
                  </MotionBox>
                </VStack>
              </form>
            </Box>
          </MotionBox>

          {/* Contact Info */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <VStack align="stretch" gap={6}>
              <Box
                bg="rgba(26, 35, 50, 0.8)"
                backdropFilter="blur(10px)"
                borderRadius="xl"
                p={8}
                border="1px solid"
                borderColor="whiteAlpha.100"
              >
                <Text fontFamily="heading" fontSize="2xl" color="white" mb={6}>
                  CONTACT INFO
                </Text>
                
                <VStack align="start" gap={6}>
                  <HStack gap={4}>
                    <Flex
                      w="50px"
                      h="50px"
                      bg="accent.500"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                    >
                      <FiPhone size={24} color="white" />
                    </Flex>
                    <VStack align="start" gap={0}>
                      <Text fontSize="sm" color="gray.400">Phone</Text>
                      <Text color="white" fontWeight="bold" cursor="pointer">
                        +27 60 428 3606
                      </Text>
                    </VStack>
                  </HStack>

                  <HStack gap={4}>
                    <Flex
                      w="50px"
                      h="50px"
                      bg="brand.500"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                    >
                      <FiMail size={24} color="white" />
                    </Flex>
                    <VStack align="start" gap={0}>
                      <Text fontSize="sm" color="gray.400">Email</Text>
                      <Text color="white" fontWeight="bold">
                        info@reignshydraulics.com
                      </Text>
                    </VStack>
                  </HStack>

                  <HStack gap={4}>
                    <Flex
                      w="50px"
                      h="50px"
                      bg="warning.500"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                    >
                      <FiMapPin size={24} color="white" />
                    </Flex>
                    <VStack align="start" gap={0}>
                      <Text fontSize="sm" color="gray.400">Location</Text>
                      <Text color="white" fontWeight="bold">
                        Mall of Africa, Midrand
                      </Text>
                      <Text fontSize="sm" color="gray.400">Johannesburg, South Africa</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>

              {/* Map Placeholder */}
              <Box
                bg="navy.800"
                borderRadius="xl"
                h="200px"
                border="1px solid"
                borderColor="whiteAlpha.100"
                position="relative"
                overflow="hidden"
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(50%) contrast(1.1)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mall of Africa Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.5422333744843!2d28.10945668487041!3d-26.01177548293808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9573c87366093d%3A0x4a6bbc6c2c8f8e8c!2sMall%20of%20Africa!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                />
                <Flex
                  position="absolute"
                  inset={0}
                  bg="blackAlpha.400"
                  align="center"
                  justify="center"
                  cursor="pointer"
                  _hover={{ bg: "blackAlpha.300" }}
                  transition="all 0.2s"
                  onClick={() => window.open("https://maps.google.com/?q=Mall+of+Africa+Midrand")}
                >
                  <HStack>
                    <FiMapPin size={24} color="white" />
                    <Text color="white" fontWeight="bold">View on Map</Text>
                  </HStack>
                </Flex>
              </Box>
            </VStack>
          </MotionBox>
        </Flex>
      </Box>

      {/* Floating WhatsApp Button */}
      <MotionBox
        position="fixed"
        bottom={{ base: 4, md: 6 }}
        right={{ base: 4, md: 6 }}
        zIndex={1000}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <a
          href="https://wa.me/27604283606"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Flex
            w={{ base: "50px", md: "60px" }}
            h={{ base: "50px", md: "60px" }}
            bg="green.500"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 4px 20px rgba(37, 211, 102, 0.4)"
            _hover={{ bg: "green.600", transform: "scale(1.05)" }}
            transition="all 0.2s"
            css={{
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <FiMessageCircle size={24} color="white" />
          </Flex>
        </a>
      </MotionBox>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  )
}
