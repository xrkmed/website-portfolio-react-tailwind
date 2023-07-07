import React from 'react';
import { FaCircle, FaSchool, FaExternalLinkSquareAlt, FaGraduationCap, FaStar, FaRegCalendarCheck, FaInfoCircle, FaGithubSquare, FaJava, FaCertificate, FaClock } from 'react-icons/fa';
import { SiMysql, SiWebpack, SiCsharp } from 'react-icons/si';
import { BiLogoSpringBoot, BiLogoMongodb, BiLogoDocker, BiLogoAws, BiLogoJavascript, BiLogoAngular, BiLogoReact, BiLogoVuejs, BiLogoJquery, BiLogoBootstrap, BiSolidErrorCircle } from 'react-icons/bi';
import { DiNodejs, DiGulp } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

const skillsMap = {
  'java': <FaJava className='w-auto h-8'/>,
  'spring boot': <BiLogoSpringBoot className='w-auto h-8'/>,
  'mongodb': <BiLogoMongodb className='w-auto h-8'/>,
  'mysql': <SiMysql className='w-auto h-8'/>,
  'nodejs': <DiNodejs className='w-auto h-8'/>,
  'nextjs': <TbBrandNextjs className='w-auto h-8'/>,
  'reactjs': <BiLogoReact className='w-auto h-8'/>,
  'angular': <BiLogoAngular className='w-auto h-8'/>,
  'vuejs': <BiLogoVuejs className='w-auto h-8'/>,
  'jquery': <BiLogoJquery className='w-auto h-8'/>,
  'bootstrap': <BiLogoBootstrap className='w-auto h-8'/>,
  'javascript': <BiLogoJavascript className='w-auto h-8'/>,
  'webpack': <SiWebpack className='w-auto h-8'/>,
  'gulp': <DiGulp className='w-auto h-8'/>,
  'docker': <BiLogoDocker className='w-auto h-8'/>,
  'amazon aws': <BiLogoAws className='w-auto h-8'/>,
  'git': <FaGithubSquare className='w-auto h-8'/>,
  'github': <FaGithubSquare className='w-auto h-8'/>,
}

function getSkillsIcon(skill){
  return skillsMap[skill.toLowerCase()] || <><BiSolidErrorCircle/></>;
}

