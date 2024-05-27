import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './navbar.module.scss'

type TNavLinkProps = {
  children: ReactNode
  link: string
}

const NavLink = ({ children, link }: TNavLinkProps) => {
  return (
    <motion.li className={styles.navItem} layoutId={`layout-${link}`}>
      <a
        href={`/#${link.toLowerCase()}`}
        className="hover:text-primary text-white text-lg"
      >
        {children}
      </a>
    </motion.li>
  )
}

export { NavLink }
