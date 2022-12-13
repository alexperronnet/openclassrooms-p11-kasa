import { Carousel, Accordion, Avatar, Rating } from '@/components'
import { useSeo } from '@/hooks'

export default function Rental({ data }) {
  useSeo({ page: data.title })

  return (
    <div className="rental">
      <Carousel pictures={data.pictures} />
      <div className="rental__header">
        <div className="rental__header-top">
          <h1 className="rental__title" data-location={data.location}>
            {data.title}
          </h1>
          <Avatar src={data.host.picture} name={data.host.name} />
        </div>
        <div className="rental__header-bottom">
          <div className="rental__tags">
            {data.tags.map(tag => (
              <span key={tag} className="rental__tag">
                {tag}
              </span>
            ))}
          </div>
          <Rating rating={data.rating} />
        </div>
      </div>
      <div className="rental__accordions">
        <Accordion title="Description">{data.description}</Accordion>
        <Accordion title="Équipment">{data.equipments}</Accordion>
      </div>
    </div>
  )
}
