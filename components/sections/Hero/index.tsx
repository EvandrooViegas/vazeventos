"use client";
import { useHeroIntersectionContext } from "@/app/heroIntersection.context";
import ContactUsBtn from "@/components/ContactUsBtn";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";

export default function Hero() {
  const { ref } = useHeroIntersectionContext()
  return (
    <SectionContainer className="md:grid md:grid-cols-2 flex-col-reverse gap-20 min-h-[800px] " ref={ref} bgClassName="relative bg-black/50 " id="home">
      <div className="flex flex-col justify-center gap-8 z-[1] text-white ">
        <span className="md:text-6xl text-[40px] font-black uppercase">
Recupere seu  <span className="bg-primary text-white">Cabelo, </span>e sua Autoestima!</span>
        <p>Sabemos o quanto a queda de cabelo pode afetar a autoestima e qualidade de vida. Mas a boa notícia é que estamos aqui para ajudar!</p>
        <ContactUsBtn />
      </div>
      {/* <div className="relative w-full md:h-full md:min-h-[400px]  h-[400px] mt-5 z-[1]">
        <Image src="/hero.jpg" alt="Hero" className="object-cover object-center rounded" fill />
      </div> */}

      <Image alt="Background" src="/bg.jpg" className="absolute object-cover z-[-1]" fill />

    </SectionContainer>
  );
}
