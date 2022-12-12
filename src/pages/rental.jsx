import { Carousel } from '@/components'

export default function Rental({ data }) {
  return (
    <div className="rental">
      <Carousel pictures={data.pictures} />
    </div>
  )
}
