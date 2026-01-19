// import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import classes from './EmblaCarousel.module.css'

export function EmblaCarousel({ slides = [], altBase = "Imagen" }) {
  const [emblaRef] = useEmblaCarousel({ loop: false })

  return (
    <div className={classes.embla} ref={emblaRef}>
      <div className={classes.container}>
        {slides.map((src, i) => (
          <div className={classes.slide} key={src + i}>
            <div className={classes.imageBox}>
              <img
                className={classes.image}
                src={src}
                alt={`${altBase} ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
