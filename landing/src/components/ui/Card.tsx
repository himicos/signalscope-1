import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

export const Card = ({ className = '', children, ...rest }: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) => (
  <div className={`card ${className}`} {...rest}>{children}</div>
)