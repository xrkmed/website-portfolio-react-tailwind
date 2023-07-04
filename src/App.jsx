import MyInfos from './sections/MyInfos';
import AboutMe from './sections/AboutMe';
import SocialMedias from './sections/SocialMedias';
import Courses from './sections/Courses';
import { FaAngleDoubleDown } from 'react-icons/fa'


export default function App() {
  return (
    <>
    <div className="mx-auto flex flex-col items-center justify-center h-screen">
        <div className="bg-opacity-70 bg-zinc-900 p-10 rounded-xl">
           <div className="flex flex-row items-center">
              <MyInfos/>
          </div>
          <div>
            <AboutMe/>
            <SocialMedias/>
          </div>
        </div>

        <div id="animatedArrow" className='text-6xl mt-12 animate-bounce'>
            <FaAngleDoubleDown/>
        </div>
    </div>
    <div className='pt-10 mt-8 block'>
      <div className='py-10 text-center'>
        <h1 className='text-5xl font-semibold md:text-6xl md:font-extralight antialiased'>
          CERTIFICAÇOES
        </h1>
        <Courses/>
        {/* <h1 className='text-6xl font-extralight mt-24 antialiased'>
          PROJETOS
        </h1>
        <Projects/> */}
      </div>
    </div>
      <div className='flex flex-col text-center justify-center antialiased'>
        <h1 className='text-center text-gray-100 font-semibold text-xl'>particular.guilherme.martins@gmail.com</h1>
        <h2>
          Desenvolvido em React.JS, Vite, PostCSS e TailwindCSS.
        </h2>
      </div>

    </>
  )
}
