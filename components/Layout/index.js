import { Box, Flex, Heading } from "@chakra-ui/layout"

import Header from "./Header"
import Hero from "./Hero"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <Flex flexDirection="column" minH="full">
      <Header />
      <Hero />
      <Box as="main" flex="1" p={4}>
        <Heading as="h2" mb={2}>
          Apartments
        </Heading>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
