import { ButtonGroup, IconButton } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa"

const links = [
  {
    icon: <FaGithub fontSize="20px" />,
    label: "GitHub",
    href: "https://github.com/dastasoft",
  },
  {
    icon: <FaLinkedin fontSize="20px" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dastasoft/",
  },
  {
    icon: <MdEmail fontSize="20px" />,
    label: "Email",
    href: "mailto:dastasoft@protonmail.com",
  },
  {
    icon: <FaDev fontSize="20px" />,
    label: "dev.to",
    href: "https://dev.to/dastasoft",
  },
]

export default function SocialMediaLinks(props) {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      {links.map((link) => (
        <IconButton
          key={link.label}
          as="a"
          href={link.href}
          aria-label={link.label}
          icon={link.icon}
        />
      ))}
    </ButtonGroup>
  )
}
