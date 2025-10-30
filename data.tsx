import { BookText, HomeIcon, UserRound, Rocket } from "lucide-react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export const userName = [
  {
    userName: 'Joao Barres',
    email: 'joao1.joao3@gmail.com',
    dev: 'Desarrollador Web / Junior'
  }
]

export const socialMedia = [
  {
    id: 1,
    social: 'Linkedin',
    icon: <FaLinkedin size={18} strokeWidth={2} />,
    link: 'https://linkedin.com/in/joao-barres'
  },
  {
    id: 2,
    social: 'GitHub',
    icon: <FaGithub size={25} strokeWidth={2} />,
    link: 'https://github.com/Joaokiller360'
  }
]

export const about = [
  {
    tilte: 'Sobre mí',
    descriptions: `Soy un desarrollador web apasionado por crear soluciones innovadoras.
                Con experiencia en tecnologías frontend y backend, me encanta enfrentar
                nuevos desafíos y aprender constantemente. Mi objetivo es construir
                aplicaciones web que no solo funcionen perfectamente, sino que también
                ofrezcan una experiencia de usuario excepcional.`
  }
]

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Sobre Mi",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "#about",
  },
  {
    id: 3,
    title: "Mis Habilidades",
    icon: <Rocket size={25} color="#fff" strokeWidth={1} />,
    link: "#my-skills",
  },
  {
    id: 4,
    title: "Mis Projectos",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "#projects",
  }
];