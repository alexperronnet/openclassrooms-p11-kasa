import { Carousel, Accordion } from '@/components'

export default function Rental({ data }) {
  return (
    <div className="rental">
      <Carousel pictures={data.pictures} />
      <div className="rental__accordions">
        <Accordion title="Description">{data.description}</Accordion>
        <Accordion title="Équipment">{data.equipments}</Accordion>
      </div>
    </div>
  )
}
