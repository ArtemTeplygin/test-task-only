import clsx from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { Button } from 'common/components/Button'

import { TimelineEvent } from 'features/timeline/model'

import s from './TimelineEventsList.module.scss'

import type { Swiper as SwiperType } from 'swiper'

type Props = {
  events: TimelineEvent[]
}

export const TimelineEventsList = ({ events }: Props) => {
  const slidesPerViewDesktop = 3

  const [renderedEvents, setRenderedEvents] = useState(events)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element) {
      setRenderedEvents(events)
      return
    }

    if (renderedEvents === events) return

    const tween = gsap.to(element, {
      opacity: 0,
      duration: 0.55,
      onComplete: () => {
        setRenderedEvents(events)
        gsap.to(element, { opacity: 1, duration: 0.25 })
      },
    })

    return () => {
      tween.kill()
    }
  }, [events, renderedEvents])

  return (
    <div className={s.timelineEvents}>
      <div ref={containerRef} className={s.slider}>
        <Button size='small' className={s.navPrev}>
          {'<'}
        </Button>

        <Swiper
          className={s.swiper}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: `.${s.navPrev}`,
            nextEl: `.${s.navNext}`,
          }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 25 },
            768: { slidesPerView: slidesPerViewDesktop, spaceBetween: 80 },
          }}
          pagination={{
            el: '.js-timeline-events-pagination',
            clickable: true,
            bulletClass: s.bullet,
            bulletActiveClass: s.bulletActive,
          }}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper
          }}
        >
          {renderedEvents.map((event) => (
            <SwiperSlide key={event.year} className={s.slide}>
              <article className={s.card}>
                <h3 className='text-heading'>{event.year}</h3>
                <p className='text-body'>{event.text}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button size='small' className={s.navNext}>
          {'>'}
        </Button>
      </div>

      <div className={clsx('js-timeline-events-pagination', s.dots)} />
    </div>
  )
}
