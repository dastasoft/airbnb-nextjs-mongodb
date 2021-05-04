import { Text } from "@chakra-ui/layout"

export default function Copyright(props) {
  return (
    <Text fontSize="sm" {...props}>
      Apartmentfy is a fictional product &copy; {new Date().getFullYear()}{" "}
      Powered by dastasoft
    </Text>
  )
}
