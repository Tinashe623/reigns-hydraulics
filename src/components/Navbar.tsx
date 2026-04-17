import { Box, Flex, Text, Button, IconButton, HStack, Link, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FiMenu, FiX, FiPhone } from "react-icons/fi"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setVh()
    window.addEventListener('resize', setVh)
    window.addEventListener('orientationchange', setVh)

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (href: string) => {
    navigate(href)
    onClose()
  }

  return (
    <Box
      as="nav"
      className="navbar-fixed"
      position="fixed"
      top={0}
      left={0}
      right={0}
      w="full"
      h="60px"
      zIndex={1000}
      bg="rgba(10, 15, 26, 0.95)"
      backdropFilter="blur(12px)"
      borderBottom={scrolled ? "1px solid" : "none"}
      borderColor="whiteAlpha.100"
    >
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
        onFocus={(e: React.FocusEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.left = '6px'
          e.currentTarget.style.top = '6px'
        }}
        onBlur={(e: React.FocusEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.left = '-9999px'
        }}
      >
        Skip to main content
      </a>
      <Flex
        maxW="1400px"
        mx="auto"
        px={{ base: 3, sm: 4, md: 6 }}
        h="full"
        align="center"
        justify="space-between"
      >
        <Box onClick={() => navigate("/")} cursor="pointer">
          <Text
            fontFamily="heading"
            color="white"
            fontWeight="800"
            fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
            letterSpacing="0.5px"
            lineHeight="1.2"
          >
            REIGNS{" "}
            <Text as="span" color="accent.400" borderBottom="2px solid" borderColor="accent.400">
              HYDRAULICS
            </Text>
          </Text>
        </Box>

        <HStack display={{ base: "none", lg: "flex" }} spacing={6}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              color="gray.300"
              fontSize="xs"
              fontWeight="600"
              letterSpacing="0.5px"
              _hover={{ color: "white", textDecoration: "none" }}
              position="relative"
              sx={{
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
            </Link>
          ))}
        </HStack>

        <HStack spacing={4}>
          <Button
            onClick={() => navigate("/contact")}
            bg="accent.500"
            color="white"
            size="sm"
            fontWeight="bold"
            fontSize="xs"
            px={4}
            _hover={{ bg: "accent.600", transform: "scale(1.02)" }}
            transition="all 0.2s"
            display={{ base: "none", lg: "flex" }}
          >
            Get Quote
          </Button>

          <IconButton
            aria-label="Menu"
            display={{ base: "flex", lg: "none" }}
            onClick={onOpen}
            color="white"
            variant="ghost"
            size="md"
          >
            <FiMenu size={24} />
          </IconButton>
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg="blackAlpha.800" />
        <DrawerContent bg="navy.950" maxW="300px" w="full">
          <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.100">
            <Flex justify="space-between" align="center">
              <Text fontFamily="heading" fontSize="2xl" color="white">MENU</Text>
              <IconButton
                aria-label="Close"
                onClick={onClose}
                color="white"
                variant="ghost"
              >
                <FiX size={24} />
              </IconButton>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap={4} mt={4}>
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  color="gray.300"
                  fontSize="lg"
                  py={3}
                  textAlign="left"
                  _hover={{ color: "accent.500", textDecoration: "none" }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => navigate("/contact")}
                bg="accent.500"
                color="white"
                size="lg"
                fontWeight="bold"
                mt={4}
                _hover={{ bg: "accent.600" }}
              >
                <Box as={FiPhone} mr={2} />
                Get Quote
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}