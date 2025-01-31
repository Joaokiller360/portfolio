'use client'

import Link from "next/link"

interface LogoProps {
  hrf?: string; // URL o ruta del archivo
  text?: string;
  download?: boolean; // Indica si debe descargarse el archivo
}

export function ButtonC({ hrf = '', text = '', download = false }: LogoProps) {
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
          className='group relative inline-flex items-center overflow-hidden px-8 py-3 text-base font-medium border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white rounded-2xl transition-all'
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
        className='group relative inline-flex items-center overflow-hidden px-8 py-3 text-base font-medium border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white rounded-2xl transition-all'
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

import { Button } from '@heroui/button'
import { useDisclosure } from "@heroui/modal";

interface ButtonModalProps {
  text?: string;
  onOpen: () => void;
}

export function ButtonModal({ text = '', onOpen }: ButtonModalProps) {
  return (
    <div>
      <button
        onClick={onOpen} // Llama a la función que abre el modal
        className='group relative inline-flex items-center overflow-hidden px-8 py-3 text-base font-medium border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white rounded-2xl transition-all'
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
}

export function ButtonNav({ hrf = '', text = '', icon }: ButtonNavProps) {
  return (
    <div>
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
