import { IconButton } from "@chakra-ui/button"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function ToggleTheme() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      ml={{ base: "0", md: "3" }}
      onClick={toggleMode}
      icon={<SwitchIcon />}
    />
  )
}
