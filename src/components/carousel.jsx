import { useState } from 'react'
import { Icon } from '@/components'

export default function Carousel({ pictures }) {
  const [slide, setSlide] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragEnd, setDragEnd] = useState(0)

  const handleSlide = direction => {
    switch (direction) {
      case 'left':
        slide === 0 ? setSlide(pictures.length - 1) : setSlide(slide - 1)
        break
      case 'right':
        slide === pictures.length - 1 ? setSlide(0) : setSlide(slide + 1)
        break
    }
  }

  return (
    <div className="carousel">
      <div className="carousel__pictures">
        {pictures.map((picture, i) => (
          <img
            key={i}
            src={picture}
            alt="rental"
            className="carousel__picture"
            style={{ transform: `translateX(${slide * -100}%)` }}
          />
        ))}
      </div>
      {pictures.length > 1 && (
        <div className="carousel__controls">
          <button className="carousel__control" onClick={() => handleSlide('left')}>
            <Icon name="chevron-left" className="carousel__icon" />
          </button>
          <div className="carousel__dots">
            {pictures.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot ${i === slide ? 'carousel__dot--active' : ''}`}
                onClick={() => setSlide(i)}
              />
            ))}
          </div>
          <button className="carousel__control" onClick={() => handleSlide('right')}>
            <Icon name="chevron-right" className="carousel__icon" />
          </button>
        </div>
      )}
    </div>
  )
}
