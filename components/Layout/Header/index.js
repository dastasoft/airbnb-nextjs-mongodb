import {
  chakra,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"

import Logo from "@/components/Logo"
import SocialMediaLinks from "@/components/SocialMediaLinks"
import MobileNavContent from "./MobileNav"
import ToggleTheme from "@/components/ToggleTheme"

export default function ChakraUIHeader() {
  const mobileNav = useDisclosure()
  const bg = useColorModeValue("white", "gray.800")

  return (
    <Box pos="relative">
      <chakra.header
        bg={bg}
        w="full"
        overflowY="hidden"
        p="1em"
        mx="auto"
      >
        <chakra.div>
          <Flex w="full" h="full" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <SocialMediaLinks />
              <ToggleTheme />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          <MobileNavContent bg={bg} mobileNav={mobileNav} />
        </chakra.div>
      </chakra.header>
    </Box>
  )
}
