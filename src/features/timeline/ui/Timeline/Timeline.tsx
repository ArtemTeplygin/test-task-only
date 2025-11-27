import { useState } from 'react'

import { timeLineData } from 'features/timeline/model'

import { AnimatedYear } from './AnimatedYear/AnimatedYear'
import s from './Timeline.module.scss'
import { TimelineCircle } from './TimelineCircle/TimelineCircle'
import { TimelineControls } from './TimelineControls/TimelineControls'
import { TimelineEventsList } from './TimelineEventsList/TimelineEventsList'

export const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeSlide = timeLineData[activeIndex]
  const totalSlides = timeLineData.length

  return (
    <section className={s.timeline}>
      <header className={s.header}>
        <h2 className={`${s.heading} text-h1`}>
          Исторические
          <br /> даты
        </h2>
      </header>

      <div className={s.timelineTop}>
        <div className={s.years}>
          <AnimatedYear value={activeSlide.leftYear} className={`${s.yearLeft} text-display`} />
          <AnimatedYear value={activeSlide.rightYear} className={`${s.yearRight} text-display`} />
        </div>

        <TimelineCircle
          timeLineData={timeLineData}
          activeIndex={activeIndex}
          onChangeIndex={setActiveIndex}
        />
      </div>

      <div className={s.bottom}>
        <TimelineControls
          activeIndex={activeIndex}
          total={totalSlides}
          onPrev={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
          onNext={() => activeIndex < totalSlides - 1 && setActiveIndex(activeIndex + 1)}
        />
        <TimelineEventsList events={activeSlide.events} />
      </div>
    </section>
  )
}
