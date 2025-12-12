"use client"

import data from '@/data'
import Image from 'next/image'
import React from 'react'
import { Playfair } from "next/font/google";
import { useHeroIntersectionContext } from '@/app/heroIntersection.context';

const font = Playfair({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Logo() {
 const { inView } = useHeroIntersectionContext();
  return (
    <div className='flex items-center gap-2 '>
      <Image alt='Logo' src={!inView ? '/logo.png' : '/logo-white.png'} width={150} height={120} />
    </div>
  )
}
