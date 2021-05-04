import { Box, Flex } from "@chakra-ui/layout"

import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <Flex flexDirection="column" minH="full">
      <Header />
      <Box as="main" flex="1" p={4}>
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
