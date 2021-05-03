import ApartmentCard from "@/components/ApartmentCard"
import { connectToDatabase } from "@/util/mongodb"

export default function Home({ properties }) {
  return (
    <div>
      <h1>Clonebnb</h1>
      <section>
        {properties.map((apartment) => (
          <ApartmentCard key={apartment.name} {...apartment} />
        ))}
      </section>
    </div>
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
    const price = JSON.parse(JSON.stringify(property.price))
    let cleaningFee = 0

    if (property.cleaning_fee !== undefined) {
      cleaningFee = JSON.parse(JSON.stringify(property.cleaning_fee))
        .$numberDecimal
    }

    return {
      address: property.address,
      cleaningFee: cleaningFee,
      guests: property.accommodates,
      image: property.images.picture_url,
      name: property.name,
      price: price.$numberDecimal,
      summary: property.summary,
      reviews: {
        number: property.reviews.length,
        score: property.review_scores.review_scores_rating || 0,
      },
      roomType: property.room_type,
    }
  })

  return {
    props: { properties },
  }
}
