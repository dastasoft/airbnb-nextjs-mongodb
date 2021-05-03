import { ButtonGroup, IconButton } from "@chakra-ui/react"

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function SocialMediaLinks(props) {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href="#"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="GitHub"
        icon={<FaGithub fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="Twitter"
        icon={<FaTwitter fontSize="20px" />}
      />
    </ButtonGroup>
  )
}
