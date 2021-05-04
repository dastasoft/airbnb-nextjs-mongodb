import { Flex, Stack } from "@chakra-ui/react"

import Copyright from "./Copyright"
import Logo from "@/components/Logo"
import SocialMediaLinks from "@/components/SocialMediaLinks"

export default function Footer() {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      w="full"
      p="1em"
      align="center"
      justify="space-between"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Stack alignItems={{ base: "center", md: "flex-start" }}>
        <Logo />
        <Copyright />
      </Stack>

      <SocialMediaLinks />
    </Flex>
  )
}
