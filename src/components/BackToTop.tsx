import { Box, IconButton } from "@chakra-ui/react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { FiChevronUp } from "react-icons/fi"

const MotionBox = motion.create(Box)

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400)
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          position="fixed"
          bottom={6}
          left={6}
          zIndex={1000}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Back to top"
            onClick={scrollToTop}
            w="50px"
            h="50px"
            bg="accent.500"
            color="white"
            borderRadius="full"
            boxShadow="0 4px 20px rgba(249,115,22,0.4)"
            _hover={{ bg: "accent.600", transform: "translateY(-2px)" }}
            transition="all 0.2s"
            display={{ base: "none", md: "flex" }}
          >
            <FiChevronUp size={24} />
          </IconButton>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}
