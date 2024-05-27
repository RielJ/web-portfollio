import { cn } from '@/lib'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { projects } from '../constants'
import { Section } from './section'
import { Link2Icon } from 'lucide-react'

type TProjectsProps = {}

const Projects = ({}: TProjectsProps) => {
  return (
    <Section>
      <div>Side Projects</div>
      <div>
        {projects.map((project, index) => (
          <div className={cn(index !== projects.length - 1 && 'mb-8')}>
            {project.link ? (
              <a
                className="flex gap-4 cursor-pointer"
                href={project.link}
                target="_blank"
              >
                {project.name} <Link2Icon />
              </a>
            ) : (
              <div>{project.name}</div>
            )}
            <div className="mt-4 flex flex-col gap-3">
              {project.description.map((desc) => (
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

export { Projects }
