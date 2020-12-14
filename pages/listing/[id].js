import { connectToDatabase } from "../../util/mongodb";

export default function Apartment({ property }) {
  return <div></div>;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();

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
        amenities: 1
      }
    }
  );

  return {
    props: {
      property: JSON.parse(JSON.stringify(apartment))
    },
    revalidate: 1
  };
}
