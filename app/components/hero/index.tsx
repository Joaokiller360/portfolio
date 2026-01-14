'use client'

import { ScrollRevealEffect, ButtonC, ScrollRevealRightEffect, SocialMedia, Email } from "@/app/utils";
import { Image } from "@heroui/react";
import { useEffect, useState } from "react";
import { UserName, fetchUserName } from '@/api/getUserName'

export default function Hero() {

  const [userName, setUserName] = useState<UserName[]>([]);

  useEffect(() => {
    fetchUserName().then(setUserName);
  }, []);

  return (
    <>
      <section className="w-full h-dvh flex items-center justify-center text-center from-secondary to-background relative">
        <div className="fade-in max-w-4xl">
          <ScrollRevealEffect>
            {userName.map(({ dev, id, userName, email }) => (
              <div key={id}>
                <h1 className="text-5xl font-bold mb-4 gradient-text">
                  Hola, soy {userName} 👋
                </h1>
                <p className="text-xl mb-4 text-muted-foreground">
                  {dev}
                </p>

                <Email text={`${email}`} />
              </div>
            ))}
            <SocialMedia />

          </ScrollRevealEffect>
          <ScrollRevealEffect>
            <div className="pt-5 flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <ButtonC hrf="#projects" text="Ver mis proyectos" />
                <ButtonC hrf="./curriculum/cv.pdf" text="Descargar CV" download />
              </div>
            </div>

          </ScrollRevealEffect>
        </div>
      </section>
      <ScrollRevealRightEffect>
        <div className="absolute bottom-0 left-0 sm:w-80 w-40 h-auto">
          <Image src="/media/joaoDev.webp" alt="JoaoDev" />
        </div>
      </ScrollRevealRightEffect>
    </>
  );
}