function addFinishedCourse(course){
  return (<>
        <div className="flex flex-col h-full md:justify-between bg-opacity-60 bg-gray-950 rounded-xl m-4 p-0 min-w-fit md:min-w-0 md:w-2/4 lg:w-1/4 shadow-md shadow-zinc-700 md:shadow-none">
        <div className="bg-gray-900">
          <div className="bg-gray-800 container text-left pt-1 pr-2">
                <button type="button">
                    <FaCircle className="text-red-500 text-md ml-2" />
                </button>
                <button type="button">
                    <FaCircle className="text-yellow-500 text-md ml-2" />
                </button>
                <button type="button">
                    <FaCircle className="text-green-500 text-md ml-2" />
                </button>
          </div>
          <div className='py-6'>
            <img src={course.image} className='w-32 h-auto mx-auto rounded-lg mb-4' alt={course.name}/>
            <h1 className="text-2xl font-semibold">{course.name}</h1>
            <h2 className='text-[#94a3b8]' dangerouslySetInnerHTML={{__html: course.description}}></h2>
          </div>
          <small className='text-gray-500 font-semibold italic'>LINGUAGENS E FERRAMENTAS APROFUNDADAS</small>
          <div className='py-2 flex flex-row gap-2 flex-wrap justify-center'>
              {
                course.skills.map((skill) => {
                  if(skill.icon){
                    return (<><div className='px-2 py-1 text-zinc-100 font-semibold' data-tooltip-id='default' data-tooltip-content={skill.name}><img src={skill.icon} className='w-auto h-8 rounded-2xl' alt={skill.name}/></div></>)
                  }else{
                    return (<><div className='px-2 py-1 text-slate-200 font-semibold' data-tooltip-id='default' data-tooltip-content={skill.name}>{getSkillsIcon(skill.name)}</div></>)
                  }
                })
              }
          </div>
        </div>
        <div className='flex flex-row ml-2 text-sm justify-between overflow-hidden text-ellipsis flex-wrap'>
          {
            course.ratingCount && course.rating ? 
            (<>
              <div className='flex'>
                <FaStar className='mt-0.5 mr-1 text-yellow-400'/>
                <p className='font-semibold'>{course.rating}</p>
                <p className='italic ml-2'>({course.ratingCount}+ Avaliaçoes)</p></div>
            </>) :
            (<></>)
          }
          {
            course.hours ? 
            (<>
            <div className='flex mr-2 font-extralight italic text-zinc-300'><FaClock className='mt-1 mr-1'/>{course.hours} horas</div>
            </>) :
            (<></>)
          }
          {
            course.finishedAt ? 
            (<>
            <div className='flex mr-2 font-extralight italic text-zinc-300'><FaRegCalendarCheck className='mt-1 mr-1'/>{course.finishedAt}</div>
            </>)
            : (<></>)
          }
        </div>
        <li className="text-left pl-4 py-5 list-none">
          <ul className="italic flex gap-2 text-zinc-400"><FaSchool className='mt-1'/> Instituição de Ensino:</ul>
          <p className="pl-4 font-semibold text-ellipsis overflow-hidden">@{course.institution} (<a onClick={() => window.open(course.institutionLink, "_blank")} rel='noreferrer' target='_blank' className='cursor-pointer text-blue-500'>{course.institutionLink}</a>)</p>
          {
            course.teacher && course.teacherLink ?
          (<>
          <ul className="italic flex gap-2 text-zinc-400"><FaGraduationCap className='mt-1'/> Ministrado por:</ul>
          <p className="pl-4 flex gap-2 font-semibold"><FaInfoCircle className='mt-1'/> <a onClick={() => window.open(course.teacherLink, "_blank")} target='_blank' rel='noreferrer' className='cursor-pointer text-blue-500'>{course.teacher}</a></p>
          </>)
          : (<></>)
          }
        </li>
        <div className="mt-auto pb-4">
          {
            course.certificateLink ?
            (<>
                <button className="bg-gray-900 hover:bg-gray-800 text-zinc-100 font-semibold py-2 px-4 rounded-md shadow-sm shadow-black">
                  <a target="_blank" href={course.certificateLink} rel='noreferrer' className='flex text-zinc-100' data-tooltip-id='link' data-tooltip-content={course.certificateLink}><FaCertificate className='mt-1 mr-2'/>Certificado</a>
                </button>
            </>) : 
            (<>
              {
                course.progress ?
                (<> 
                  <Line percent={course.progress} strokeWidth="1" strokeLinecap='round' strokeColor="#FFD700" trailColor="#2F3136" className='w-full h-4'/>
                </>) : (<></>)

              }
            </>)
          }

        </div>
      </div>
    </>)
}

export default function Courses(){
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState([]);

   useEffect(() => {
    setTimeout(() => {
      fetch('https://api.xrkmed.com/courses.json').then((response) => {
        return response.json();
      }).then((data) => {
        setCourses(data.map((course) => {
          return addFinishedCourse(course)
        }));
      }).catch((error) => {
        setError({
          error: true,
          message: error
        });
      }).finally(() => {
        setLoading(false);
      })
    }, 1000);
   }, [loading]);

    return (<>
    <div className="flex md:mx-auto flex-nowrap overflow-x-scroll md:flex-wrap md:justify-center md:overflow-x-hidden md:whitespace-normal" id='coursesList'>
      <Tooltip id='default' place='top' effect='solid' className='bg-gray-900 text-gray-100 rounded-lg p-2'/>
      <Tooltip id='link' place='bottom' effect='solid' className='bg-gray-900 text-gray-100 rounded-lg p-2'/>

      {
        loading ?
        <ReactLoading type='bubbles' color='#a1a1a1' height={70} width={70} className='mx-auto mt-10'/>
        :
        error && error.message ?
          <div className='flex flex-col justify-center items-center text-stone-200 animate-pulse mt-4'>
            <h1 className='text-2xl font-light'>Ocorreu um erro ao carregar as certificaçoes.</h1>
            <h3 className='text-red-600'>
              Informaçoes técnicas: ({error.message || " Erro desconhecido "})
            </h3>
            <p className='text-gray-300'>{error.message}</p>
          </div>
        : courses
        
      }
    </div>
    </>)
}