import { Heading, SimpleGrid } from "@chakra-ui/react"

import Hero from "@/components/Hero"
import ApartmentCard from "@/components/ApartmentCard"
import { connectToDatabase } from "@/util/mongodb"

export default function Home({ properties }) {
  return (
    <>
      <Hero />
      <Heading as="h2" mb={2}>
        Apartments
      </Heading>
      <SimpleGrid minChildWidth="250px" spacing="2em" minH="full">
        {properties.map((apartment) => (
          <ApartmentCard key={apartment.id} {...apartment} />
        ))}
      </SimpleGrid>
    </>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  const apartments = await db
    .collection("listingsAndReviews")
    .find()
    .sort({ _id: 1 })
    .limit(40)
    .toArray()

  const properties = apartments.map((property) => {
    const price = JSON.parse(JSON.stringify(property.price)).$numberDecimal
    const baths = parseInt(
      JSON.parse(JSON.stringify(property.bathrooms)).$numberDecimal
    )

    return {
      id: property._id,
      imageUrl: property.images.picture_url,
      beds: property.beds,
      baths,
      title: property.summary,
      price,
      reviewCount: property.reviews.length,
      score: property.review_scores.review_scores_rating || 0,
    }
  })

  return {
    props: { properties },
  }
}
