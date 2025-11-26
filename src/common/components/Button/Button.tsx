import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

import s from './Button.module.scss'

type Props = {
  title: string
  size?: 'small' | 'medium' | 'large'
} & ComponentPropsWithoutRef<'button'>

export const Button = (props: Props) => {
  const { title, size = 'medium', className, type = 'button', ...rest } = props

  return (
    <button
      className={clsx(s.button, s[size], 'uik-typography-body', className)}
      type={type}
      {...rest}
    >
      {title}
    </button>
  )
}
