import clsx from 'clsx'
import { motion } from 'framer-motion'
import styles from './experience.module.scss'
import { cardVariants } from '@/lib'
import { TExperience } from '@/types'

type TContentProps = {
  index: number
  experience: TExperience
}

const Content = ({ index, experience }: TContentProps) => {
  const isRight = index % 2

  return (
    <motion.div
      // ref={ref}
      className={clsx(styles['timeline-content'], 'relative space-y-3')}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h3
        className={clsx(
          isRight ? 'left-[-10px]' : 'right-[-10px]',
          'top-[-55px] absolute'
        )}
      >
        {experience.dateStart} - {experience.dateEnd}
      </h3>
      <h1>
        {experience.role}{' '}
        <span className="text-accent">@ {experience.company}</span>{' '}
      </h1>
      <ul className="list-disc">
        {experience.description.map((desc, i) => (
          <li key={desc + i} className="font-normal text-sm font-secondary">
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export { Content }
