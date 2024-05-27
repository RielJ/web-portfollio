import * as React from 'react'

import { cn } from '@/lib/utils'
import styles from './textarea.module.scss'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

const TextareaWithLabel = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 h-full">
        <div className={cn(styles['textarea-div'])}>
          <Textarea
            ref={ref}
            className={cn(styles['textarea'], 'z-0')}
            required
            {...props}
          />
          <label
            className={cn(styles['textarea-label'], 'z-10 bg-background')}
            htmlFor={props.id}
          >
            {placeholder}
          </label>
        </div>
      </div>
    )
  }
)
export { Textarea, TextareaWithLabel }
