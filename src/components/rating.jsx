import { Icon } from '@/components'

export default function Rating({ rating }) {
  const stars = Array(5)
    .fill()
    .map((_, index) => {
      const activeStar = index < rating

      return <Icon key={index} name="star" className={`star ${activeStar ? 'star--active' : ''}`} />
    })

  return <div className="rating">{stars}</div>
}
