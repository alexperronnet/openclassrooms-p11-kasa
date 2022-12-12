import { useState, useEffect, useRef } from 'react'
import { Icon } from '@/components'

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [isOpen])

  return (
    <div className="accordion" aria-expanded={isOpen}>
      <button className="accordion__button" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="accordion__title">{title}</h2>
        <Icon name="chevron-down" className="accordion__icon" />
      </button>
      <div className="accordion__content" ref={contentRef}>
        {typeof children === 'string' ? (
          <p className="accordion__text">{children}</p>
        ) : (
          <ul className="accordion__list">
            {children.map((item, i) => (
              <li key={i} className="accordion__list-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
