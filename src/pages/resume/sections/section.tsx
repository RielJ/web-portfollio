import { Separator } from '@/components'

type TSectionProps = {
  children: React.ReactNode
}

const Section = ({ children }: TSectionProps) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-full px-16 [&>*:first-child]:col-span-1 [&>*:first-child]:text-2xl [&>*:nth-child(2)]:col-span-2">
        {children}
      </div>
      <Separator />
    </>
  )
}

export { Section }
