import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ properties }) {
  console.log(properties);
  return (
    <div>
      <h1>Clonebnb</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const apartments = await db
    .collection("listingsAndReviews")
    .find()
    .sort({ _id: 1 })
    .limit(40)
    .toArray();

  const properties = apartments.map(property => {
    const price = JSON.parse(JSON.stringify(property.price));
    let cleaningFee = 0;

    if (property.cleaning_fee !== undefined) {
      cleaningFee = JSON.parse(JSON.stringify(property.cleaning_fee))
        .$numberDecimal;
    }

    return {
      name: property.name,
      image: property.images.picture_url,
      address: property.address,
      summary: property.summary,
      guests: property.accommodates,
      price: price.$numberDecimal,
      cleaning_fee: cleaningFee
    };
  });

  return {
    props: { properties }
  };
}
