import { Banner } from '@/components'
import bannerSrc from '/images/banner-home.webp'

export default function Home() {
  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" image={bannerSrc} />
    </div>
  )
}
