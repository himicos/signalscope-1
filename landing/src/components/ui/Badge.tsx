import { ComponentPropsWithoutRef } from 'react'

export const Badge = ({ className = '', ...props }: ComponentPropsWithoutRef<'span'>) => (
  <span className={`badge ${className}`} {...props} />
)