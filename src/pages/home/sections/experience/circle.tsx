import { useVisibleScroll, useWindowSize } from '@/hooks'
import clsx from 'clsx'
import { useRef } from 'react'
import styles from './experience.module.scss'

type TCircleProps = {
  index: number
}

const Circle = ({ index }: TCircleProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = useVisibleScroll(ref)
  const screenSize = useWindowSize()
  const fill =
    scroll &&
    screenSize &&
    scroll.y + screenSize.height / 2 > scroll.offsetBoundingRect.top - 30

  return (
    <div
      ref={ref}
      className={clsx(
        'absolute w-full transform transition-colors duration-500'
      )}
    >
      <div
        className={clsx(
          styles['timeline-lottie-circle'],
          fill ? 'bg-[#915eff] scale-[2]' : 'bg-[#808080]',
          index % 2
            ? '-translate-x-1/2 left-[-60px]'
            : 'translate-x-1/2 right-0',
          '-translate-y-1/2 top-[-30px] transform transition-transform duration-300 ease-in-bounce'
        )}
      />
    </div>
  )
}

export { Circle }
