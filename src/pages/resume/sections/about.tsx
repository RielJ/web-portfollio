import { Section } from './section'

type TAboutProps = {}

const About = ({}: TAboutProps) => {
  return (
    <Section>
      <div>About Me</div>
      <div className="font-normal">
        Computer Engineering graduate with proficiency in web technologies and
        Software Development. Detail Oriented with a dedication to producing
        high-quality work. Eager to learn and continuously improve skills and
        character. A motivated team player and a valuable addition to any
        organization.
      </div>
    </Section>
  )
}

export { About }
