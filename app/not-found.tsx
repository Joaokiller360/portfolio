'use client'

import { Loyout, ButtonC } from '@/app/utils'

export default function NotFound({ error }: { error: unknown }) {
  return (
    <>
      <Loyout>
        <div className='relative w-full h-auto overflow-hidden lg:gap-8 xl:gap-0 lg:py-60 pt-60 lg:px-0 px-10 text-center z-10'>
          <p className='mt-4 text-3xl font-bold sm:text-5xl text-customRed'>405</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>Página No Encontrada</h1>
          <p className='mt-6 text-base leading-7'>Lo sentimos, no hemos podido encontrar la página que estabas buscando. <br /> Por favor vuelve al inicio.</p>
          <div className='text-center pt-5'>
            <ButtonC hrf="/" text="Volver al inicio" />
          </div>
        </div>
      </Loyout>
    </>
  )
}