'use client'

import { ButtonC, ScrollRevealEffect, ScrollRevealRightEffect, ModalPreview } from '@/app/utils';
import { v4 as uuidv4 } from 'uuid';
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
  style?: string;
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
  style = '',
}: ButtonNavProps) {

  return (
    <>
      <div className={`${style}`}>
        <ScrollRevealEffect>
          <div className={`bg-sectionColor rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
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
              <div className="flex justify-around pt-5 columns-2 gap-5">
                {buttons.map(({ id, hrfCode, hrfDemo, hrefContent, active }, index) => {
                  return (
                    <React.Fragment key={`${id ?? 'generated'}-${index}`}>
                      {hrfCode && active && (
                        <ButtonC
                          key={`${id ?? 'generated'}-${index}-code`}
                          text="Ver Código"
                          hrf={hrfCode || 'Prueba'}
                        />
                      )}
                      {hrfDemo && active && (
                        <ButtonC
                          key={`${id ?? 'generated'}-${index}-demo`}
                          text="Ver Demo"
                          hrf={hrfDemo || 'Prueba'}
                        />
                      )}
                      {hrefContent && active && (
                        <ButtonC
                          key={`${id ?? 'generated'}-${index}-content`}
                          text="Ver Contenido"
                          hrf={hrefContent || 'Prueba'}
                        />
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
      </div>
    </>
  );
}