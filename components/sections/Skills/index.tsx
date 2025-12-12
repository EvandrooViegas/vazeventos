
import SectionContainer from '@/components/SectionContainer'
import React from 'react'

import AnimateElement from '@/components/AnimateElement'
import data from '@/data'
const skills = data.skills
export default function Skills() {
  return (
    <SectionContainer id='skills' className='responsive bg-foreground '>
    <AnimateElement
            animate={{
              opacity: [0, 1],
              y: [40, 0],
              transition: { duration: 1, type: "just" },
            }}
            className="flex flex-col gap-4 w-full"
          >
            <span className="font-bold text-neutral-400">
              
            </span>
            <span className="text-6xl font-extrabold uppercase">
           Tratamentos Capilares
            </span>
             <p className="text-neutral-400 leading-7">
        Volte a ter cabelo e autoestima
        </p>
          </AnimateElement>

      <div className='flex flex-col gap-0.5'>

        {skills.map((s, idx) => (
          <AnimateElement
            animate={{ opacity: [0, 1], y: [-40, 0], transition: { duration: idx * 0.1 + 0.5, type: "just" } }}
            key={s.title} className='space-y-6 bg-background p-6 w-full'>
            <span className='text-4xl text-primary'>{s.icon}</span>
            <span className='font-black text-2xl'>{s.title}</span>
            <p className='font-red text-neutral-900'>{s.description}</p>
          </AnimateElement>
        ))}
      </div>
    </SectionContainer>
  )
}
