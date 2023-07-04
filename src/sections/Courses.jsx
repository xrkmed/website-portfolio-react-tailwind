import React from 'react';
import { FaCircle, FaSchool, FaExternalLinkSquareAlt, FaGraduationCap, FaStar, FaRegCalendarCheck, FaInfoCircle, FaGithubSquare, FaJava, FaCertificate, FaClock } from 'react-icons/fa';
import { SiMysql, SiWebpack, SiCsharp } from 'react-icons/si';
import { BiLogoSpringBoot, BiLogoMongodb, BiLogoDocker, BiLogoAws, BiLogoJavascript, BiLogoAngular, BiLogoReact, BiLogoVuejs, BiLogoJquery, BiLogoBootstrap } from 'react-icons/bi';
import { DiNodejs, DiGulp } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';

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
            <h2 className='text-[#94a3b8]'>{course.description}</h2>
          </div>
          <small className='text-gray-500 font-semibold italic'>LINGUAGENS E FERRAMENTAS APROFUNDADAS</small>
          <div className='py-2 flex flex-row gap-2 flex-wrap justify-center'>
              {
                course.skills.map((skill) => {
                  if(typeof skill.icon === 'string'){
                    return (<><div className='px-2 py-1 text-zinc-100 font-semibold' data-tooltip-id='default' data-tooltip-content={skill.name}><img src={skill.icon} className='w-auto h-8 rounded-2xl' alt={skill.name}/></div></>)
                  }else{
                    return (<><div className='px-2 py-1 text-slate-200 font-semibold' data-tooltip-id='default' data-tooltip-content={skill.name}>{skill.icon}</div></>)
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
                  <a target="_blank" href={course.certificateLink} rel='noreferrer' className='flex text-zinc-100'><FaCertificate className='mt-1 mr-2'/>Certificado</a>
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

      <Tooltip id='default' className='bg-zinc-900 text-2xl text-zinc-100 font-light' delayShow="100"/>
      <Tooltip id='link' className='font-extralight text-ellipsis text-blue-400' place='bottom' delayShow="100"/>
  </>)
}

function addFinishedCourses(courses){
  return courses.map((course) => {
    return addFinishedCourse(course)
  })
}

export default function Courses(){
    return (<>
    <div className="flex md:mx-auto flex-nowrap overflow-x-scroll md:flex-wrap md:justify-center md:overflow-x-hidden md:whitespace-normal">
      {addFinishedCourses([
        {
        "image": "https://xrkmed.com/assets/images/oracle.png",
        "name": "JF Java Fundamentals Learner",
        "description": "Base sólida na linguagem de programação Java e habilidades de programação orientada a objetos",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "MySql", "icon": <SiMysql className='w-auto h-8 rounded-2xl'/>},
        ],
        "hours": 90,
        "institution": "Oracle Academy",
        "institutionLink": "https://academy.oracle.com/",
        "certificateLink": "https://www.linkedin.com/posts/xrkmed_oracleacademy-oracle-java-activity-7054503512537214976-6Sge?utm_source=share&utm_medium=member_desktop",
        "finishedAt": "18/04/2023"
      },
      {
        "image": "https://xrkmed.com/assets/images/oracle.png",
        "name": "JF Java Foundations Learner",
        "description": "Este curso apresenta aos alunos os conceitos básicos de programação de computadores e o paradigma de programação orientada a objetos usando Java.",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "MySql", "icon": <SiMysql className='w-auto h-8 rounded-2xl'/>},
        ],
        "hours": 90,
        "institution": "Oracle Academy",
        "institutionLink": "https://academy.oracle.com/",
        "certificateLink": "https://www.linkedin.com/posts/xrkmed_oracle-java-javafx-activity-7055026819565051904-UgBB?utm_source=share&utm_medium=member_desktop",
        "finishedAt": "21/04/2023",
        "progress": 100
      },
      {
        "image": "https://xrkmed.com/assets/images/oracle.png",
        "name": "Database Design",
        "description": "Este curso envolve os alunos na análise de cenários de negócios complexos e na criação de um modelo de dados.",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "MySql", "icon": <SiMysql className='w-auto h-8 rounded-2xl'/>},
        ],
        "hours": 45,
        "institution": "Oracle Academy",
        "institutionLink": "https://academy.oracle.com/",
        "certificateLink": "https://www.linkedin.com/posts/xrkmed_oracleacademy-databasedesign-oracle-activity-7058908129731694592-Otnv?utm_source=share&utm_medium=member_desktop",
        "finishedAt": "30/04/2023",
        "progress": 100
      },
      {
        "image": "https://xrkmed.com/assets/images/oracle.png",
        "name": "Database Foundations",
        "description": "O curso ensina aos alunos a terminologia do banco de dados relacional, bem como conceitos de modelagem de dados, criação de Diagramas Entidade-Relacionamento (ERDs) e mapeamento de ERDs.",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "MySql", "icon": <SiMysql className='w-auto h-8 rounded-2xl'/>},
        ],
        "hours": 45,
        "institution": "Oracle Academy",
        "institutionLink": "https://academy.oracle.com/",
        "certificateLink": "https://www.linkedin.com/posts/xrkmed_database-oracle-activity-7069500077781786624-Ow2j?utm_source=share&utm_medium=member_desktop",
        "finishedAt": "30/05/2023",
        "progress": 100
      },
      {
        "image": "https://xrkmed.com/assets/images/udemy.png",
        "name": "Curso Java Completo 2023 + Projetos",
        "description": "Java e OO, UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, MongoDB e muito mais",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "MySql", "icon": <SiMysql className='w-auto h-8 rounded-2xl'/>},
          {"name": "Spring Boot", "icon": <BiLogoSpringBoot className='w-auto h-8 rounded-2xl'/>},
          {"name": "MongoDB", "icon": <BiLogoMongodb className='w-auto h-8 rounded-2xl'/>},
          {"name": "GitHub", "icon": <FaGithubSquare className='w-auto h-8 rounded-2xl'/>},
        ],
        "rating": 4.8,
        "ratingCount": 43.763,
        "hours": 54,
        "institution": "Udemy",
        "institutionLink": "https://www.udemy.com/course/java-curso-completo/",
        "teacher": "Nélio Alves",
        "teacherLink": "https://www.udemy.com/user/nelio-alves/",
        "certificateLink": "https://www.udemy.com/certificate/UC-d3bec937-bdb1-490c-b6bc-02c0f560bf78/",
        "finishedAt": "16/04/2023",
        "progress": 100
      },
      {
        "image": "https://xrkmed.com/assets/images/udemy.png",
        "name": "REST API's RESTFul do 0 à AWS c. Spring Boot 3 Java e Docker",
        "description": "Desenvolva uma API REST do 0 e implante na AWS c. Spring Boot framework Swagger JWT JUnit 5 Mockito Docker React JS e +",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "MySql", "icon": <SiMysql className='w-auto h-8 rounded-2xl'/>},
          {"name": "Spring Boot", "icon": <BiLogoSpringBoot className='w-auto h-8 rounded-2xl'/>},
          {"name": "Docker", "icon": <BiLogoDocker className='w-auto h-8 rounded-2xl'/>},
          {"name": "Amazon AWS", "icon": <BiLogoAws className='w-auto h-8 rounded-2xl'/>},
        ],
        "rating": 4.7,
        "ratingCount": 2.115,
        "hours": 40,
        "institution": "Udemy",
        "institutionLink": "https://www.udemy.com/course/restful-apis-do-0-a-nuvem-com-springboot-e-docker/",
        "teacher": "Leandro Costa",
        "teacherLink": "https://www.udemy.com/user/leandro-da-costa-goncalves/",
        "certificateLink": "https://www.udemy.com/certificate/UC-23dda23b-e13b-4478-8c2a-716974193ea3/",
        "finishedAt": "03/07/2023",
        "progress": 100
      },
      {
        "image": "https://xrkmed.com/assets/images/udemy.png",
        "name": "Curso Web Moderno Completo com JavaScript 2022 + Projetos",
        "description": "Javascript Angular React Next Vue Node HTML CSS jQuery Bootstrap Webpack Gulp MySQL",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "JavaScript", "icon": <BiLogoJavascript className='w-auto h-8 rounded-2xl'/>},
          {"name": "Angular", "icon": <BiLogoAngular className='w-auto h-8 rounded-2xl'/>},
          {"name": "ReactJS", "icon": <BiLogoReact className='w-auto h-8 rounded-2xl'/>},
          {"name": "NextJS", "icon": <TbBrandNextjs className='w-auto h-8 rounded-2xl'/>},
          {"name": "VueJS", "icon": <BiLogoVuejs className='w-auto h-8 rounded-2xl'/>},
          {"name": "NodeJS", "icon": <DiNodejs className='w-auto h-8 rounded-2xl'/>},
          {"name": "jQuery", "icon": <BiLogoJquery className='w-auto h-8 rounded-2xl'/>},
          {"name": "Bootstrap", "icon": <BiLogoBootstrap className='w-auto h-8 rounded-2xl'/>},
          {"name": "Webpack", "icon": <SiWebpack className='w-auto h-8 rounded-2xl'/>},
          {"name": "Gulp", "icon": <DiGulp className='w-auto h-8 rounded-2xl'/>},
          {"name": "MySQL", "icon": <SiMysql className='w-auto h-8 rounded-2xl'/>},
        ],
        "rating": 4.7,
        "ratingCount": 48.964,
        "hours": 97,
        "institution": "Udemy",
        "institutionLink": "https://www.udemy.com/course/curso-web/",
        "teacher": "Cod3r Cursos e Leonardo Moura Leitao",
        "teacherLink": "https://www.udemy.com/course/curso-web/#instructor-1",
        "progress": 80
      },
      {
        "image": "https://xrkmed.com/assets/images/udemy.png",
        "name": "C# COMPLETO Programação Orientada a Objetos + Projetos",
        "description": "Curso mais didático e completo de C# e OO, coleções, UML, ASP.NET, Entity Framework, LINQ, Lambda e muito mais",
        "skills": [
          {"name": "C#", "icon": <SiCsharp className='w-auto h-8 rounded-2xl'/>},
          {"name": "Asp.NET", "icon": "https://xrkmed.com/assets/images/aspnet.png"},
          {"name": "Entity Framework", "icon": "https://xrkmed.com/assets/images/entity-framework.png"},
          {"name": "GitHub", "icon": <FaGithubSquare className='w-auto h-8 rounded-2xl'/>}
        ],
        "rating": 4.8,
        "ratingCount": 25.609,
        "hours": 38,
        "institution": "Udemy",
        "institutionLink": "https://www.udemy.com/course/programacao-orientada-a-objetos-csharp/",
        "teacher": "Nélio Alves",
        "teacherLink": "https://www.udemy.com/user/nelio-alves/",
        "progress": 70
      },
      {
        "image": "https://xrkmed.com/assets/images/udemy.png",
        "name": "Java Unit Testing com Spring Boot 3, TDD, Junit 5 e Mockito",
        "description": "Domine Testes Unitários e de Integração para APPs Java e Spring Boot 3 com JUnit 5, Mockito, TestContainers, TDD e ++++",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "SpringBoot", "icon": <BiLogoSpringBoot className='w-auto h-8 rounded-2xl'/>}
        ],
        "rating": 4.7,
        "ratingCount": 8,
        "hours": 15,
        "institution": "Udemy",
        "institutionLink": "https://www.udemy.com/course/java-unit-testing-com-java-spring-boot-3-junit-5-e-mockito/",
        "teacher": "Leandro Costa",
        "teacherLink": "https://www.udemy.com/user/leandro-da-costa-goncalves/",
        "progress": 10
      },
      {
        "image": "https://xrkmed.com/assets/images/udemy.png",
        "name": "Reactive Microservices with Spring WebFlux",
        "description": "Unlock the Power of Reactive Programming with Spring WebFlux to Develop Scalable and Efficient Microservices",
        "skills": [
          {"name": "Java", "icon": <FaJava className='w-auto h-8 rounded-2xl'/>},
          {"name": "SpringBoot", "icon": <BiLogoSpringBoot className='w-auto h-8 rounded-2xl'/>}
        ],
        "rating": 4.5,
        "hours": 10,
        "ratingCount": 885,
        "institution": "Udemy",
        "institutionLink": "https://www.udemy.com/course/spring-webflux/",
        "teacher": "Vinoth Selvaraj",
        "teacherLink": "https://www.udemy.com/user/vinoth-selvaraj/",
        "progress": 10
      }
      ]
      )}
    </div>
    
    </>)
}