import { Box, Flex, Text } from "@chakra-ui/layout"

import { connectToDatabase } from "@/util/mongodb"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"

export default function Apartment({ property }) {
  return (
    <Flex flexDirection="column">
      <Image
        src={property?.images?.picture_url}
        h={[40, 60, 80, 450, 500]}
        w="full"
        objectFit="cover"
      />
      <Flex align="center" justify="space-between" py="3">
        <Text fontSize="lg">${property?.price?.$numberDecimal}</Text>
        <Text fontSize="lg">{property?.address?.country}</Text>
      </Flex>
      <Text flex="1" my="2">
        {property.summary}
      </Text>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        my="2"
      >
        {property.amenities.map(
          (amenitie, index) =>
            `${amenitie} ${index === property.amenities.length - 1 ? "" : "·"} `
        )}
      </Box>
      <Button
        bg="teal.600"
        cursor="not-allowed"
        color="white"
        mx="auto"
        maxW="200px"
        p="3"
        my="2"
      >
        Order a reservation
      </Button>
    </Flex>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase()

  const apartment = await db.collection("listingsAndReviews").findOne(
    { _id: params.id },
    {
      projection: {
        names: 1,
        images: 1,
        address: 1,
        summary: 1,
        price: 1,
        cleaning_fee: 1,
        amenities: 1,
      },
    }
  )

  return {
    props: {
      property: JSON.parse(JSON.stringify(apartment)),
    },
    revalidate: 1,
  }
}
