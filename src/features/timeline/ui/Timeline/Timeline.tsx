import { useState } from 'react'

import { timeLineData } from 'features/timeline/model'

import s from './Timeline.module.scss'
import { TimelineCircle } from './TimelineCircle/TimelineCircle'

export const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeSlide = timeLineData[activeIndex]

  return (
    <section>
      <div className={s.years}>
        <span className={`${s.yearLeft} uik-typography-display`}>{activeSlide.leftYear}</span>
        <span className={`${s.yearRight} uik-typography-display`}>{activeSlide.rightYear}</span>
      </div>

      <TimelineCircle
        timeLineData={timeLineData}
        activeIndex={activeIndex}
        onChangeIndex={setActiveIndex}
      />
      {/* <TimelineEventsList events={activeSlide.events} onSlideChange={setActiveIndex} /> */}
    </section>
  )
}
