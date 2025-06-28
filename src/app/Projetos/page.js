'use client'
import { useState } from "react"
import { Projeto } from "./projeto"
import Modal from "./modal"


export default function Projetos() {
   const [isView, setViewOpen] = useState(false)
    const [modalcontent, setmodalcontent] = useState(false)
    return (
        <div >
            <div className=" min-h-screen px-4 md:px-20 py-10">
               <h2 className="pt-5 text-3xl sm:text-4xl font-semibold text-white text-center mb-6">
                Soluções <span className="text-blue-500">práticas</span> desenvolvidas com <span className="text-blue-500">tecnologias modernas</span>
                </h2>
                <div className="flex flex-col p-3 lg:flex-row lg:pr-5 pb-5 ">
                <div className="relative transition pb-5 pr-5 delay-100 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 ">
                <Projeto 
                titulo="💻 Sistema de Login e Cadastro de Usuários"
                descricao="Site completo com autenticação, permitindo cadastro, login, logout e controle de sessões. Interface moderna e responsiva com segurança básica."
                tecnologias={[
                    "React (Front-end)",
                    "Node.js, Express.js (Back-end)",
                    "JavaScript",
                    "MySQL"
                ]}
                funcionalidades={[
                    "Cadastro de novos usuários com validação de dados",
                    "Login com verificação de credenciais no banco de dados",
                    "Armazenamento seguro de senhas (com hash)",
                    "Persistência de sessões (JWT)",
                    "Redirecionamento com base na autenticação",
                    "Feedback visual no front-end"
                ]}
                link="https://github.com/johnnyboy6800/login-e-cadastramento-de-usuario-react-nodejs"
                
            />
              <button 
                      onClick={() => { setmodalcontent({
                        titulo: "💻 Sistema de Login e Cadastro de Usuários",
                        descricao:"Site completo com autenticação, permitindo cadastro, login, logout e controle de sessões. Interface moderna e responsiva com segurança básica.",
                        tecnologias:[
                            "React (Front-end)",
                            "Node.js, Express.js (Back-end)",
                            "JavaScript",
                            "MySQL"
                        ],
                        funcionalidades:[
                            "Cadastro de novos usuários com validação de dados",
                            "Login com verificação de credenciais no banco de dados",
                            "Armazenamento seguro de senhas (com hash)",
                            "Persistência de sessões (JWT)",
                            "Redirecionamento com base na autenticação",
                            "Feedback visual no front-end"
                        ],
                        img:[
                            "projectprev.png",
                            
                        ],
                        link:"https://github.com/johnnyboy6800/login-e-cadastramento-de-usuario-react-nodejs"
                      }), setViewOpen(true);}}
                      className=" mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Expandir
                    </button>
            
            </div>
            
            <div className="relative z-10 transition delay-100 duration-300 hover:translate-y-1 hover:scale-110 ">
            <Projeto
                id= "java-project"
                titulo="🔧 API CRUD - Sistema de Gerenciamento"
                descricao="API completa com interface web para operações CRUD de blogs, usando Java moderno, Spring Boot e PostgreSQL."
                tecnologias={[
                    "Java 17",
                    "Spring Boot 3",
                    "PostgreSQL",
                    "Thymeleaf"
                ]}
                funcionalidades={[
                    'Criação e gerenciamento de blogs com título, texto e data',
                    'Visualização via front-end com Thymeleaf'
                ]}
                link="https://github.com/johnnyboy6800/BlogWebsite-java-spring-API-crud-"
            />
              <button 
                      onClick={() => { setmodalcontent({
                    titulo:"🔧 API CRUD - Sistema de Gerenciamento",
                descricao:"API completa com interface web para operações CRUD de blogs, usando Java moderno, Spring Boot e PostgreSQL.",
                tecnologias:[
                    "Java 17",
                    "Spring Boot 3",
                    "PostgreSQL",
                    "Thymeleaf"
                ],
                funcionalidades:[
                    'Criação e gerenciamento de blogs com título, texto e data',
                    'Visualização via front-end com Thymeleaf'
                ],
                link:"https://github.com/johnnyboy6800/BlogWebsite-java-spring-API-crud-"
                      }), setViewOpen(true);}}
                      className=" mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Expandir
                    </button>
            </div>  
            </div>
            </div>
            <div>
            </div>
              {/* Modal Estilizado */}
      {isView && (
       <Modal
       titulo= {modalcontent.titulo}
       descricao = {modalcontent.descricao}
       tecnologias = {modalcontent.tecnologias}
       funcionalidades = {modalcontent.funcionalidades}
       link = {modalcontent.link}
       img = {modalcontent.img}
       setViewOpen={setViewOpen}
       />
      )}
            </div>
            
    )
}