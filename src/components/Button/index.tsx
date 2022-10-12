import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
export interface ButtonProps {
  asChildren?: boolean
  children?: ReactNode
}

export function Button({ asChildren ,children }: ButtonProps) {

  const Component = asChildren ? Slot : 'button'

  return (
    <Component className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
      )}
    >
      {children}
    </Component>
  )
}
