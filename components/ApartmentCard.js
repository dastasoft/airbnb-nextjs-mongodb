export default function ApartmentCard({
  image,
  address,
  summary,
  price,
  reviews,
  roomType,
}) {
  return (
    <div>
      <img src={image} />
      <div>
        <div>
          {/* Icon Star */} {reviews.score} ({reviews.number})
        </div>
        <div>
          <span>{roomType}</span> · <span>{address.country}</span>
        </div>
        <div>{summary}</div>
        <div>{price}$ / month</div>
      </div>
    </div>
  )
}
