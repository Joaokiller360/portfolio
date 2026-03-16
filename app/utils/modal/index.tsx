'use client'

import { ButtonModal, Tags } from '@/app/utils'
import { Image } from "@heroui/react";
import { useState } from 'react'

interface ModalDescriptions {
  clientProject?: string;
  description?: string;
  hrfCode?: string;
  hrfDemo?: string;
  tag?: {
    id: number;
    IconName: string;
    Icon: string | null
  }[];
  img?: string;
}

export function ModalPreview({
  clientProject = '',
  description = '',
  tag = [],
  img = ''
}: ModalDescriptions) {

  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  
  const apiUrl = process.env.NEXT_PUBLIC_BACKND_URL;

  return (
    <>
      <ButtonModal text="Saber mas del proyecto" onOpen={onOpen} />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl" />

          {/* Modal Content */}
          <div
            className="relative z-10 bg-(--sectionColor) text-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex justify-center pt-6">
              <Image
                src={`${img}`}
                alt={clientProject}
                className="w-40 h-40 object-cover rounded-full border-2 border-white"
              />
            </div>
            {/* Header */}
            {clientProject && (
              <div className="p-6 pb-0">
                <p className="text-xl font-bold">Nombre del Cliente:</p>
                <p className="text-xl font-semibold pt-2 flex justify-center">{clientProject || 'No disponible'}</p>
              </div>
            )}

            {/* Body */}

            {description && (
              <div className='p-3 px-7'>
                <p className="text-xl font-bold">Descripcion del proyecto:</p>
                <p className="pt-1">{description}</p>
              </div>
            )}
            {Array.isArray(tag) && tag.length > 0 && (
              <div className='p-3 px-7'>
                <p className="text-lg font-bold">Tecnologias que se uso:</p>
                <div className="pt-3 flex justify-center">
                  {tag && (
                    <Tags tag={tag?.map(t => ({
                      id: t.id,
                      IconName: t.IconName,
                      Icon: t.Icon
                    }))} />
                  )}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="p-3 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 text-red-500 hover:bg-red-100 rounded-xl transition-all font-medium cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}