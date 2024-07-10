import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function AboutMe(): React.ReactElement {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className='pt-10'>
      <h1 className='font-semibold text-xl text-whiteAlpha-800 antialiased'>
        Sobre mim
      </h1>
      <p className='text-gray-100 overflow-clip w-full text-sm pl-2 border-l-2 border-slate-600 container tracking-wider'>
        <p>
          Meu nome é Guilherme, tenho 22 anos e estou cursando{' '}
          <strong>
            Análise e Desenvolvimento de Sistemas no Instituto Federal de Santa
            Catarina (IFSC).
          </strong>
        </p>
        <p
          className={twMerge(
            'text-whiteAlpha-900 origin-top transform transition-all -scale-y-100 h-0 overflow-hidden',
            viewMore && 'scale-y-100 h-auto',
          )}
        >
          Inspirado pelo meu falecido pai, também desenvolvedor, comecei minha
          trajetória na programação aos 12 anos, lendo livros sobre Java para
          criar mods para meu jogo favorito da época, Minecraft. Naquela época,
          eu não fazia ideia do impacto que isso teria na minha vida. Aprendi
          tudo movido pela paixão{' '}
          <span className='text-whiteAlpha-700 text-sm'>
            (e, admito, um pouco de frustração, pois o início foi desafiador)
          </span>
          . No entanto, a satisfação de ver meus sistemas funcionando era{' '}
          <strong>incomparável</strong>. Com o tempo, me aprofundei em outras
          linguagens e tecnologias pelo mesmo motivo. Aprendi{' '}
          <strong>C++, MySQL, SQLite e PHP</strong> motivado por um antigo jogo
          chamado Tibia. A paixão pelo desenvolvimento sempre me guiou. Ao me
          interessar mais pelo assunto, descobri o que realmente significava ser
          um desenvolvedor de software – e decidi que era isso que eu queria
          ser. Aos 15 anos, desenvolvi jogos que acumularam mais de{' '}
          <strong>200 mil visualizações</strong> no YouTube, uma confirmação de
          que eu estava no caminho certo. A aceitação e o entusiasmo das pessoas
          pelo meu trabalho me motivaram a continuar. Tudo fluiu de maneira
          natural e fui me aprofundando cada vez mais. Atualmente, tenho uma
          matéria publicada no{' '}
          <a
            href='https://globoplay.globo.com/v/12144484/'
            rel='noreferrer'
            target='_blank'
          >
            Tech SC (Globo)
          </a>{' '}
          com a participação do Rubens Carbonari, Diretor Regional da Prosegur,
          sobre um produto que desenvolvi, o <strong>CataCash Fit</strong>, um
          cofre baixo-custo com muita tecnologia embarcada, e construí um vasto
          networking com pessoas que conheci ao longo da minha jornada,
          participando de eventos e em pequenas comunidades tech. Minha maior
          motivação é a paixão pelo desenvolvimento e a vontade de fazer a
          diferença. <strong>Pai, eu te amo. Obrigado por tudo.</strong>
        </p>
        <button
          onClick={() => setViewMore(!viewMore)}
          className='text-blue-600 font-semibold hover:underline'
        >
          {viewMore ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      </p>
    </div>
  );
}
