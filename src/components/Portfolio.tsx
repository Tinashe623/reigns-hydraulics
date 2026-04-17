import { Box, Flex, Text, SimpleGrid, Image, Button, VStack, HStack, Badge, useBreakpointValue } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { FiEye, FiX, FiFilter, FiMousePointer } from "react-icons/fi"

const MotionBox = motion.create(Box)

const PortfolioItem = ({ item, index, onClick }: { item: typeof portfolioItems[0], index: number, onClick: () => void }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = useBreakpointValue({ base: true, lg: false })
  
  // Use simpler animation on mobile
  const animationProps = isMobile 
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
    : { initial: { opacity: 0, y: 30, scale: 0.95 }, whileInView: { opacity: 1, y: 0, scale: 1 } }

  return (
    <MotionBox
      ref={ref}
      {...animationProps}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: isMobile ? 0.3 : 0.6,
        delay: isMobile ? 0 : index * 0.08,
        ease: "easeOut",
        ...(isMobile ? {} : { type: "spring", stiffness: 100 })
      }}
      whileHover={isMobile ? undefined : {
        y: -8,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      <Box
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        onClick={onClick}
        bg="rgba(15, 23, 42, 0.6)"
        border="1px solid"
        borderColor="whiteAlpha.100"
        transition="all 0.4s ease"
        _hover={{
          borderColor: "accent.400",
          "& .overlay": {
            opacity: 1
          },
          "& .image": {
            transform: "scale(1.05)"
          }
        }}
        style={{
          aspectRatio: "4/3"
        }}
      >
        <Image
          className="image"
          src={inView ? item.image : undefined}
          alt={item.title}
          w="full"
          h="full"
          objectFit="cover"
          loading="lazy"
          transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
        />

        {/* Category Badge */}
        <Badge
          position="absolute"
          top={4}
          left={4}
          bg="rgba(15, 23, 42, 0.9)"
          color="white"
          fontSize="xs"
          fontWeight="600"
          px={3}
          py={1}
          borderRadius="lg"
          border="1px solid"
          borderColor="whiteAlpha.200"
          backdropFilter="blur(10px)"
          zIndex={2}
        >
          {item.category}
        </Badge>

        {/* Interactive Hint Badge */}
        <MotionBox
          position="absolute"
          bottom={4}
          right={4}
          zIndex={2}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: !isHovered ? 1 : 0,
            y: !isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3 }}
        >
          <Badge
            bg="rgba(10, 15, 26, 0.85)"
            color="gray.200"
            fontSize="xs"
            px={3}
            py={1}
            borderRadius="lg"
            border="1px solid"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(8px)"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Box display={{ base: "none", md: "block" }}><FiMousePointer size={12} /></Box>
            <Box display={{ base: "block", md: "none" }}><FiEye size={12} /></Box>
            <Text as="span" fontSize="xs" display={{ base: "none", md: "block" }}>Hover to read</Text>
            <Text as="span" fontSize="xs" display={{ base: "block", md: "none" }}>Tap to read</Text>
          </Badge>
        </MotionBox>

        {/* Hover Overlay */}
        <Box
          className="overlay"
          position="absolute"
          inset={0}
          bg="rgba(10, 15, 26, 0.95)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          opacity={0}
          transition="all 0.4s ease"
          p={6}
        >
          <Flex
            w="16"
            h="16"
            bg="accent.500"
            borderRadius="xl"
            align="center"
            justify="center"
            mb={4}
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "xl",
              bg: "accent.500",
              opacity: 0.3,
              transform: "scale(1.2)"
            }}
          >
            <FiEye size={24} color="white" />
          </Flex>

          <VStack gap={2} align="center" textAlign="center">
            <Text
              fontFamily="heading"
              fontSize="lg"
              color="white"
              fontWeight="700"
              lineHeight="1.2"
            >
              {item.title}
            </Text>
            <Text
              fontSize="sm"
              color="gray.300"
              lineHeight="1.4"
              maxW="250px"
            >
              {item.description}
            </Text>
          </VStack>

          {/* Tags */}
          <HStack gap={2} mt={4} flexWrap="wrap" justify="center">
            {item.tags?.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                bg="whiteAlpha.200"
                color="white"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="md"
              >
                {tag}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Box>
    </MotionBox>
  )
}

