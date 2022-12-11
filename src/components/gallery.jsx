import { useRef, useEffect } from 'react'
import { RentalCard } from '@/components'

export default function Gallery({ data }) {
  return (
    <section className="gallery">
      {data ? data.map(rental => <RentalCard key={rental.id} data={rental} />) : <p>Chargement...</p>}
    </section>
  )
}
