import { useAnimatedNumber } from '../lib/useAnimatedNumber'

type Props = {
  value: number
  className?: string
}

export const AnimatedYear = (props: Props) => {
  const { value, className } = props
  const animated = useAnimatedNumber(value)

  return <span className={className}>{animated}</span>
}
