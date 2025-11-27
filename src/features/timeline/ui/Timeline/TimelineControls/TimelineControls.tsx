import { Button } from 'common/components/Button'

import s from './TimelineControls.module.scss'

type Props = {
  activeIndex: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export const TimelineControls = (props: Props) => {
  const { activeIndex, total, onPrev, onNext } = props
  const current = String(activeIndex + 1).padStart(2, '0')
  const all = String(total).padStart(2, '0')
  const isFirst = activeIndex === 0
  const isLast = activeIndex === total - 1

  return (
    <div className={s.timelineControls}>
      <span className={'uik-typography-caption'}>
        {current}/{all}
      </span>

      <div className={s.timelineControlsButtons}>
        <Button title='<' size='medium' onClick={onPrev} disabled={isFirst} />
        <Button title='>' size='medium' onClick={onNext} disabled={isLast} />
      </div>
    </div>
  )
}
