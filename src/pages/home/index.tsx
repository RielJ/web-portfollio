import { Contacts, Footer } from '@/components'
import { Hero, About, Experience, Portfolio, Navbar } from './sections'

type THomeProps = {}

const Home = ({}: THomeProps) => {
  const goToResume = () => {
    window.location.href = '/resume'
  }
  return (
    <>
      <div className="relative z-10">
        <div
          onClick={goToResume}
          className="z-50 fixed bottom-0 right-0 w-[300px] h-16 transform -rotate-45 flex justify-center items-center bg-primary text-white py-2 shadow-lg hover:bg-blue-900 transition duration-300 cursor-pointer translate-x-[25%] -translate-y-1/2"
        >
          <span className="transform ">Resume</span>
        </div>
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
