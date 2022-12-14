import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChildren?: boolean
  children?: ReactNode,
  className?: string
}

export function Button({ asChildren, children, className, ...props }: ButtonProps) {

  const Component = asChildren ? Slot : 'button'

  return (
    <Component className={clsx(
        'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
