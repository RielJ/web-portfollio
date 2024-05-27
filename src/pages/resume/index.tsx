import { Separator } from '@/components'
import {
  About,
  Certificates,
  Education,
  Experience,
  Header,
  Projects,
  Skillset,
} from './sections'
import { Link } from 'react-router-dom'

type TResumeProps = {}

const Resume = ({}: TResumeProps) => {
  return (
    <div className="relative z-10 flex flex-col gap-16 max-w-7xl w-full mx-auto mb-24">
      <Link
        to="/"
        className="z-50 fixed bottom-0 right-0 w-[300px] h-16 transform -rotate-45 flex justify-center items-center bg-white text-black py-2 shadow-lg hover:bg-gray-300 transition duration-300 cursor-pointer translate-x-[25%] -translate-y-1/2"
      >
        <span className="transform ">Portfolio</span>
      </Link>
      <Header />
      <Separator />
      <About />
      <Education />
      <Experience />
      <Certificates />
      <Projects />
      <Skillset />
    </div>
  )
}

export { Resume }
