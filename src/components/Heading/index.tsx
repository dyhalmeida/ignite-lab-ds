import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg',
  asChildren?: boolean
  children?: ReactNode
}

export function Heading({ size = 'md', asChildren ,children }: HeadingProps) {

  const Component = asChildren ? Slot : 'h2'

  return (
    <Component className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        }
      )}
    >
      {children}
    </Component>
  )
}
