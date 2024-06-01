import { DotFilledIcon } from '@radix-ui/react-icons'
import { skillsets } from '../constants/skillset'

type TSkillsetProps = {}

const Skillset = ({}: TSkillsetProps) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full px-16 ">
      <div className="col-span-full text-2xl">Technical Skills</div>
      {skillsets.map((skillset) => (
        <>
          <div className="col-span-full text-normal font-bold">
            {skillset.name}
          </div>
          {skillset.skills.map((skill) => (
            <div className="flex gap-2">
              <i className="pt-1">
                <DotFilledIcon className="top-2" />
              </i>
              <div className="font-normal">{skill}</div>
            </div>
          ))}
        </>
      ))}
    </div>
  )
}

export { Skillset }
