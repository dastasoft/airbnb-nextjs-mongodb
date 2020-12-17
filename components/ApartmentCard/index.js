import styles from "./ApartmentCard.module.css"

export default function ApartmentCard({
  image,
  address,
  summary,
  price,
  reviews,
  roomType,
}) {
  return (
    <div className={styles.Container}>
      <img className={styles.Preview} src={image} />
      <div className={styles.Data}>
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
