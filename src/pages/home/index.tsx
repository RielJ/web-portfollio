import { Contacts, Footer } from '@/components'
import { Hero, About, Experience, Portfolio, Navbar } from './sections'
import { Link } from 'react-router-dom'

type THomeProps = {}

const Home = ({}: THomeProps) => {
  return (
    <>
      <div className="relative z-10">
        <Link
          to="/resume"
          className="z-50 fixed bottom-0 right-0 w-[300px] h-16 transform -rotate-45 flex justify-center items-center bg-white text-black py-2 shadow-lg hover:bg-gray-300 transition duration-300 cursor-pointer translate-x-[25%] -translate-y-1/2"
        >
          <span className="transform ">Resume</span>
        </Link>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Portfolio />
        <Contacts />
        <Footer />
      </div>
    </>
  )
}

export { Home }
