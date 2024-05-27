import { Section } from './section'

type TEducationProps = {}

const Education = ({}: TEducationProps) => {
  return (
    <Section>
      <div>Education</div>
      <div className="flex flex-col gap-4">
        <div>Bachelor of Science in Computer Engineering</div>
        <div className="font-normal">
          Mindanao State University – Iligan Institute of Technology A.Bonifacio
          Street, Tibanga High-way Iligan City, Philippines (9200)
        </div>
      </div>
    </Section>
  )
}

export { Education }
