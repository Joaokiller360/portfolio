'use client'

import { ButtonC, ScrollRevealEffect, ScrollRevealRightEffect, ModalPreview } from '@/app/utils';
import { Image } from "@nextui-org/image";
import React from 'react';

interface ButtonNavProps {
  titleProject?: string;
  tag?: {
    id: number;
    IconName: string;
    Icon: string | null;
  }[];
  imageUrl?: string;
  imageAlt?: string;
  buttons?: Buttons[];
  style?: string;
  Descriptio?: Descriptio[]
  clientProject?: string,
  description?: string
}

interface Descriptio {
  id: number;
  clientProject: string
  description: string
  active?: boolean;
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
  imageAlt = '',
  imageUrl = '',
  tag = [],
  buttons = [],
  Descriptio = [],
  style = '',
}: ButtonNavProps) {

  Descriptio = Descriptio ?? [];

  const safeDescriptio = Array.isArray(Descriptio)
    ? Descriptio
    : Descriptio
      ? [Descriptio]
      : [];

  console.log('safeDescriptio:', safeDescriptio);



  return (
    <>
      <div className={`${style}`}>
        <ScrollRevealEffect>
          <div className={`bg-sectionColor rounded-3xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
            <div>
              <div>
                <Image
                  isZoomed
                  alt={imageAlt}
                  className="object-cover object-center w-full h-full block rounded-xl"
                  src={imageUrl || "Image"}
                />
              </div>
                <div className="flex justify-center pt-2.5">
                  <p className="text-3xl font-semibold mb:text-center">{titleProject}</p>
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

              {Array.isArray(Descriptio) && Descriptio.map(({ id, clientProject, description, active }) => (
                active && (
                  <div key={id} className="flex justify-center pt-5">
                    <ModalPreview
                      key={id}
                      clientProject={clientProject}
                      description={description}
                      tag={tag}
                    />
                  </div>
                )
              ))}

            </div>
          </div>
        </ScrollRevealEffect>
      </div>
    </>
  );
}