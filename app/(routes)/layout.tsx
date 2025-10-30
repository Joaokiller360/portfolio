import { ButtonC, TitleProject, ButtonNavComponents } from '@/app/utils'

interface LayoutProps {
  children: React.ReactNode;
}

import { BookText, HomeIcon, UserRound, Rocket, Factory } from "lucide-react";

const itemsNavbar = [
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

export default function LayoutComponents({ children }: LayoutProps) {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r-2 border-white bg-background transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <ul className="space-y-2 tracking-wide mt-8">
            {itemsNavbar.map((item) => (

              <ButtonNavComponents style='cursor-pointer hover:text-gray-400' key={item.id} hrf={item.link} text={item.title} icon={item.icon} />

            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-center items-center border-t-2 border-white">
          <ButtonC text='Volver a inicio' hrf='/' style='w-full' />
        </div>
      </aside>

      <TitleProject style='py-5 text-xl flex justify-center' title='Bienvenido a la pagina de todos los componentes' children />
      <div className="bg-background ml-0 md:ml-[25%] lg:ml-[25%] xl:ml-[20%] 2xl:ml-[15%]">
        {children}
      </div>

    </>
  )
}
