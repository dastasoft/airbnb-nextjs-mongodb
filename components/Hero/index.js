import {
  chakra,
  Box,
  useColorModeValue,
  Icon,
  Image,
  Heading,
} from "@chakra-ui/react"

export default function Hero() {
  const bg = useColorModeValue("white", "gray.800")
  return (
    <Box pos="relative" overflow="hidden" bg={bg} my={4}>
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0}
            top={-1}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <Box display="block">Apartmentfy </Box>
                <Box
                  display={{ base: "block", xl: "inline" }}
                  color={useColorModeValue("brand.600", "brand.400")}
                >
                  Proof of Concept
                </Box>
              </Heading>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                This proof of concept is made with Next.js, MongoDB Atlas and
                Chakra UI. Enjoy the power of Static Site CDN and Serverless BD.
              </chakra.p>
              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
                fontFamily="fantasy"
              >
                <Box rounded="full" shadow="md">
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="white"
                    bg="teal.600"
                    cursor="pointer"
                    _hover={{ bg: "teal.700" }}
                    px={{ base: 4, md: 5 }}
                    py="2"
                  >
                    Contact
                  </chakra.a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src="/hero.jpg"
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  )
}
