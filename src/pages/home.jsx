import { Banner, Gallery } from '@/components'
import bannerSrc from '/images/banner-home.webp'

export default function Home({ data }) {
  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bannerSrc} />
      <Gallery data={data} />
    </div>
  )
}
