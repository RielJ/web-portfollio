import { Button } from '@/components'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { HeroText } from './hero-text'
import { NoiseEffects } from './noise-effects'
import styles from './hero.module.scss'

type THeroProps = {}

const Hero = ({}: THeroProps) => {
  return (
    <section className="relative w-full min-h-screen mx-auto" id="home">
      <NoiseEffects id="heroimage" />
      <div
        className={clsx(
          'absolute inset-0 max-w-7xl mx-auto flex md:flex-row flex-col items-center justify-center gap-[3rem]',
          styles['hero-bg']
        )}
      >
        <div className="w-full flex justify-center items-center">
          <motion.div
            className={clsx(
              'relative rounded-10 rounded-md overflow-hidden',
              styles['hero-image']
            )}
            id="heroimage"
          >
            <img
              src="/hero-picture.png"
              alt="Portrait Image"
              className={clsx(styles['first'], 'object-cover absolute')}
            />
            <img
              src="/hero-picture-2.png"
              alt="Portrait Image"
              className={clsx(styles['second'], 'object-cover absolute')}
            />
          </motion.div>
        </div>
        <div className="w-1 sm:h-80 h-60 violet-gradient md:flex hidden" />
        <div className="space-y-5 w-full md:text-left text-center">
          <motion.p className="font-secondary font-bold">Hi, I am</motion.p>
          <HeroText />
          <motion.h2 className={clsx(styles['hero-subheading'], 'font-bold')}>
            I craft software passionately
          </motion.h2>
          <motion.p className="max-w-2xl font-secondary font-normal">
            Results-driven Software Engineer with 4+ years of experience in
            developing robust and scalable applications
          </motion.p>
          <Button
            className="px-6"
            variant="outline"
            onClick={() => {
              // router.push('/#contact')
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            Say Hi!
          </Button>
        </div>
      </div>
    </section>
  )
}

export { Hero }
