'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Mynavbar({ onProjetosClick, onEspecialidadesClick, onHomeClick, onContactClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-50 fixed top-0 w-full bg-black/10 backdrop-blur-lg border-b border-purple-300/20">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-purple-200 hover:bg-purple-300/20 focus:outline-none transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
          {/* Desktop menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onHomeClick();
                  }}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onEspecialidadesClick();
                  }}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
                >
                  Especialidades
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onProjetosClick();
                  }}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
                >
                  Projetos
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onContactClick();
                  }}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-black/90 backdrop-blur-md border-t border-purple-300/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onHomeClick();
                setIsMobileMenuOpen(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onEspecialidadesClick();
                setIsMobileMenuOpen(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
            >
              Especialidades
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onProjetosClick();
                setIsMobileMenuOpen(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
            >
              Projetos
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-semibold text-gray-200 hover:bg-purple-300/20 hover:text-purple-200 transition-colors duration-300"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}