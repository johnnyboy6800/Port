import { useState } from "react";

export function Projeto({ titulo, descricao, tecnologias, funcionalidades, link, img }) {
     
    
  return (
    <>
      {/* Card do Projeto */}
    <div className="text-center justify-center pd-5 flex relative box-border size-50 h-100 sm:h-fit w-fit sm:w-full  rounded-2xl    p-4 ">
        <div>
          <h1 className="text-white text-center text-4xl font-bold">{titulo}</h1>
          <ul className="list-disc list-inside w-fit  text-gray-300 flex pt-10">
            {tecnologias.map((tech, index) => (
              <ul key={index} className=" ml-10 w-fit h-fit p-5  font-light font-mono border-2 rounded-full">{tech}</ul>
            ))}
          </ul>
            <div className="grid items-end text-2xl">
            <h3 className="pt-5 text-gray-300 w-fit">Descrição: <br></br> {descricao}</h3>
          
           <span className="text-gray-300 pt-5">Funcionalidades:</span>
          <ul className="list-disc list-inside text-gray-300">
            {funcionalidades.map((func, index) => (
              <li key={index} className="text-lg font-light font-mono">{func}</li>
            ))}
          </ul>
        </div>
        </div>
        <div className="pt-10 pb-10 grid   ">
          <img src={img} className="w-250 h-100 p-4 rounded-4xl"/>
          </div>
    </div>
    </>
  
  );
}
