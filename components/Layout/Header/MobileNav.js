import { CloseButton, VStack } from "@chakra-ui/react"

import SocialMediaLinks from "@/components/SocialMediaLinks"

export default function MobileNavContent({ mobileNav, bg }) {
  return (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <SocialMediaLinks />
    </VStack>
  )
}
