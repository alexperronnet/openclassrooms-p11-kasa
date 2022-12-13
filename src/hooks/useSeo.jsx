import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function useSeo({ page }) {
  const headRef = useRef(document.head)
  const location = useLocation()

  useEffect(() => {
    document.title = `Kasa — ${page}`

    const metaTags = [
      { property: 'og:title', content: `Kasa — ${page}` },
      { property: 'og:url', content: `https://ap-openclassrooms-p11-kasa-v1.netlify.app${location.pathname}` },
      { property: 'twitter:title', content: `Kasa — ${page}` },
      { property: 'twitter:url', content: `https://ap-openclassrooms-p11-kasa-v1.netlify.app${location.pathname}` }
    ]

    metaTags.forEach(metaTag => {
      if (headRef.current.querySelector(`meta[property="${metaTag.property}"]`)) {
        headRef.current.querySelector(`meta[property="${metaTag.property}"]`).content = metaTag.content
      } else {
        const newMetaTag = document.createElement('meta')
        newMetaTag.setAttribute('property', metaTag.property)
        newMetaTag.setAttribute('content', metaTag.content)
        headRef.current.appendChild(newMetaTag)
      }
    })
  }, [])

  return null
}
