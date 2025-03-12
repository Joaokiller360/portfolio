'use client'

import { ButtonC, ScrollRevealEffect, ScrollRevealRightEffect, ModalPreview } from '@/app/utils';
import { Image } from "@nextui-org/image";
import React from 'react';

interface ButtonNavProps {
  titleProject?: string;
  clientProject?: string
  description?: string;
  tag?: {
    id: number;
    IconName: string;
    Icon: string | null;
  }[];
  imageUrl?: string;
  imageAlt?: string;
  buttons?: Buttons[];
}

interface Buttons {
  id: number;
  hrfCode: string;
  hrefContent: string
  hrfDemo: string
  active: boolean;
}

export default function Cards({
  titleProject = '',
  clientProject = '',
  description = '',
  imageAlt = '',
  imageUrl = '',
  tag = [],
  buttons = [],
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
              {buttons.map(({ id, hrfCode, hrfDemo, hrefContent, active }) => {
                return (
                  <React.Fragment key={id}>
                    {hrfCode && active && (
                      <ButtonC key={`${id}-code`} text="Ver Código" hrf={hrfCode || 'Prueba'} />
                    )}
                    {hrfDemo && active && (
                      <ButtonC key={`${id}-demo`} text="Ver Demo" hrf={hrfDemo || 'Prueba'} />
                    )}
                    {hrefContent && active && (
                      <ButtonC key={`${id}-content`} text="Ver Contenido" hrf={hrefContent || 'Prueba'} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="flex justify-center pt-5">
              <ModalPreview titleProject={titleProject} clientProject={clientProject} description={description} tag={tag} />
            </div>
          </div>
        </div>
      </ScrollRevealEffect>
    </>
  );
}