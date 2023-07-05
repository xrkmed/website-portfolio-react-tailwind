import { useState } from "react";
export default function AboutMe(){
    const [viewMore, setViewMore] = useState(false);

    return (<>
        <h1 className="font-bold pt-10 text-xl text-[#e2e8f0] antialiased">
            Sobre mim
        </h1>
        <p className="text-gray-100 overflow-clip max-w-md min-w-min pl-2 border-l-2 border-slate-600 container">
            <p>Meu nome é Guilherme, tenho 20 anos e sou estudante de <strong>Ciência da Computação na Universidade do Sul de Santa Catarina</strong>. Atualmente, estou focado na área de desenvolvimento backend, mas também tenho interesse em desenvolvimento mobile e web.</p>
            {
                viewMore ?
                <><p className="text-[rgb(55,89,136)]">[+] <strong>Mas a minha história começou muito antes</strong>, com apenas 12 anos, explorando possibilidades em alguns jogos como Minecraft e Tibia, adquirindo um vasto conhecimento de Programação Orientada a Objetos e me apaixonando cada vez mais por programar e vendo um mar de possibilidades inexploradas.
                Após alguns anos, mexi também com Desenvolvimento Web para expor de maneira pública os meus pequenos projetos para uma comunidade que eu encontrei no meio deste longo percurso.
                Desenvolvi de maneira autônoma e autodidata projetos que contam com mais de 30 mil visualizações no YouTube.
                Atualmente, as ferramentas e linguagens que possuo conhecimento são HTML, CSS, JavaScript, NodeJS, ReactJS, Java, C#, C++, Lua, PHP, Spring, Apache Maven, Postman, MySQL, PostgreSQL, Oracle e GIT.</p>
                
                </> : <></>
            }
            <button onClick={() => setViewMore(!viewMore)} className="text-blue-600 font-semibold hover:underline">{ viewMore ? "Mostrar menos" : "Mostrar mais"}</button>
            <p>Vamos conversar?</p>

        </p>
    </>)
}