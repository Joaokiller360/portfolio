import { ScrollRevealEffect } from '@/app/utils'

interface LogoProps {
  text?: string;
  number?: number;
  tags: string | string[]
  tag?: string
}

export function Skills({ tags, tag }: LogoProps) {

  return (
    <ScrollRevealEffect>
      <div className='group relative inline-flex items-center overflow-hidden px-2 py-1 text-base font-medium bg-(--colorButton) hover:bg-(--colorButton)/70 rounded-full transition-al cursor-default'>
        <span className="icon text-2xl">{tag}</span>
        <span className="text-lg py-2 px-4">{tags}</span>
      </div>
    </ScrollRevealEffect>
  )
}

interface Skil {
  text?: string;
  icon: React.ReactNode;
  number?: number;
}

export function Skil({ number, text, icon }: Skil) {

  return (
    <>
      <div className='sm:py-5'>
        <ScrollRevealEffect>
          <div className='group relative inline-flex items-center overflow-hidden px-4 py-1 text-base font-medium border-2 text-(--colorButton) border-(--colorButton) hover:bg-(--colorButton) hover:text-white transition-all rounded-full  cursor-default'>
            <span className="icon text-2xl">{icon}</span>
            <span className="text-lg py-2 px-2" key={number}>{text}</span>
          </div>
        </ScrollRevealEffect>
      </div>
    </>
  )
}