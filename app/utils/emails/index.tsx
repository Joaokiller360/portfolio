'use client'
import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from '@/app/utils'

interface CopyToClipboardProps {
  text: string; // Texto a copiar
}

export const Email: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Mensaje desaparece después de 2 segundos
    } catch (error) {
      console.error('Error al copiar texto:', error);
    }
  };

  return (
    <div className="flex items-center justify-center pb-3">
      <div className="rounded-full bg-colorButton/50 border-colorButton border-2 px-4 py-2 space-x-2 flex">
        <span className="text-white font-semibold">{text}</span>
        <button
          onClick={handleCopy}
          className="bg-transparent text-white rounded hover:underline flex items-center transition-transform delay-100"
        >
          {copied ? <CheckIcon size={undefined} height={undefined} width={undefined} /> : < CopyIcon size={undefined} height={undefined} width={undefined} />}
        </button>
      </div>
    </div>

  );
};
