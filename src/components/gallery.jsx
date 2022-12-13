import { RentalCard } from '@/components'

export default function Gallery({ data }) {
  return (
    <section className="gallery">
      {data?.map(rental => (
        <RentalCard key={rental.id} data={rental} />
      ))}
    </section>
  )
}
