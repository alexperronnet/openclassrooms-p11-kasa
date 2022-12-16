import { Link } from 'react-router-dom'

export default function RentalCard({ data }) {
  return (
    <Link to={`/location/${data.id}`} className="rental-card">
      <img className="rental-card__image" src={data.cover} alt={data.title} loading="lazy" />
      <h2 className="rental-card__title">{data.title}</h2>
    </Link>
  )
}
