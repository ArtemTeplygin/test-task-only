import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

import s from './Button.module.scss'

type Props = {
  size?: 'small' | 'medium' | 'large'
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  const { size = 'medium', className, type = 'button', children, ...rest } = props

  return (
    <button className={clsx(s.button, s[size], 'text-body', className)} type={type} {...rest}>
      {children}
    </button>
  )
}
