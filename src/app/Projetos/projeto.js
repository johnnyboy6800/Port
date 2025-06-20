

export function Projeto({ titulo, descricao, tecnologias, funcionalidades, link, img }) {
    
    
  return (
    <div  className="py-10">
      <h2 className="text-3xl font-light font-mono dark:text-gray-100">{titulo}</h2>
      <p className="text-lg font-light font-mono dark:text-gray-300 pt-5">{descricao}</p>
      {/* Lista de tecnologias */}
      <ul className="text-lg font-light font-mono dark:text-gray-300 pt-5">
        {tecnologias.map((item, index) => <li key={index} className="pt-3">{item}</li>)}
      </ul>
      {/* Lista de funcionalidades */}
      {funcionalidades?.length > 0 && (
        <>
          <h3 className="text-2xl font-light font-mono dark:text-gray-100 pt-5">Funcionalidades implementadas</h3>
          <ul className="text-lg font-light font-mono dark:text-gray-300 pt-5">
            {funcionalidades.map((item, index) => <li key={index} className="pt-3">{item}</li>)}
          </ul>
        </>
      )}
      {img?.length > 0 && (
        <>
        {img.map((item, index) => <img key={index} src={item} className="rounded-lg shadow-lg mt-4 w-150 
             transform transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-2xl"></img>)}
        </>
      )}
      {/* Link para o GitHub */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="pt-5 inline-flex items-center gap-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
      >
        {/* Ícone SVG aqui */}
        {/* Ícone GitHub */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.85c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      </a>
    </div>
  );
}
