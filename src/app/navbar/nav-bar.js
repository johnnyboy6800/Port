
        'use client';


        export default function Mynavbar({onProjetosClick, onEspecialidadesClick, onHomeClick, onContactClick}) {
          
          return (
            
             <nav className=" dark:bg-neutral-900 mx-auto  w-full  fixed">
          <div className="mx-auto max-w-7xl px-2 sm:px-6  lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
               
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                </div>
                <div className=" sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a href="#" onClick={(e) => {e.preventDefault(); onHomeClick();}} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
                    <a href="#" onClick={(e) => {e.preventDefault(); onEspecialidadesClick();}} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Especialidades</a>
                    <a href="#" onClick={(e) => {e.preventDefault(); onProjetosClick();}} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projetos</a>
                    <a href="#" onClick={(e) => {e.preventDefault(); onContactClick();}} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contato</a>

                  </div>
                </div>
              </div>
           
            </div>
          </div>
        
          
        </nav>
        
        
          );
        }
        
    
