'use client';
import { useState } from 'react';
import Projeto from './projeto';
import { FaJava, FaLeaf, FaDatabase, FaFileCode, FaReact, FaNodeJs, FaJsSquare, FaPhp, FaLaravel } from 'react-icons/fa';

export default function Projetos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#2D1B4E] to-[#4B3A8C] py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 text-center mb-12">
        Soluções <span className="text-purple-200">práticas</span> desenvolvidas com{' '}
        <span className="text-purple-200">tecnologias modernas</span>
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Projeto
            titulo="💻 Sistema de Login e Cadastro de Usuários"
            descricao="Site completo com autenticação, permitindo cadastro, login, logout e controle de sessões. Interface moderna e responsiva com segurança básica."
            tecnologias={[
              { icone: <FaReact className="text-2xl text-purple-200 hover:text-purple-300 transition-colors duration-300" /> },
              { icone: <FaNodeJs className="text-2xl text-purple-200 hover:text-purple-300 transition-colors duration-300" /> },
              { icone: <FaJsSquare className="text-2xl text-gray-200 hover:text-gray-100 transition-colors duration-300" /> },
              { icone: <FaDatabase className="text-2xl text-gray-200 hover:text-gray-100 transition-colors duration-300" /> }
            ]}
            img={['projectprev.png']}
            funcionalidades={[
              'Cadastro de novos usuários com validação de dados',
              'Login com verificação de credenciais no banco de dados',
              'Armazenamento seguro de senhas (com hash)',
              'Persistência de sessões (JWT)',
              'Redirecionamento com base na autenticação',
              'Feedback visual no front-end'
            ]}
            link="https://github.com/johnnyboy6800/login-e-cadastramento-de-usuario-react-nodejs"
          />
        </div>
        <div>
          <Projeto
            id="java-project"
            img={['javaapi.png']}
            titulo="🔧 API CRUD - Sistema de Gerenciamento de blogs"
            descricao="API completa com interface web para operações CRUD de blogs, usando Java moderno, Spring Boot e PostgreSQL."
            tecnologias={[
              { icone: <FaJava className="text-2xl text-purple-200 hover:text-purple-300 transition-colors duration-300" /> },
              { icone: <FaLeaf className="text-2xl text-purple-200 hover:text-purple-300 transition-colors duration-300" /> },
              { icone: <FaDatabase className="text-2xl text-gray-200 hover:text-gray-100 transition-colors duration-300" /> },
              { icone: <FaFileCode className="text-2xl text-gray-200 hover:text-gray-100 transition-colors duration-300" /> }
            ]}
            funcionalidades={[
              'Criação e gerenciamento de blogs com título, texto e data',
              'Visualização via front-end com Thymeleaf'
            ]}
            link="https://github.com/johnnyboy6800/BlogWebsite-java-spring-API-crud-"
          />
        </div>
        <div>
          <Projeto
          id = "Laravel-project"
          titulo="API CRUD - Sistema de gerenciamento de blogs e usuários"
          tecnologias={[
            {icone : <FaPhp className="text-2xl text-purple-200 hover:text-purple-300 transition-colors duration-300"/>},
            {icone: <FaLaravel className="text-2xl text-purple-200 hover:text-purple-300 transition-colors duration-300"/>},
            { icone: <FaDatabase className="text-2xl text-gray-200 hover:text-gray-100 transition-colors duration-300" /> }

          ]}
          descricao="API CRUD escrita em php utilizando o framework laravel e o banco de dados postgresql."
          funcionalidades={[
            "Criação, remoção e atualização de posts",
            "Cadastro, login e gerenciamento de usuários e seus respectivos posts"
          ]}
          link="https://github.com/johnnyboy6800/laravel-blog-api"
          />
        </div>
      </div>
    </div>
  );
}