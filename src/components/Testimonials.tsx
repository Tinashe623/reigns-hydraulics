import { Box, Flex, Text, VStack, HStack, IconButton } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi"

const MotionBox = motion.create(Box)

// Modern Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <MotionBox
      flexShrink={0}
      w={{ base: "85vw", sm: "320px", md: "350px" }}
      maxW="350px"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        bg="linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.95))"
        backdropFilter="blur(20px)"
        borderRadius="2xl"
        p={6}
        pb={5}
        border="1px solid"
        borderColor="whiteAlpha.200"
        position="relative"
        overflow="hidden"
        transition="all 0.3s ease"
        _hover={{
          borderColor: "accent.400",
        }}
        minH="260px"
        display="flex"
        flexDirection="column"
      >
        {/* Rating Stars */}
        <HStack gap={1} mb={3}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <MotionBox
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
            >
              <FiStar size={16} fill="#fbbf24" color="#fbbf24" />
            </MotionBox>
          ))}
        </HStack>

        {/* Quote */}
        <Text
          fontSize="sm"
          color="gray.200"
          lineHeight="1.6"
          mb={4}
          fontStyle="normal"
          lineClamp={4}
          flex={1}
        >
          {testimonial.quote}
        </Text>

        {/* Author Info */}
        <Flex align="center" gap={3}>
          <Box
            w="42px"
            h="42px"
            borderRadius="full"
            bg="accent.500"
            overflow="hidden"
            flexShrink={0}
          >
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                style={{
                  width: '42px',
                  height: '42px',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            ) : (
              <Flex w="full" h="full" align="center" justify="center" bg="accent.500">
                <Text color="white" fontWeight="bold" fontSize="md">
                  {testimonial.name.charAt(0)}
                </Text>
              </Flex>
            )}
          </Box>
          <VStack align="start" gap={0} flex={1}>
            <Text fontSize="sm" fontWeight="700" color="white">
              {testimonial.name}
            </Text>
            <Text fontSize="xs" color="accent.400" fontWeight="600">
              {testimonial.role}
            </Text>
          </VStack>
        </Flex>
      </Box>
    </MotionBox>
  )
}

const testimonials = [
  {
    quote: "Reigns Hydraulics transformed our fleet maintenance approach. Their expertise in Mercedes-Benz trucks and hydraulic systems has reduced our downtime by 70%. Professional service that delivers results.",
    name: "Michael Thompson",
    company: "Thompson Construction Ltd.",
    role: "Fleet Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Outstanding emergency response! They repaired our hydraulic cylinder failure on-site within 2 hours. Their 24/7 service and technical expertise saved us thousands in lost productivity.",
    name: "Sarah Williams",
    company: "Williams Fleet Services",
    role: "Operations Director",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Exceptional yellow machine maintenance. Their team maintains our Caterpillar excavators and Bobcat loaders with precision. We've seen a 40% reduction in breakdown incidents.",
    name: "David Chen",
    company: "Chen Mining Operations",
    role: "Equipment Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Reigns delivers reliability we can count on. Their work on our MAN and Volvo trucks is impeccable. Professional, punctual, and competitively priced. Our go-to hydraulic specialists.",
    name: "James Rodriguez",
    company: "Rodriguez Transport",
    role: "CEO",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Their emergency field service is remarkable. They arrived at 2 AM with full mobile capabilities and had our truck operational within hours. True dedication to customer service.",
    name: "Robert Kim",
    company: "Kim Industrial Solutions",
    role: "Operations Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Outstanding transmission rebuild on our Volvo FH16. Their technical knowledge and attention to detail is unmatched. We recommend Reigns to all our industry partners.",
    name: "Maria Gonzalez",
    company: "Gonzalez Logistics",
    role: "Maintenance Supervisor",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Professional hydraulic cylinder replacement service. Their OEM parts and expert installation gave us confidence in the repair. Excellent communication throughout the process.",
    name: "Ahmed Hassan",
    company: "Hassan Construction",
    role: "Project Manager",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalSlides = Math.ceil(testimonials.length - itemsPerPage + 1)

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, totalSlides - 1))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)
  const isFirst = currentIndex === 0
  const isLast = currentIndex === totalSlides - 1

  return (
    <Box
      id="testimonials"
      py={{ base: 16, md: 24 }}
      bg="navy.900"
      position="relative"
      overflow="hidden"
    >
      {/* Modern Background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="radial(circle at 30% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
                    radial(circle at 70% 80%, rgba(249, 115, 22, 0.03) 0%, transparent 50%)"
      />

      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }} position="relative">
        {/* Modern Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          mb={12}
          textAlign="center"
        >
          <VStack gap={6} align="center">
            <Text
              fontFamily="heading"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color="white"
              fontWeight="900"
              letterSpacing="1px"
            >
              WHAT{" "}
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
                CLIENTS
              </Text>{" "}
              SAY
            </Text>

            <Box
              w="120px"
              h="1px"
              bgGradient="linear(to-r, transparent, accent.500, transparent)"
              opacity={0.6}
            />

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="700px"
              fontWeight="500"
              lineHeight="1.6"
            >
              Discover what industry leaders say about our hydraulic solutions
              and heavy equipment maintenance services.
            </Text>
          </VStack>
        </MotionBox>

        {/* Testimonials Carousel with Arrow Navigation */}
        <Box position="relative">
          {/* Navigation Arrows */}
          <Flex justify="center" align="center" mb={6} gap={4}>
            <IconButton
              aria-label="Previous testimonials"
              onClick={handlePrev}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="white"
              borderRadius="full"
              size="lg"
              disabled={isFirst}
              _hover={!isFirst ? { bg: "whiteAlpha.100", borderColor: "accent.500", color: "accent.500" } : {}}
              _disabled={{ opacity: 0.3, cursor: "not-allowed", borderColor: "whiteAlpha.200" }}
            >
              <FiChevronLeft size={20} />
            </IconButton>
            
            {/* Dots Indicator */}
            <HStack gap={2}>
              {Array.from({ length: totalSlides }).map((_, i) => (
                <Box
                  key={i}
                  w={currentIndex === i ? "24px" : "8px"}
                  h="8px"
                  borderRadius="full"
                  bg={currentIndex === i ? "accent.500" : "whiteAlpha.300"}
                  cursor="pointer"
                  transition="all 0.3s ease"
                  onClick={() => setCurrentIndex(i)}
                  _hover={{ bg: "accent.400" }}
                />
              ))}
            </HStack>

            <IconButton
              aria-label="Next testimonials"
              onClick={handleNext}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="white"
              borderRadius="full"
              size="lg"
              disabled={isLast}
              _hover={!isLast ? { bg: "whiteAlpha.100", borderColor: "accent.500", color: "accent.500" } : {}}
              _disabled={{ opacity: 0.3, cursor: "not-allowed", borderColor: "whiteAlpha.200" }}
            >
              <FiChevronRight size={20} />
            </IconButton>
          </Flex>

          {/* Testimonials Cards */}
          <Flex
            gap={4}
            justify="center"
            overflow="hidden"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${currentIndex}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
