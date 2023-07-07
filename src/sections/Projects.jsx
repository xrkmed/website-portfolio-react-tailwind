import { useState, useEffect } from "react";
import ReactLoading from 'react-loading';
import { FaCircle, FaExternalLinkSquareAlt, FaGithubAlt, FaGithubSquare } from "react-icons/fa"

function addProject(project){
    return (<>
                <div className="w-10/12 md:w-1/3 bg-gray-900 rounded-2xl overflow-clip">
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
                <div className="flex flex-col md:flex-row gap-4 p-2">
                    <img src={project.thumbnail} className="self-center md:self-auto rounded-md w-32 h-32"/>
                    <div className="flex flex-col text-center md:text-left w-auto overflow-clip">
                        <h1 className="text-gray-100 text-4xl md:text-2xl font-semibold mt-2">{project.name}</h1>
                        <h2 className="text-slate-500 text-xl md:text-base max-h-48 md:max-h-max overflow-ellipsis font-light mb-4 tracking-tight italic" dangerouslySetInnerHTML={{ __html: project.description}}></h2>
                        <div className="flex flex-col md:flex-row mt-auto bottom-0 justify-center items-center md:items-start md:justify-between mr-2">
                            <button className="text-blue-500 font-semibold hover:underline mr-2 mt-4 md:mt-0 mb-2 md:mb-0" >
                                <a href={project.url} target="_blank" rel='noreferrer' className='flex gap-2' data-tooltip-id='link' data-tooltip-content={project.url}><FaExternalLinkSquareAlt className="mt-1"/> View more</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}

export default function Projects(){
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        setTimeout(() => {
          fetch('https://api.xrkmed.com/projects.json').then((response) => {
            return response.json();
          }).then((data) => {
              setProjects(data.map((project) => {
              return addProject(project)
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

    return (
    <>
        <div className="flex flex-wrap justify-center gap-24 mt-4 antialiased">
            {
            loading ?
            <ReactLoading type='bubbles' color='#a1a1a1' height={70} width={70} className='mx-auto mt-10'/>
            :
            error && error.message ?
                <div className='flex flex-col justify-center items-center text-stone-200 animate-pulse mt-4'>
                <h1 className='text-2xl font-light'>Ocorreu um erro ao carregar os projetos.</h1>
                <h3 className='text-red-600'>
                    Informaçoes técnicas: ({error.message || " Erro desconhecido "})
                </h3>
                <p className='text-gray-300'>{error.message}</p>
                </div>
            : projects.length > 0 && (<>
            {projects}
            <div className="flex flex-row gap-2 text-zinc-200">
            <FaGithubSquare className="text-4xl "/>
            <h1 className='text-2xl font-normal antialiased'>Mais projetos em <a href="https://www.github.com/xrkmed" target="_blank" rel="noreferrer" className="text-blue-500">github.com/xrkmed</a>.</h1>
            </div>
            </>)
            || <h1 className='text-2xl font-light'>Nenhum projeto foi adicionado aqui ainda.</h1>
            }
        </div>
    </>)
}