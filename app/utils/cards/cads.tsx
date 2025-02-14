'use client'

import { ButtonC, ScrollRevealEffect, ScrollRevealRightEffect, ModalPreview } from '@/app/utils';
import { Image } from "@nextui-org/image";


interface ButtonNavProps {
  titleProject?: string;
  clientProject?: string;
  description?: string;
  hrfCode?: string;
  hrfDemo?: string;
  tag?: {
    id: number;
    IconName: string;
    Icon: string | null // El tipo ahora es ReactNode, no un string
  }[];
  imageUrl?: string;
  imageAlt?: string;
}

export default function Cards({
  titleProject = '',
  clientProject = '',
  description = '',
  hrfCode = '',
  hrfDemo = '',
  imageAlt = '',
  imageUrl = '',
  tag = [],
}: ButtonNavProps) {

  return (
    <>
      <ScrollRevealEffect>
        <div className="bg-sectionColor rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center">
            <ScrollRevealRightEffect>
              <p className="text-2xl font-semibold">{titleProject}</p>
            </ScrollRevealRightEffect>
          </div>
          <div>
            <div className="pt-5">
              <Image
                isZoomed
                alt={imageAlt}
                className="object-cover object-center w-full h-full block rounded-xl"
                src={imageUrl || "Image"}
              />
            </div>
            <div className="flex justify-around pt-5">
              <ButtonC text="Ver Código" hrf={hrfCode} />
              <ButtonC text="Ver Proyecto" hrf={hrfDemo} />
            </div>
            <div className='flex justify-center pt-5'>
              <ModalPreview titleProject={titleProject} clientProject={clientProject} description={description} tag={tag} />
            </div>

          </div>
        </div>
      </ScrollRevealEffect>
    </>
  );
}