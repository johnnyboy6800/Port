import { useState } from "react";
import Modal from "./modal";

export function Projeto({ titulo, descricao, tecnologias, funcionalidades, link, img }) {
     
    
  return (
    <>
     <div >
      {/* Card do Projeto */}
      <div className="relative box-border size-50 h-80 rounded-2xl border-4 border-blue-500 p-4 bg-black bg-opacity-80 backdrop-blur-sm">
        <div>
          <h1 className="text-white text-xl font-bold">{titulo}</h1>
        </div>
        <div>
          <h3 className="pt-5 text-gray-300">{descricao}</h3>
        </div>
      </div>
    </div>
    </>
  
  );
}
