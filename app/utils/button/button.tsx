'use client'

// Modal para mostrar el currículum en grande
import { useState } from 'react';

interface ModalCurriculumProps {
  buttonText?: string;
  curriculumUrl: string;
}

export function ModalCurriculum({ buttonText = 'Ver Currículum', curriculumUrl }: ModalCurriculumProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={onOpen}
        className='group relative inline-flex items-center overflow-hidden px-8 py-3 text-base font-medium border-2 text-(--colorButton) border-(--colorButton) hover:bg-(--colorButton) hover:text-white rounded-2xl transition-all cursor-pointer'
      >
        <span className='absolute -end-full transition-all group-hover:end-4'>
          <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
          </svg>
        </span>
        <span className='transition-all group-hover:me-4'>{buttonText}</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative z-10 bg-white text-black rounded-2xl shadow-xl w-full max-w-xl mx-6 max-h-[90vh] overflow-y-auto flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Mi Currículum</h2>
              <button onClick={onClose} className="text-red-500 hover:bg-red-100 rounded-xl px-4 py-2 font-medium transition-all">Cerrar</button>
            </div>
            <div className="flex-1 p-4 flex justify-center items-center">
              <iframe
                src={curriculumUrl}
                title="Currículum"
                className="w-full h-[70vh] rounded-xl border"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import Link from "next/link"
import React from "react";

interface LogoProps {
  hrf?: string; // URL o ruta del archivo
  text?: string;
  download?: boolean; // Indica si debe descargarse el archivo
  id?: string;
  style?: string
}

export function ButtonC({ style = '', id = '', hrf = '', text = '', download = false }: LogoProps) {
  if (download && hrf) {
    // Manejar descargas con JavaScript
    const handleDownload = (e: React.MouseEvent) => {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = hrf;
      link.download = hrf.split("/").pop() || "file"; // Nombre del archivo por defecto
      link.click();
    };

    return (
      <div>
        <button
          onClick={handleDownload}
          key={id}
          className='group cursor-pointer relative inline-flex items-center overflow-hidden px-8 py-3 text-base font-medium border-2 text-(--colorButton) border-(--colorButton) hover:bg-(--colorButton) hover:text-white rounded-2xl transition-all'
        >
          <span className='absolute -end-full transition-all group-hover:end-4'>
            <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
            </svg>
          </span>
          <span className='transition-all group-hover:me-4'>{text}</span>
        </button>
      </div>
    );
  }

  // Enlace normal
  return (
    <div>
      <Link
        href={hrf}
        key={id}
        className={`group relative inline-flex items-center overflow-hidden lg:px-8 px-4 py-3 text-base font-medium border-2 text-(--colorButton) border-(--colorButton) hover:bg-(--colorButton) hover:text-white rounded-2xl transition-all ${style}`}
      >
        <span className='absolute -end-full transition-all group-hover:end-4'>
          <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
          </svg>
        </span>
        <span className='transition-all group-hover:me-4'>{text}</span>
      </Link>
    </div>
  );
}

interface ButtonModalProps {
  text?: string;
  onOpen: () => void;
}

export function ButtonModal({ text = '', onOpen }: ButtonModalProps) {
  return (
    <div>
      <button
        onClick={onOpen} // Llama a la función que abre el modal
        className='group relative inline-flex items-center overflow-hidden px-8 py-3 text-base font-medium border-2 text-(--colorButton) border-(--colorButton) hover:bg-(--colorButton) hover:text-white rounded-2xl transition-all cursor-pointer'
      >
        <span className='absolute -end-full transition-all group-hover:end-4'>
          <svg className='size-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
          </svg>
        </span>
        <span className='transition-all group-hover:me-4'>{text}</span>
      </button>
    </div>
  );
}

interface ButtonNavProps {
  hrf?: string;
  text?: string;
  icon?: React.ReactNode;
  style?: string;
}

export function ButtonNav({ hrf = '', text = '', icon = '', style = '' }: ButtonNavProps) {
  return (
    <div className={style}>
      <Link
        href={hrf}
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }} // Estilos directamente en el Link
      >
        {icon && <span>{icon}</span>}
        <span className="hidden sm:inline">{text}</span>
      </Link>
    </div>
  );
}

interface ButtonNavComponentsProps {
  hrf?: string;
  text?: string;
  icon?: React.ReactNode;
  style?: string;
}

export function ButtonNavComponents({ hrf = '', text = '', icon = '', style = '' }: ButtonNavComponentsProps) {
  return (
    <li>
      <a
        href={hrf}
        className={`px-4 py-3 flex items-center space-x-4 rounded-lg${style}`} // Estilos directamente en el Link
      >
        {icon && <span>{icon}</span>}
        <span className="hidden sm:inline w-full">{text}</span>
      </a>
    </li>
  );
}
