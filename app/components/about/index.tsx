'use client'

import { ScrollRevealEffect, ScrollRevealRightEffect } from '@/app/utils'
import { Image } from "@nextui-org/react";
import { about } from '@/data'

export default function About() {
  return (
    <section className="flex justify-center items-center w-full py-16" id="about">
      {about.map((about, index) => (
        <div className="bg-sectionColor py-16 rounded-3xl w-full text-white" key={index}>
          <ScrollRevealEffect>
            <h2 className="text-3xl font-bold mb-8 text-center">{about.tilte}</h2>
          </ScrollRevealEffect>
          <ScrollRevealRightEffect>
            <div className='sm:flex grid sm:items-center justify-center sm:px-32'>
              <p className="p-6">
                <span className="text-lg leading-relaxed">
                  {about.descriptions}
                </span>
              </p>
              <div className='flex justify-center h-auto w-full'>
                <Image className='sm:w-80 w-40 h-auto' src="/media/joaoCompu.webp" alt="joaoCompu" />
              </div>
            </div>
          </ScrollRevealRightEffect>
        </div>
      ))}
    </section>
  );
}