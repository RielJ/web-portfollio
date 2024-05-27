import { useVisibleScroll, useWindowSize } from '@/hooks'
import clsx from 'clsx'
import { useRef } from 'react'
import styles from './experience.module.scss'

type TLineProps = {}

const Line = ({}: TLineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = useVisibleScroll(ref)
  const screenSize = useWindowSize()
  const lineHeight =
    scroll &&
    screenSize &&
    Math.max(
      0,
      Math.min(
        scroll.y + screenSize.height / 2 - scroll.offsetBoundingRect.top,
        ref.current?.clientHeight ?? 0
      )
    )

  return (
    <div ref={ref} className="w-full h-full absolute">
      <div
        className={clsx(styles['timeline-lottie'])}
        style={{
          height: lineHeight,
        }}
      />
    </div>
  )
}

export { Line }
