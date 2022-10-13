import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  asChildren?: boolean,
  className?: string,
  children?: ReactNode
}

export function Text({ size = 'md', asChildren, className, children }: TextProps) {

  const Component = asChildren ? Slot : 'span'

  return (
    <Component className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}
