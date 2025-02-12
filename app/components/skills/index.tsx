/*import { Skil, ScrollRevealRightEffect } from '@/app/utils';
import { skills } from '@/data';

export default function Skill() {

  return (
    <section className="py-16 fade-in" id='my-skills'>
      <ScrollRevealRightEffect>
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
      </ScrollRevealRightEffect>
      <ScrollRevealRightEffect>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Skil
              key={index}
              number={index}
              text={skill.name}
              icon={skill.icon} // Pasa el ícono como prop
            />
          ))}
        </div>
      </ScrollRevealRightEffect>
    </section>
  );
}*/
'use client'

import { useEffect, useState } from "react";
import { Skil, ScrollRevealRightEffect } from '@/app/utils';
import * as SiIcons from 'react-icons/si';
import { Skills, fetchSkills } from '@/api/getSkills'

export default function Skill() {

  const [Skill, setSkill] = useState<Skills[]>([]);

  useEffect(() => {
    fetchSkills().then(setSkill);
  }, []);

  return (
    <section className="py-16 fade-in" id='my-skills'>
      <ScrollRevealRightEffect>
        <h2 className="text-3xl font-bold mb-8 text-center">Mis Habilidades</h2>
      </ScrollRevealRightEffect>
      <ScrollRevealRightEffect>
        <div className="flex flex-wrap justify-center gap-3">
          {Skill.map(({ icon, iconName, id }) => {
            const IconComponent = SiIcons[`Si${icon}` as keyof typeof SiIcons];
            return (
              <Skil
                key={id}
                number={id}
                text={iconName}
                icon={IconComponent ? <IconComponent className="mr-2 scale-125" /> : null} // Pasa el ícono como prop
              />
            )
          })}
        </div>
      </ScrollRevealRightEffect>
    </section>
  );
}

