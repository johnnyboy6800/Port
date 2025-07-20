export default function Modal({titulo, descricao, tecnologias, funcionalidades, setViewOpen, link, img}) {
    return (
         <div className=" fixed inset-0 z-[9999] lg:w-200 flex items-center justify-center bg-gray-700">
        
          <div className="overflow-y-auto max-h-screen max-w-screen bg-gray-900 border-2 border-green-500 rounded-xl mx-auto -6 w-full overflow-hidden shadow-2xl">
            {/* Cabeçalho do Modal */}
            <div className="bg-gradient-to-r from-green-500 to-black p-4 border-b border-green-500">
                <h2 className="text-2xl font-bold text-white">{titulo}</h2>
                <button
                onClick={() => setViewOpen(false)}
                className=" top-4 right-4 text-green-400 hover:text-white"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            
            {/* Corpo do Modal */}
            <div className="z-50 p-6 text-gray-300">
                <div className="mb-6">
                <p className="text-lg">{descricao}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Seção de Tecnologias */}
                <div>
                    <h3 className="text-green-400 font-semibold text-lg mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10a1 1 0 01-1.64 0l-7-10A1 1 0 014 7h4V2a1 1 0 011.3-.954z" clipRule="evenodd" />
                    </svg>
                    Tecnologias
                  </h3>
                  <ul className="space-y-2">
                    {tecnologias?.map((tech, index) => (
                    <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {tech}
                    </li>
                    ))}
                  </ul>
                </div>
                
                {/* Seção de Funcionalidades */}
                <div>
                    <h3 className="text-green-400 font-semibold text-lg mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Funcionalidades
                  </h3>
                    <ul className="space-y-2">
                    {funcionalidades?.map((func, index) => (
                    <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {func}
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Link do Projeto */}
              {link && (
                <div className="mt-8 pt-4 border-t border-gray-800">
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    Acessar Projeto
                  </a>
                </div>
              )}
            </div>
            
            {/* Rodapé do Modal */}
            <div className=" bg-gradient-to-r from-black to-green-900 p-3 border-t border-green-500 text-center">
              <button
                onClick={() => setViewOpen(false)}
                className="text-white hover:text-green-300 transition-colors "
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
    )
}