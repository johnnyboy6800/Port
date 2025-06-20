import {FaWhatsapp} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';



export default function Contact() {
    return (
        <div className="dark:bg-neutral-900 md:flex-row items-center justify-between px-4 md:px-20 py-10 gap-8">
            <h1 className="text-3xl font-bold font-sans dark:text-gray-100 ">Vamos <span className="dark:text-blue-500">Conversar</span></h1>
            <a
            href="https://wa.me/5583988577262"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-5 pb-5 flex items-center gap-2 text-green-500 hover:text-green-600 transition"
            >
            <FaWhatsapp size={24} />
            Fale comigo no WhatsApp
            </a>
            <a
            href="https://www.linkedin.com/in/joão-lucas-434313199"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition"
            >
            <FaLinkedin size={24} />
            Meu LinkedIn
            </a>
            <a
            href="https://github.com/johnnyboy6800"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-5 flex items-center gap-2 text-gray-300 hover:text-white transition"
            >
            <FaGithub size={24} />
            Meu GitHub
            </a>
        </div>
    )
}