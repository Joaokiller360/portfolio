import { BookText, HomeIcon, UserRound, Rocket } from "lucide-react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiWordpress, SiStrapi, SiFramer } from 'react-icons/si';

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

export const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Wordpress", icon: <SiWordpress /> },
  { name: 'Strapi', icon: <SiStrapi /> },
  { name: 'Framer', icon: <SiFramer /> },
];

export const projects = [
  {
    title: "JB OCESE",
    description: "Una web moderna creada para una empresa.",
    tag: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
    hrfCode: `#projects`,
    hrfDemo: `https://jbocese.com`,
    imageUrl: "/mockup/mokaps-jb-ocese.png",
    imageAlt: "A descriptive image for the button",
  },
  {
    title: "Jack Burger",
    description: "Plataforma de menú para un pequeño local.",
    tag: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Strapi", icon: <SiStrapi /> },
    ],
    hrfCode: `#projects`,
    hrfDemo: `https://jack-burger.vercel.app`,
    imageUrl: "/mockup/mockup-jack-burger.png",
    imageAlt: "A descriptive image for the button",
  },
  {
    title: "Portafolio Para La comunidad",
    description: "Este es un pequeño portafolio que puedes agarrar como inspiracion.",
    tag: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
    hrfCode: `https://github.com/Joaokiller360/protfolio-comunidad`,
    hrfDemo: `https://github.com/Joaokiller360/protfolio-comunidad`,
    imageUrl: "/mockup/mockup-portfolio.png",
    imageAlt: "A descriptive image for the button",
  }
];