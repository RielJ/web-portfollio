import { cn } from '@/lib'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { certificates } from '../constants'
import { Section } from './section'

type TCertificatesProps = {}

const Certificates = ({}: TCertificatesProps) => {
  return (
    <Section>
      <div>Certificates and Awards</div>
      <div>
        {certificates.map((certificate, index) => (
          <div className={cn(index !== certificates.length - 1 && 'mb-8')}>
            <div>{certificate.title}</div>
            <div className="font-normal"> {certificate.date}</div>
            <div className="mt-4 flex flex-col gap-3">
              {certificate.description.map((desc) => (
                <div className="flex gap-2">
                  <i className="pt-1">
                    <DotFilledIcon className="top-2" />
                  </i>
                  <div className="font-[300]">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { Certificates }
