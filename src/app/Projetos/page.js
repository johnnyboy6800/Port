'use client'
import { useState } from "react"
import { Projeto } from "./projeto"

export default function Projetos() {

    return (
        <div >
            <div className=" min-h-screen px-4 md:px-20 py-10 m-4 mx-15 my-15  bg-neutral-900 rounded-2xl shadow-lg"> 
               <h2 className="pt-5 text-3xl sm:text-4xl font-semibold text-white text-center mb-6">
                Soluções <span className="text-green-500">práticas</span> desenvolvidas com <span className="text-green-500">tecnologias modernas</span>
                </h2>
                <div className="grid grid-cols-1 p-3 lg:flex-row lg:pr-5 pb-5 gap-4">
                <div className="pb-5 pr-5  pt-30">
                <Projeto 
                titulo="💻 Sistema de Login e Cadastro de Usuários"
                descricao="Site completo com autenticação, permitindo cadastro, login, logout e controle de sessões. Interface moderna e responsiva com segurança básica."
                tecnologias={[
                    "React (Front-end)",
                    "Node.js, Express.js (Back-end)",
                    "JavaScript",
                    "MySQL"
                ]}
                img = {[
                    "projectprev.png",]}
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
              
              <div className="justify-center relative z-10 pt-30">
            <Projeto
                id= "java-project"
                img={["javaapi.png"]}
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
            
            </div>  

            </div>
            </div>
            </div>
            <div>
            </div>
            </div>
            
    )
}