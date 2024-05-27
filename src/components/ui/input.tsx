import * as React from 'react'

import { cn } from '@/lib/utils'
import styles from './input.module.scss'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

const InputWithLabel = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <div className={cn(styles['input-div'])}>
          <Input
            ref={ref}
            className={cn(styles['input'], 'z-0')}
            required
            {...props}
          />
          <label
            className={cn(styles['input-label'], 'z-10 bg-background')}
            htmlFor={props.id}
          >
            {placeholder}
          </label>
        </div>
      </div>
    )
  }
)

export { Input, InputWithLabel }
