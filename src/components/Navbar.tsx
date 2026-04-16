import { Box, Flex, Text, Button, IconButton, HStack, Drawer, Portal } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FiMenu, FiX, FiPhone } from "react-icons/fi"

const MotionBox = motion.create(Box)

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMobileOpen(false)
    }
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={scrolled ? "rgba(10, 15, 26, 0.95)" : "transparent"}
      backdropFilter={scrolled ? "blur(12px)" : "none"}
      borderBottom={scrolled ? "1px solid" : "none"}
      borderColor="whiteAlpha.100"
      transition="all 0.3s ease"
    >
      {/* Skip to main content */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 9999,
          padding: '8px',
          background: '#f97316',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '6px'
          e.currentTarget.style.top = '6px'
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-9999px'
        }}
      >
        Skip to main content
      </a>
      <Flex
        maxW="1400px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollTo("/")}
          cursor="pointer"
        >
          <Text
            fontFamily="heading"
            fontSize={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="800"
            letterSpacing="1px"
          >
            REIGNS{" "}
            <Text
              as="span"
              color="accent.500"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                bottom: "0px",
                left: 0,
                right: 0,
                height: "2px",
                bg: "accent.500",
                borderRadius: "full",
                opacity: 0.8
              }}
            >
              HYDRAULICS
            </Text>
            <Text as="span" color="accent.500" fontSize={{ base: "xl", md: "2xl" }}>.</Text>
          </Text>
        </MotionBox>

        <HStack display={{ base: "none", md: "flex" }} gap={8}>
          {navLinks.map((link, i) => (
            <MotionBox
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <Text
                as="button"
                color="gray.300"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.5px"
                _hover={{ color: "white" }}
                onClick={() => scrollTo(link.href)}
                position="relative"
                css={{
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "0%",
                    height: "2px",
                    background: "#f97316",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {link.label}
              </Text>
            </MotionBox>
          ))}
        </HStack>

        <HStack gap={4}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            display={{ base: "none", md: "flex" }}
          >
            <Button
              bg="accent.500"
              color="white"
              size="sm"
              fontWeight="bold"
              _hover={{ bg: "accent.600", transform: "scale(1.02)" }}
              transition="all 0.2s"
              onClick={() => scrollTo("#contact")}
            >
              Get Quote
            </Button>
          </MotionBox>

          <IconButton
            aria-label="Menu"
            display={{ base: "flex", md: "none" }}
            onClick={() => setMobileOpen(true)}
            color="white"
            variant="ghost"
          >
            <FiMenu size={24} />
          </IconButton>
        </HStack>
      </Flex>

      <Drawer.Root
        open={mobileOpen}
        onOpenChange={(e) => setMobileOpen(e.open)}
        placement="end"
      >
        <Portal>
          <Drawer.Backdrop bg="blackAlpha.800" />
          <Drawer.Positioner>
            <Drawer.Content bg="navy.950" maxW="300px" w="full">
              <Drawer.Header borderBottomWidth="1px" borderColor="whiteAlpha.100">
                <Flex justify="space-between" align="center">
                  <Text fontFamily="heading" fontSize="2xl" color="white">MENU</Text>
                  <IconButton
                    aria-label="Close"
                    onClick={() => setMobileOpen(false)}
                    color="white"
                    variant="ghost"
                  >
                    <FiX size={24} />
                  </IconButton>
                </Flex>
              </Drawer.Header>
              <Drawer.Body>
                <Flex direction="column" gap={4} mt={4}>
                  {navLinks.map((link) => (
                    <Text
                      key={link.label}
                      as="button"
                      color="gray.300"
                      fontSize="lg"
                      py={3}
                      textAlign="left"
                      _hover={{ color: "accent.500" }}
                onClick={() => scrollTo(link.href)}
                    >
                      {link.label}
                    </Text>
                  ))}
                  <Button
                    bg="accent.500"
                    color="white"
                    size="lg"
                    fontWeight="bold"
                    mt={4}
                    _hover={{ bg: "accent.600" }}
onClick={() => scrollTo("#contact")}
                  >
                    <FiPhone style={{ marginRight: "8px" }} />
                    Get Quote
                  </Button>
                </Flex>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  )
}
