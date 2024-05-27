import clsx from 'clsx'
import { useState, useCallback, useEffect } from 'react'
import styles from './hero.module.scss'
import { motion } from 'framer-motion'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const defaultHeroText = '-RielJ'

type THeroTextProps = {}

const HeroText = ({}: THeroTextProps) => {
  const [heroText, setHeroText] = useState(defaultHeroText)

  const handleMouseEnterLeaveEffect = useCallback(() => {
    let iteration = 1
    // clearInterval(interval)
    const interval = setInterval(() => {
      setHeroText(
        heroText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return defaultHeroText[index]
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      if (iteration >= defaultHeroText.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)

    return interval
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const interval = handleMouseEnterLeaveEffect()
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.h1
      className={clsx(
        'font-secondary font-extrabold text-heading',
        styles['hero-heading']
      )}
      onMouseEnter={handleMouseEnterLeaveEffect}
      // onMouseLeave={handleMouseEnterLeaveEffect}
      animate={{
        color: '#915EFF',
      }}
      whileHover={{
        color: '#bb9af7',
        transition: { duration: '500ms', ease: 'easeInOut' },
      }}
    >
      {heroText}
    </motion.h1>
  )
}

export { HeroText }
