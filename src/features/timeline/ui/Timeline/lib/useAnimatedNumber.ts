import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

export const useAnimatedNumber = (value: number) => {
  const [displayed, setDisplayed] = useState<number>(value)
  const prevValueRef = useRef(value)

  useEffect(() => {
    const from = prevValueRef.current
    const to = value

    if (from === to) return

    const obj = { value: from }

    const tween = gsap.to(obj, {
      value: to,
      duration: 0.8,
      ease: 'power2.out',
      snap: { value: 1 },
      onUpdate: () => {
        setDisplayed(obj.value)
      },
      onComplete: () => {
        prevValueRef.current = to
      },
    })

    return () => {
      tween.kill()
    }
  }, [value])

  return displayed
}
