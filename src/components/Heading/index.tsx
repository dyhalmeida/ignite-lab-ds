import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg',
  asChildren?: boolean
  className?: string
  children?: ReactNode,
}

export function Heading({ size = 'md', asChildren, className, children }: HeadingProps) {

  const Component = asChildren ? Slot : 'h2'

  return (
    <Component className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}
