import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'> & { variant?: 'primary' | 'ghost' }

export const Button = ({ className = '', variant = 'primary', ...props }: Props) => (
  <button className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`} {...props} />
)