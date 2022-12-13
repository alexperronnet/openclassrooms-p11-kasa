import { useEffect, useState } from 'react'
import { Icon } from '@/components'

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    // Set active class to show button
    <button className={`back-to-top ${showButton ? 'back-to-top--active' : ''}`} onClick={() => window.scrollTo(0, 0)}>
      <Icon name="arrow-up" className="back-to-top__icon" />
    </button>
  )
}
