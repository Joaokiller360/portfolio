import { ScrollRevealEffect, Button, ScrollRevealRightEffect, SocialMedia, Email } from "@/app/utils";
import { Image } from "@nextui-org/react";
import { userName } from '@/data'

export default function Hero() {
  return (
    <>
      <section className="w-full h-dvh flex items-center justify-center text-center bg-gradient-to-br from-secondary to-background relative">
        <div className="fade-in max-w-4xl">
          <ScrollRevealEffect>
            {userName.map((user, index) => (
              <div key={index}>
                <h1 className="text-5xl font-bold mb-4 gradient-text">
                  Hola, soy {user.userName} 👋
                </h1>
                <p className="text-xl mb-4 text-muted-foreground">
                  {user.dev}
                </p>

                <Email text={`${user.email}`} />
              </div>
            ))}
            <SocialMedia />

          </ScrollRevealEffect>
          <ScrollRevealEffect>
            <div className="pt-5 flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button hrf="#projects" text="Ver mis proyectos" />
                <Button hrf="./curriculum/cv.pdf" text="Descargar CV" download />
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
