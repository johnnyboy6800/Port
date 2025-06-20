'use client'
import { use, useRef } from "react";
import Especialidades from "./Especialidades/page";
import Mynavbar from "./navbar/nav-bar";
import Projetos from "./Projetos/page";
import Contact from "./Contact-me/page";


export default function Home() {
  
  const introRef = useRef(null)
  const projetosRef = useRef(null)
  const especialidadesRef = useRef(null)
  const contactRef = useRef(null)
  
    return (
        <div className="min-h-screen bg-white dark:bg-black">
      <Mynavbar onContactClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})} onHomeClick={() => introRef.current?.scrollIntoView({ behavior: 'smooth'})} onProjetosClick={() => projetosRef.current?.scrollIntoView({ behavior: 'smooth' })} onEspecialidadesClick={() => especialidadesRef.current?.scrollIntoView({ behavior: 'smooth'})} />  
 
  <div ref={introRef} className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-20 py-10 gap-8">
    
    <div className="text-center md:text-left max-w-2xl ">
      <h1 className="font-bold text-4xl  dark:text-gray-100">João Lucas</h1>
      <div className="flex">
      <h1 className="font-bold text-4xl dark:text-blue-500">Software </h1> <h1 className="ml-4 font-bold text-4xl dark:text-gray-100">Enginner</h1>
      </div>
      <p className="pt-15 text-lg font-light font-mono dark:text-gray-300">
        Olá! Meu nome é João Lucas, tenho 21 anos e sou um apaixonado por tecnologia e soluções inovadoras. 
        Atualmente, estou cursando Engenharia de Software (4º período) e mergulhando cada vez mais no universo 
        da programação, desenvolvimento de software e arquitetura de sistemas.
      </p>
      <p className="text-lg font-light font-mono dark:text-gray-300">
        Além da graduação, estou sempre buscando desafios que me permitam expandir meus conhecimentos—seja 
        através de projetos pessoais. Acredito que a tecnologia tem o poder de transformar ideias em realidade, 
        e é isso que me motiva a criar soluções eficientes e impactantes.
      </p>
    </div>

    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0 text-center md:text-left">
      <img 
        className="rounded-full w-64 h-64 object-cover 
            border-4 border-white shadow-xl 
            hover:scale-105 transition-transform"
        src="/WhatsApp%20Image%202024-11-15%20at%2018.59.28.jpeg"
        alt="João Lucas Profile"
      />
    </div>
  </div>

  <div className="px-4 md:px-20 py-10 max-w-4xl mx-auto text-center md:text-left">
    <div className="mb-12">
      <h1 className="text-4xl md:text-4xl font-bold mb-4 dark:text-gray-100">Um pouco sobre mim</h1>
    </div>
    
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-gray-100">Objetivos</h2>
      <p className="text-lg font-light font-mono dark:text-gray-300">
        Possuo como objetivo atual ingressar no mercado de trabalho e me desenvolver o suficiente 
        para me tornar um bom programador.
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 pt-5 dark:text-gray-100">
        🎮 Hobbies
      </h2>
      <p className="text-lg font-light font-mono dark:text-gray-300">
        📚 Ler <br/>
            Livros de ficção, tecnologia e filosofia.
            <br></br>
            🎬 Assistir filmes <br/>
            Desde clássicos do cinema até blockbusters.
            <br></br>
            🕹️ Jogar videogame <br/>
            Principalmente jogos de estratégia e narrativos.
            <br></br>
            "Esses hobbies me ajudam a pensar de forma criativa e a resolver problemas de maneiras diferentes."

      </p>
    </div>
  </div>
  <div>
    <section ref={especialidadesRef}>
      <Especialidades/>
    </section>
    <section ref={projetosRef}>
      <Projetos/>
    </section>
    <section ref={contactRef} >
     <Contact/>
    </section>
  </div>
</div>
    )
}