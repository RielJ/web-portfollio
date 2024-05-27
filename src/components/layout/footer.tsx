import styles from './footer.module.scss'
import { cn } from '@/lib'

type TFooterProps = {}

const Footer = ({}: TFooterProps) => {
  return (
    <section
      className={cn(
        styles['footer'],
        'bottom-0 right-0 sm:px-16 px-2 sm:py-6 py-2'
      )}
    >
      <div className="flex items-center justify-between mx-auto inset-0 max-w-7xl">
        <div
          className={cn(styles['footer-text'], 'md:max-w-7xl max-w-[10rem]')}
        >
          Designed & developed by that fellow over there ⟿
        </div>
        <div className="text-accent">Riel Joseph Bulaybulay © 2023</div>
      </div>
    </section>
  )
}

export { Footer }
