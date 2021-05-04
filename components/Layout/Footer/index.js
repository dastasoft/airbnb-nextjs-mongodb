import { Box, Flex, Stack } from "@chakra-ui/react"

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
    >
      <Stack alignItems="flex-start">
        <Logo />
        <Copyright />
      </Stack>

      <SocialMediaLinks />
    </Flex>
  )
}
