import { cn } from '@/lib'
import { experiences } from '../constants'
import { Section } from './section'
import { DotFilledIcon } from '@radix-ui/react-icons'

type TExperienceProps = {}

const Experience = ({}: TExperienceProps) => {
  return (
    <Section>
      <div>Experience</div>
      <div>
        {experiences.map((experience, index) => (
          <div className={cn(index !== experiences.length - 1 && 'mb-8')}>
            <div>
              {experience.company} ({experience.dateStart} -{' '}
              {experience.dateEnd})
            </div>
            <div className="font-normal">{experience.role}</div>
            <div className="mt-4 flex flex-col gap-3">
              {experience.description.map((desc) => (
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

export { Experience }
