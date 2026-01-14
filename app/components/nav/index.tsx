'use client'

import { ButtonNav } from "@/app/utils/index";
import { itemsNavbar } from "@/data";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  // Si estás en la página "/components", el nav no se muestra
  if (pathname === "/components") return null;

  return (
    <nav className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
      <div className="flex items-center justify-center gap-1 md:gap-2 px-3 py-2 rounded-full bg-white/15 backdrop-blur-sm">
        {itemsNavbar.map((item) => (
          <div
            key={item.id}
            className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-(--colorButton)"
          >
            <ButtonNav hrf={item.link} text={`${item.title}`} icon={item.icon} />
          </div>
        ))}
      </div>
    </nav>
  );
}
