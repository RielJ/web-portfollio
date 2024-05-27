import { Variants } from 'framer-motion'

export const cardVariants = {
  offscreen: {
    opacity: 0,
    right: 50,
  },
  onscreen: {
    opacity: 1,
    left: 0,
    right: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export const portfolioContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const portfolioCardVariants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export const _menu: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const menuItems: Variants = {
  initial: {
    y: -10,
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
      type: 'spring',
      mass: 0.5,
      damping: 10,
    },
  },
  exit: {
    y: -10,
    transition: {
      duration: 0.5,
    },
  },
}
