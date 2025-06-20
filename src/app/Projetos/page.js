'use client'
import { Projeto } from "./projeto"



export default function Projetos() {
  
    return (
        <div className="min-h-screen px-4 md:px-20 py-10">
               <h2 className="pt-5 text-3xl sm:text-4xl font-semibold text-white text-center mb-6">
                Soluções <span className="text-blue-500">práticas</span> desenvolvidas com <span className="text-blue-500">tecnologias modernas</span>
                </h2>
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
                img={[
                    "projectprev.png",
                    
                ]}
                link="https://github.com/johnnyboy6800/login-e-cadastramento-de-usuario-react-nodejs"
            />
            
            <Projeto
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
            
    )
}