const portfolioItems = [
  {
    id: 1,
    title: "Mercedes-Benz Actros Engine Overhaul",
    category: "Truck Repair",
    description: "Complete engine rebuild for heavy-duty Mercedes-Benz Actros fleet vehicle",
    image: "/images/truck1.jpg",
    tags: ["Mercedes-Benz", "Engine", "Heavy Duty"]
  },
  {
    id: 2,
    title: "Hydraulic Cylinder Assembly",
    category: "Hydraulics",
    description: "Precision hydraulic cylinder replacement and pressure testing",
    image: "/images/hydraulic-repair.jpg",
    tags: ["Hydraulics", "Cylinders", "Pressure Testing"]
  },
  {
    id: 3,
    title: "Caterpillar Excavator Maintenance",
    category: "Yellow Machine",
    description: "Comprehensive maintenance and hydraulic system service for Caterpillar excavator",
    image: "/images/escavator.jpg",
    tags: ["Caterpillar", "Excavator", "Hydraulics"]
  },
  {
    id: 4,
    title: "MAN Truck Brake System",
    category: "Truck Repair",
    description: "Complete brake system overhaul and safety inspection for MAN TGS series",
    image: "/images/truck-repair3.webp",
    tags: ["MAN", "Brakes", "Safety"]
  },
  {
    id: 5,
    title: "Bobcat Loader Service",
    category: "Yellow Machine",
    description: "Full service maintenance including hydraulic repairs and component replacement",
    image: "/images/bobcat-repair2.jpg",
    tags: ["Bobcat", "Loader", "Maintenance"]
  },
  {
    id: 6,
    title: "Volvo FH Transmission Rebuild",
    category: "Truck Repair",
    description: "Complete transmission rebuild and performance optimization for Volvo FH16",
    image: "/images/tlb.jpg",
    tags: ["Volvo", "Transmission", "Performance"]
  },
]

// Category filter options
const categories = ["All", "Truck Repair", "Yellow Machine", "Hydraulics"]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter portfolio items based on selected category
  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <Box
      id="work"
      py={{ base: 16, md: 24 }}
      bg="navy.950"
      position="relative"
    >
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }}>
        {/* Modern Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          mb={16}
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
              OUR{" "}
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
                WORK
              </Text>
            </Text>

            <Box
              w="100px"
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
              Explore our portfolio of successful repairs and maintenance projects
              across trucks, heavy machinery, and hydraulic systems.
            </Text>
          </VStack>
        </MotionBox>

        {/* Category Filter */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          mb={12}
        >
          <Flex
            justify="center"
            gap={3}
            flexWrap="wrap"
            align="center"
          >
            <FiFilter size={16} color="#f97316" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "solid" : "outline"}
                bg={activeCategory === category ? "accent.500" : "transparent"}
                borderColor={activeCategory === category ? "accent.500" : "whiteAlpha.400"}
                color={activeCategory === category ? "white" : "gray.300"}
                size="sm"
                px={6}
                py={2}
                borderRadius="lg"
                fontWeight="600"
                fontSize="sm"
                transition="all 0.3s ease"
                _hover={{
                  bg: activeCategory === category ? "accent.600" : "whiteAlpha.100",
                  borderColor: "accent.400",
                  color: "white",
                  transform: "translateY(-1px)"
                }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Flex>
        </MotionBox>

        {/* Portfolio Grid */}
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            gap={{ base: 6, md: 8 }}
            autoRows="1fr"
          >
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedImage(item.id)}
              />
            ))}
          </SimpleGrid>
        </MotionBox>
      </Box>

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <MotionBox
            position="fixed"
            inset={0}
            bg="rgba(0, 0, 0, 0.95)"
            backdropFilter="blur(10px)"
            zIndex={2000}
            display="flex"
            alignItems="center"
            justifyContent="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <MotionBox
              position="relative"
              maxW="95vw"
              maxH="95vh"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button */}
              <MotionBox
                position="absolute"
                top="-16px"
                right="-16px"
                zIndex={10}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <Button
                  w="12"
                  h="12"
                  bg="white"
                  borderRadius="full"
                  color="gray.800"
                  _hover={{ bg: "gray.100", transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.95)" }}
                  onClick={() => setSelectedImage(null)}
                  boxShadow="0 8px 32px rgba(0,0,0,0.3)"
                  transition="all 0.2s ease"
                >
                  <FiX size={20} />
                </Button>
              </MotionBox>

              {/* Image Container */}
              <Box
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 25px 50px rgba(0,0,0,0.5)"
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
                <Image
                  src={portfolioItems.find(i => i.id === selectedImage)?.image}
                  alt={portfolioItems.find(i => i.id === selectedImage)?.title}
                  w="full"
                  maxH="80vh"
                  objectFit="contain"
                />

                {/* Image Info Overlay */}
                <MotionBox
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                  p={6}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <VStack align="start" gap={2}>
                    <Text
                      fontFamily="heading"
                      fontSize="xl"
                      color="white"
                      fontWeight="700"
                    >
                      {portfolioItems.find(i => i.id === selectedImage)?.title}
                    </Text>
                    <Text
                      fontSize="md"
                      color="gray.300"
                      lineHeight="1.5"
                    >
                      {portfolioItems.find(i => i.id === selectedImage)?.description}
                    </Text>
                    <HStack gap={2} flexWrap="wrap">
                      {portfolioItems.find(i => i.id === selectedImage)?.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          bg="accent.500"
                          color="white"
                          fontSize="xs"
                          px={3}
                          py={1}
                          borderRadius="lg"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                  </VStack>
                </MotionBox>
              </Box>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  )
}
