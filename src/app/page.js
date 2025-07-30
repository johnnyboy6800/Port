'use client';
import Especialidades from './Especialidades/page';
import Mynavbar from './navbar/nav-bar';
import Projetos from './Projetos/page';
import Contact from './Contact-me/page';
import { useRef } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaJava, FaLeaf, FaReact, FaNodeJs, FaDatabase, FaSymfony } from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';

export default function Home() {
  const introRef = useRef(null);
  const projetosRef = useRef(null);
  const especialidadesRef = useRef(null);
  const contactRef = useRef(null);

  const tecnologias = [
    { icone: <FaJava className="text-3xl text-purple-200 hover:text-purple-300 transition-colors duration-300" /> },
    { icone: <FaLeaf className="text-3xl text-purple-200 hover:text-purple-300 transition-colors duration-300" /> },
    { icone: <FaReact className="text-3xl text-purple-300 hover:text-purple-400 transition-colors duration-300" /> },
    { icone: <FaNodeJs className="text-3xl text-purple-200 hover:text-purple-300 transition-colors duration-300" /> },
    { icone: <FaDatabase className="text-3xl text-gray-200 hover:text-gray-100 transition-colors duration-300" /> },
    { icone: <SiPhp className="text-3xl text-purple-300 hover:text-purple-400 transition-colors duration-300" /> },
    { icone: <FaSymfony className="text-3xl text-gray-200 hover:text-gray-100 transition-colors duration-300" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#2D1B4E] to-[#4B3A8C]">
      <Mynavbar
        onContactClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onHomeClick={() => introRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onProjetosClick={() => projetosRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onEspecialidadesClick={() => especialidadesRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <section ref={introRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-black/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl border border-purple-300/20 hover:shadow-purple-300/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="text-center md:text-left max-w-xl w-full">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-100">
                João Lucas
              </h1>
              <div className="flex justify-center md:justify-start text-center mt-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-purple-200">Software </h1>
                <h1 className="ml-2 sm:ml-4 text-4xl sm:text-5xl font-bold text-gray-100">Engineer</h1>
              </div>
              <p className="mt-6 text-lg font-light font-mono text-gray-200">
                Olá! Meu nome é João Lucas, tenho 21 anos e sou um apaixonado por tecnologia e soluções inovadoras. 
                Atualmente, estou cursando Engenharia de Software (4º período) e mergulhando cada vez mais no universo 
                da programação, desenvolvimento de software e arquitetura de sistemas.
              </p>
              <p className="mt-4 text-lg font-light font-mono text-gray-200">
                Além da graduação, estou sempre buscando desafios que me permitam expandir meus conhecimentos—seja 
                através de projetos pessoais. Acredito que a tecnologia tem o poder de transformar ideias em realidade, 
                e é isso que me motiva a criar soluções eficientes e impactantes.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                {tecnologias.map((tecnologia, index) => (
                  <div key={index} className="text-purple-200">
                    {tecnologia.icone}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[280px] mx-auto md:mx-0 text-center md:text-left">
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-purple-300/30 shadow-xl hover:shadow-purple-300/30 transition-all duration-300">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  src="/Port/WhatsApp%20Image%202024-11-15%20at%2018.59.28.jpeg"
                  alt="João Lucas Profile"
                />
              </div>
              <div className="mt-4 space-y-3 w-full max-w-[200px] mx-auto md:max-w-none">
                <a
                  href="https://wa.me/5583988577262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-purple-200 hover:text-purple-300 transition-colors duration-300 text-sm truncate"
                >
                  <FaWhatsapp size={20} />
                  Fale comigo no WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/joão-lucas-434313199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-purple-200 hover:text-purple-300 transition-colors duration-300 text-sm truncate"
                >
                  <FaLinkedin size={20} />
                  Meu LinkedIn
                </a>
                <a
                  href="https://github.com/johnnyboy6800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-gray-100 transition-colors duration-300 text-sm truncate"
                >
                  <FaGithub size={20} />
                  Meu GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-black/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl border border-purple-300/20 hover:shadow-purple-300/30 transition-all duration-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-6">Um pouco sobre mim</h2>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Objetivos</h3>
            <p className="text-lg font-light font-mono text-gray-200">
              Possuo como objetivo atual ingressar no mercado de trabalho e me desenvolver o suficiente 
              para me tornar um bom programador.
            </p>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-6">🎮 Hobbies</h3>
            <p className="text-lg font-light font-mono text-gray-200">
              📚 <span className="font-medium">Ler</span><br />
              Livros de ficção, tecnologia e filosofia.<br /><br />
              🎬 <span className="font-medium">Assistir filmes</span><br />
              Desde clássicos do cinema até blockbusters.<br /><br />
              🕹️ <span className="font-medium">Jogar videogame</span><br />
              Principalmente jogos de estratégia e narrativos.<br /><br />
              <span className="italic">&quot;Esses hobbies me ajudam a pensar de forma criativa e a resolver problemas de maneiras diferentes.&quot;</span>
            </p>
          </div>
        </div>
      </section>
      <section ref={especialidadesRef}>
        <Especialidades />
      </section>
      <section ref={projetosRef}>
        <Projetos />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}