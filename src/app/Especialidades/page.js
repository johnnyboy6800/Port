'use client';
import { FaJava, FaLeaf, FaDatabase, FaFileCode, FaReact, FaNodeJs, FaJsSquare, FaLock, FaGitAlt, FaMobileAlt } from 'react-icons/fa';

export default function Especialidades() {
  const especialidades = [
    {
      titulo: 'Desenvolvimento Web',
      descricao: 'Criação de interfaces modernas com React e integração com APIs.',
      icone: <FaReact className="text-5xl mb-4 mx-auto text-purple-300" />,
    },
    {
      titulo: 'Back-end com Node.js',
      descricao: 'Desenvolvimento de APIs RESTful seguras e eficientes com Express.',
      icone: <FaNodeJs className="text-5xl mb-4 mx-auto text-purple-200" />,
    },
    {
      titulo: 'Banco de Dados',
      descricao: 'Modelagem e gerenciamento de dados com MySQL.',
      icone: <FaDatabase className="text-5xl mb-4 mx-auto text-gray-300" />,
    },
    {
      titulo: 'Autenticação JWT',
      descricao: 'Implementação de login seguro com tokens e criptografia de senhas.',
      icone: <FaLock className="text-5xl mb-4 mx-auto text-purple-200" />,
    },
    {
      titulo: 'Versionamento com Git',
      descricao: 'Controle de versões com Git e GitHub, seguindo boas práticas.',
      icone: <FaGitAlt className="text-5xl mb-4 mx-auto text-gray-300" />,
    },
    {
      titulo: 'Design Responsivo',
      descricao: 'Páginas que se adaptam perfeitamente a diferentes dispositivos.',
      icone: <FaMobileAlt className="text-5xl mb-4 mx-auto text-purple-300" />,
    },
    {
      titulo: 'Java & Spring Boot',
      descricao: 'Desenvolvimento de aplicações web robustas com Java e o framework Spring Boot.',
      icone: <FaJava className="text-5xl mb-4 mx-auto text-purple-200" />,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2D1B4E] via-[#4B3A8C] to-[#5B3A8C] rounded-2xl m-4 shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-100">
        Minhas <span className="text-purple-200">Especialidades</span> e{' '}
        <span className="text-purple-200">Tecnologias</span>
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {especialidades.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-purple-300/20 hover:shadow-purple-300/30 hover:-translate-y-1 transition-all duration-300"
          >
            {item.icone}
            <h3 className="text-xl font-semibold text-center text-gray-100">{item.titulo}</h3>
            <p className="mt-2 text-center text-gray-200 font-light font-mono text-sm">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}