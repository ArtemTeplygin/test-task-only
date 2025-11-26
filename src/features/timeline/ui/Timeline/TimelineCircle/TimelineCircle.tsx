import gsap from 'gsap'
import React, { useEffect, useState } from 'react'

import { Button } from 'common/components/Button'

import { TimelineSlide } from 'features/timeline/model'

import s from './TimelineCircle.module.scss'

type Props = {
  activeIndex: number
  timeLineData: TimelineSlide[]
  onChangeIndex: (index: number) => void
}

export const TimelineCircle = (props: Props) => {
  const { activeIndex, timeLineData, onChangeIndex } = props
  const [rotationDeg, setRotationDeg] = useState<number>(0)

  const radiusPercent = 50
  const total = timeLineData.length
  const angleStep = (2 * Math.PI) / total
  const slotAngle = Math.PI / 3

  useEffect(() => {
    const total = timeLineData.length
    const stepDeg = 360 / total
    const targetRotation = -activeIndex * stepDeg

    const rotationObj = { value: rotationDeg }

    const tween = gsap.to(rotationObj, {
      value: targetRotation,
      duration: 0.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        setRotationDeg(rotationObj.value)
      },
    })

    return () => {
      tween.kill()
    }
  }, [activeIndex])

  const rotationRad = (rotationDeg * Math.PI) / 180
  const categoryClassName = `uik-typography-body-strong ${s.pointCategory}`

  return (
    <div className={s.circleWrapper}>
      <div className={s.circle}>
        {timeLineData.map((slide, index) => {
          const angle = slotAngle + index * angleStep + rotationRad

          const top = 50 - Math.sin(angle) * radiusPercent
          const left = 50 + Math.cos(angle) * radiusPercent
          const isActive = index === activeIndex

          const wrapperClassName = isActive
            ? `${s.pointWrapper} ${s.pointWrapperActive}`
            : s.pointWrapper

          return (
            <div
              key={slide.id}
              className={wrapperClassName}
              style={{ top: `${top}%`, left: `${left}%` }}
              onClick={() => onChangeIndex(index)}
            >
              <span className={s.pointDot} />

              <div className={s.pointPopup}>
                <Button title={String(index + 1)} size="medium" />
                <span className={categoryClassName}>{slide.category}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
