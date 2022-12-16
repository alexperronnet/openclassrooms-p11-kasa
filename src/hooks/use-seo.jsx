import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function useSeo({ page }) {
  const headRef = useRef(document.head)
  const location = useLocation()
  const title = `Kasa — ${page}`
  const url = `https://ap-openclassrooms-p11-kasa-v1.netlify.app${location.pathname}`

  useEffect(() => {
    headRef.current.querySelector('title').innerHTML = title
    headRef.current.querySelector('meta[name="title"]').setAttribute('content', title)
    headRef.current.querySelector('meta[property="og:title"]').setAttribute('content', title)
    headRef.current.querySelector('meta[property="og:url"]').setAttribute('content', url)
    headRef.current.querySelector('meta[property="twitter:title"]').setAttribute('content', title)
    headRef.current.querySelector('meta[property="twitter:url"]').setAttribute('content', url)
  }, [page, location.pathname])

  return null
}
