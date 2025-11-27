import { useState } from 'react'

import { timeLineData } from 'features/timeline/model'

import { AnimatedYear } from './AnimatedYear/AnimatedYear'
import s from './Timeline.module.scss'
import { TimelineCircle } from './TimelineCircle/TimelineCircle'
import { TimelineEventsList } from './TimelineEventsList/TimelineEventsList'

export const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeSlide = timeLineData[activeIndex]

  return (
    <section>
      <div className={s.years}>
        <AnimatedYear
          value={activeSlide.leftYear}
          className={`${s.yearLeft} uik-typography-display`}
        />
        <AnimatedYear
          value={activeSlide.rightYear}
          className={`${s.yearRight} uik-typography-display`}
        />
      </div>

      <TimelineCircle
        timeLineData={timeLineData}
        activeIndex={activeIndex}
        onChangeIndex={setActiveIndex}
      />
      <TimelineEventsList events={activeSlide.events} />
    </section>
  )
}
