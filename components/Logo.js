import { Flex, Heading, useColorModeValue, useToken } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"

export default function Logo(props) {
  const [white, black] = useToken("colors", ["white", "gray.800"])
  return (
    <Flex align="center">
      <FaHome fontSize="32px" fill="teal" />
      <Heading
        as="h1"
        ml="2"
        fontSize="25px"
        color={useColorModeValue(black, white)}
      >
        Apartmentfy
      </Heading>
    </Flex>
  )
}
