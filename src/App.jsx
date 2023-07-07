import MyInfos from './sections/MyInfos';
import AboutMe from './sections/AboutMe';
import SocialMedias from './sections/SocialMedias';
import Courses from './sections/Courses';
import Projects from './sections/Projects';
import { FaAngleDoubleDown, FaGraduationCap } from 'react-icons/fa'
import { useEffect, useState } from 'react';

export default function App() {
  useEffect(() => {
    const animatedArrow = document.getElementById('animatedArrow');
    animatedArrow.addEventListener('click', () => {
      window.scrollTo({
        top: document.getElementById('certifications').offsetTop,
        behavior: 'smooth'
      })
    })
   }, []);

   const [scrollLeft, setScrollLeft] = useState(0);
   useEffect(() => {
    document.getElementById('coursesList').addEventListener('scroll', () => {
      const scrollPosition = document.getElementById('coursesList').scrollLeft;
      const maxScroll = document.getElementById('coursesList').scrollWidth - document.getElementById('coursesList').clientWidth;

      const progress = (scrollPosition / maxScroll) * 100;
      setScrollLeft(progress);
    });
   }, []);

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

        <div id="animatedArrow" className='text-6xl mt-12 animate-bounce cursor-pointer hover:text-gray-400 transition-colors'>
            <FaAngleDoubleDown/>
        </div>
    </div>
    <div className='pt-10 mt-8 block'>
      <div className='py-10 text-center'>
        <section id='certifications'>
        <h1 className='text-4xl font-semibold md:text-6xl md:font-extralight antialiased flex justify-center gap-4'>
          <FaGraduationCap/>PROJETOS
        </h1>
            <Projects/>
        </section>
      </div>
    </div>
    <div className='pt-10 mt-8 block'>
      <div className='py-10 text-center'>
        <section id='certifications'>
        <h1 className='text-4xl font-semibold md:text-6xl md:font-extralight antialiased flex justify-center gap-4'>
          <FaGraduationCap/>CERTIFICAÇOES
        </h1>
        <div className='block md:hidden mt-2'>
          {
            scrollLeft == 0 ?
            (<> 
              <h3>Arraste para o lado para ver mais</h3>
            </>) :
            <>
            <div className='m-auto w-11/12 mt-4'>
              <div className='h-1 bg-gray-900 rounded-full'>
                <div className='h-full bg-slate-200 rounded-full' style={{width: `${scrollLeft}%`}}></div>
              </div>
            </div>
            </>
          }

        </div>
            <Courses/>
        </section>
      </div>
    </div>
      <div className='flex flex-col text-center justify-center antialiased'>
        <h1 className='text-center text-gray-100 font-semibold md:text-xl text-lg'>particular.guilherme.martins@gmail.com</h1>
        <h2 className='text-lg'>
          Desenvolvido em React.JS, Vite, PostCSS e TailwindCSS.
        </h2>
      </div>

    </>
  )
}
