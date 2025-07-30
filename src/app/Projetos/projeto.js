import { FaJava, FaLeaf, FaDatabase, FaFileCode, FaReact, FaNodeJs, FaJsSquare } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Projeto({ id, img, titulo, descricao, tecnologias, funcionalidades, link }) {
  return (
    <div className="relative bg-black/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-purple-300/20 hover:shadow-purple-300/30 hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-100 mb-2">{titulo}</h3>
      <p className="text-gray-200 text-sm mb-4">{descricao}</p>
      <div className="flex gap-4 mb-4">
        {tecnologias.map((tecnologia, index) => (
          <div key={index} className="text-purple-200 text-2xl hover:text-purple-300 transition-colors duration-300">
            {tecnologia.icone}
          </div>
        ))}
      </div>
      <ul className="text-gray-200 text-sm mb-4 space-y-2">
        {funcionalidades.map((funcionalidade, index) => (
          <li key={index} className="flex items-start">
            <span className="text-purple-200 mr-2">•</span>
            {funcionalidade}
          </li>
        ))}
      </ul>
      {link && (
        <Link
          href={link}
          target="_blank"
          className="inline-block px-4 py-2 bg-black/20 border border-purple-300/30 text-purple-200 rounded-lg hover:bg-purple-300/20 hover:text-purple-300 transition-colors duration-300"
        >
          Ver no GitHub
        </Link>
      )}
    </div>
  );
}