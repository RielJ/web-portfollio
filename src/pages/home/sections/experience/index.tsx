import { Section } from '@/components'
import clsx from 'clsx'
import { useRef } from 'react'
import { Line } from './line'
import styles from './experience.module.scss'
import { Circle } from './circle'
import { Content } from './content'
import { experiences } from '../../constants'

type TExperienceProps = {}

const Experience = ({}: TExperienceProps) => {
  const timelineRef = useRef<HTMLDivElement | null>(null)

  return (
    <Section id="work">
      <div className="flex-1 overflow-hidden w-full">
        <h1 className="heading">Experience</h1>
      </div>
      <div ref={timelineRef} className={clsx(styles['timeline'], '')}>
        <Line />
        <ul className={clsx(styles['timeline-list'], 'relative')}>
          {experiences.map((experience, index) => {
            return (
              <li
                key={experience.company + index}
                className={clsx(styles['timeline-item'], 'relative')}
              >
                <Circle index={index} />
                <Content experience={experience} index={index} />
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export { Experience }
