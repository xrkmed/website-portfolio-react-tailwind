import backgroundImage from '@assets/images/background.png';
import cata from '@assets/images/cata.png';
import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { BiChevronDown, BiLinkExternal } from 'react-icons/bi';
import { CgWorkAlt } from 'react-icons/cg';
import { FaAngleDoubleDown, FaGraduationCap } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { SlBadge } from 'react-icons/sl';
import { twMerge } from 'tailwind-merge';
import AboutMe from './sections/AboutMe';
import Courses from './sections/Courses';
import MyInfos from './sections/MyInfos';
import Projects from './sections/Projects';

export default function Application(): React.ReactElement {
  React.useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const elements = document.querySelectorAll('section');
      elements.forEach((element) => {
        if (scroll > element.clientTop - window.innerHeight / 1.3) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animatedArrow = document.getElementById('animatedArrow');
    animatedArrow.addEventListener('click', () => {
      window.scrollTo({
        top: document.getElementById('actual_job').offsetTop,
        behavior: 'smooth',
      });
    });
  }, []);

  const [scrollLeft, setScrollLeft] = React.useState(0);
  useEffect(() => {
    document.getElementById('coursesList').addEventListener('scroll', () => {
      const scrollPosition = document.getElementById('coursesList').scrollLeft;
      const maxScroll =
        document.getElementById('coursesList').scrollWidth -
        document.getElementById('coursesList').clientWidth;

      const progress = (scrollPosition / maxScroll) * 100;
      setScrollLeft(progress);
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={twMerge(
          'mx-auto flex flex-col items-center justify-start min-h-screen pt-[20vh] max-w-[50vw]',
          isMobile && 'max-w-[90vw]',
        )}
      >
        <div className='bg-opacity-70 bg-gray-900 p-10 rounded-xl'>
          <div className='flex flex-row items-center'>
            <MyInfos />
          </div>
          <AboutMe />
        </div>

        <div
          id='animatedArrow'
          className='text-6xl mt-12 animate-bounce cursor-pointer hover:text-gray-400 transition-colors'
        >
          <FaAngleDoubleDown />
        </div>
      </div>
      <div className='py-10 flex justify-center items-center w-full '>
        <section id='actual_job'>
          <h1 className='text-4xl items-center font-semibold md:text-6xl md:font-extralight antialiased flex justify-center gap-4 pb-4'>
            <CgWorkAlt />
            OCUPAÇÃO ATUAL
          </h1>
          <div
            className={twMerge(
              'flex flex-col items-center justify-center w-full max-w-2xl bg-gray-900 bg-opacity-70 p-8 rounded-md',
              isMobile && 'max-w-[90vw]',
            )}
          >
            <div className='flex flex-row justify-center items-center gap-x-4 w-full'>
              <div className='flex flex-col gap-y-4 w-full flex-[1]'>
                <img
                  src={cata}
                  alt='cata'
                  className='w-auto h-24 object-contain rounded-full'
                />
              </div>
              <div className='flex flex-row gap-x-4 items-center flex-[1]'>
                <MdDateRange size={36} />
                <div className='flex flex-col leading-5'>
                  <span className='text-whiteAlpha-900 text-sm'>
                    <strong>Contratado em:</strong> 24/08/2023
                  </span>
                  <span className='text-whiteAlpha-900 text-sm'>
                    <strong>Até: </strong>Emprego atual
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-y-2'>
              <div
                className='flex flex-col justify-center items-center text-yellow-500 font-medium gap-x-2 cursor-pointer'
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    'https://www.aemflo-cdlsj.org.br/noticias/conheca-as-empresas-vencedoras-do-premio-aemflo-inovacao-2024',
                    '_blank',
                  );
                }}
              >
                <SlBadge size={24} />
                <div className='flex flex-row items-center gap-x-2'>
                  <span
                    className={twMerge(
                      'text-sm tracking-tight',
                      isMobile && 'text-center',
                    )}
                  >
                    Vencedora do prêmio Aemflo na categoria{' '}
                    <strong>Tecnologia</strong> em 2024
                  </span>
                </div>
              </div>
              <a
                href='https://www.catacompany.com.br'
                target='_blank'
                rel='noreferrer'
                className='text-blue-500 font-semibold hover:underline mt-4 md:mt-0 mb-2 md:mb-0'
              >
                <div className='inline-flex items-center'>
                  https://www.catacompany.com.br
                  <BiLinkExternal className='ml-2' />
                </div>
              </a>
            </div>

            <div className='flex flex-col gap-y-2 mt-4'>
              <span className='text-whiteAlpha-900 font-semibold tracking-wider text-center text-sm'>
                Minhas responsabilidades e atuações diárias na CataCompany:
              </span>

              <div className='flex flex-col gap-y-2 text-sm tracking-tight'>
                <p>
                  <strong>
                    Minhas Funções e Responsabilidades na CataCompany
                  </strong>
                </p>

                <p>
                  <span>
                    <strong>Desenvolvimento back-end</strong>
                  </span>
                  , com atuação cotidiana em <strong>DevOps</strong> e{' '}
                  <strong>front-end</strong>. Lido diariamente com{' '}
                  <strong>C#</strong>, <strong>ReactJS</strong>,{' '}
                  <strong>TypeScript</strong>,{' '}
                  <strong>bancos de dados relacionais e não relacionais</strong>
                  , <strong>AWS</strong>, <strong>Docker</strong>,{' '}
                  <strong>Azure</strong> e <strong>GitHub</strong>. Também estou
                  envolvido na gestão de riscos e na integração de novos
                  produtos.
                </p>

                <CollapsibleItem
                  title='Responsabilidades'
                  borderColor='border-red-500'
                >
                  <>
                    <li>Criação e manutenção de APIs e serviços com C#.</li>
                    <li>
                      Desenvolvimento de interfaces de usuário com ReactJS e
                      TypeScript.
                    </li>
                    <li>
                      Configuração e gerenciamento de ambientes na AWS, Docker e
                      Azure.
                    </li>
                    <li>Gerenciamento de bancos de dados SQL e NoSQL.</li>
                    <li>
                      Controle de versões e documentação de projetos com GitHub
                      e Azure.
                    </li>
                    <li>
                      Identificação e mitigação de riscos para novos produtos.
                    </li>
                    <li>
                      Participação em reuniões estratégicas sobre novos produtos
                      e integrações.
                    </li>
                  </>
                </CollapsibleItem>

                <CollapsibleItem
                  title='Principais Realizações em um ano de empresa'
                  borderColor='border-blue-500'
                >
                  <>
                    <li>
                      <strong>CataPay</strong>: Desenvolvimento de um módulo de
                      autopagamento em cédulas e moedas integrado com
                      validadores da
                      <a
                        href='https://www.innovative-technology.com/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-blue-500 font-semibold hover:underline ml-2 md:mt-0 mb-2 md:mb-0'
                      >
                        <div className='inline-flex items-center'>
                          Innovative Technology
                          <BiLinkExternal className='ml-2' />
                        </div>
                      </a>
                      , com possibilidade de integração em self-checkouts.
                    </li>
                    <li>
                      <strong>CataCash Fit</strong>: Criação de um cofre de
                      baixo custo com aplicativo Android para uso e
                      gerenciamento via CataCloud, permitindo monitoramento
                      remoto de todas as movimentações.
                    </li>
                    <li>
                      <em>
                        Matéria no <strong>Tech SC</strong> sobre o CataCash
                        Fit:
                      </em>
                      <a
                        href='https://globoplay.globo.com/v/12144484/'
                        target='_blank'
                        rel='noreferrer'
                        className='text-blue-500 font-semibold hover:underline ml-2 md:mt-0 mb-2 md:mb-0'
                      >
                        <div className='inline-flex items-center'>
                          Link para a matéria
                          <BiLinkExternal className='ml-2' />
                        </div>
                      </a>
                    </li>
                    <li>
                      <strong>CataCash Multi</strong>: Desenvolvimento de novas
                      atualizações para um cofre robusto com tela integrada e
                      software embarcado.
                    </li>
                    <li>
                      <strong>CataMoeda</strong>: Manutenção de uma solução para
                      a falta de troco no setor varejista, melhorando o fluxo de
                      moedas e receitas para os clientes finais.
                      <span className='text-whiteAlpha-600 tracking-tight text-sm'>
                        {' '}
                        Há diversas matérias sobre o CataMoeda na internet.
                      </span>
                    </li>
                    <li>
                      <strong>
                        Desenvolvimento do site oficial da empresa.
                      </strong>
                    </li>
                    <li>
                      <strong>CataLeads</strong>: Desenvolvimento de um software
                      de gestão de leads integrado com os dados da Receita
                      Federal para buscar potenciais clientes para a empresa.
                    </li>
                    <li>
                      <strong>CataCloud</strong>: Desenvolvimento de um site de
                      gestão de produtos para clientes, com informações
                      detalhadas sobre operações e transações.
                    </li>
                  </>
                </CollapsibleItem>

                <CollapsibleItem
                  title='Principais tecnologias e ferramentas'
                  borderColor='border-yellow-500'
                >
                  <>
                    <li>
                      <strong>C#</strong>, <strong>ReactJS</strong>,{' '}
                      <strong>TypeScript</strong>
                    </li>
                    <li>
                      <strong>AWS</strong>, <strong>Azure</strong>
                    </li>
                    <li>
                      <strong>Docker</strong>
                    </li>
                    <li>
                      <strong>GitHub</strong>
                    </li>
                    <li>
                      <strong>SQL</strong>, <strong>NoSQL</strong>
                    </li>
                  </>
                </CollapsibleItem>

                <CollapsibleItem
                  title='Habilidades Adicionais'
                  borderColor='border-green-500'
                >
                  <>
                    <li>Gestão de projetos com prazos definidos.</li>
                    <li>Trabalho colaborativo.</li>
                    <li>
                      Excelentes habilidades de comunicação para facilitar a
                      colaboração entre departamentos.
                    </li>
                    <li>
                      Capacidade de trabalhar sob pressão e resolver problemas
                      rapidamente.
                    </li>
                    <li>
                      Capacidade de aprender rapidamente novas tecnologias e
                      ferramentas.
                    </li>
                  </>
                </CollapsibleItem>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='pt-10 mt-8 block'>
        <div className='py-10 text-center'>
          <section id='projects'>
            <h1 className='text-4xl items-center font-semibold md:text-6xl md:font-extralight antialiased flex justify-center gap-4'>
              <FaGraduationCap />
              PROJETOS
            </h1>
            <Projects />
          </section>
        </div>
      </div>
      <div className='pt-10 mt-8 block'>
        <div className='py-10 text-center'>
          <section id='certifications'>
            <h1 className='text-4xl font-semibold md:text-6xl md:font-extralight antialiased flex justify-center gap-4'>
              <FaGraduationCap />
              CERTIFICAÇOES
            </h1>
            <div className='block md:hidden mt-2'>
              {scrollLeft == 0 ? (
                <>
                  <h3>Arraste para o lado para ver mais</h3>
                </>
              ) : (
                <>
                  <div className='m-auto w-11/12 mt-4'>
                    <div className='h-1 bg-gray-900 rounded-full'>
                      <div
                        className='h-full bg-slate-200 rounded-full'
                        style={{ width: `${scrollLeft}%` }}
                      ></div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Courses />
          </section>
        </div>
      </div>
      <div className='flex flex-col text-center justify-center antialiased'>
        <h1 className='text-center text-gray-100 font-semibold md:text-xl text-lg'>
          particular.guilherme.martins@gmail.com
        </h1>
        <h2 className='text-lg'>
          Desenvolvido em React.JS, Webpack, PostCSS e TailwindCSS.
        </h2>
      </div>
    </div>
  );
}

const CollapsibleItem = ({
  title,
  borderColor,
  children,
}: {
  title: string;
  borderColor: string;
  children: React.ReactElement;
}): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='flex flex-col gap-y-2 text-sm tracking-tight'>
      <button
        className={twMerge(
          'flex flex-row items-center rounded-sm w-full justify-between text-base text-start',
        )}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        <strong>• {title}:</strong>
        <BiChevronDown
          size={24}
          className={twMerge('transition-all', isOpen && 'rotate-180')}
        />
      </button>
      <ul
        className={twMerge(
          'flex flex-col gap-y-2 border-l-2 pl-4 scale-y-0 h-0 origin-top transform transition-all duration-500 ease-in-out overflow-hidden',
          isOpen && 'scale-y-100 h-auto',
          borderColor,
        )}
      >
        {children}
      </ul>
    </div>
  );
};
