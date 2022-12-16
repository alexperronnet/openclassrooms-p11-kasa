import { Banner, Loader, Gallery } from '@/components'
import { useSeo } from '@/hooks'
import bannerSrc from '/images/banner-home.webp'

export default function Home({ data }) {
  useSeo({ page: 'Accueil' })

  return (
    <main className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bannerSrc} />
      {data ? <Gallery data={data} /> : <Loader />}
    </main>
  )
}
