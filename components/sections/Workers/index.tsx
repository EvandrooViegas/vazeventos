"use client";
import AnimateElement from "@/components/AnimateElement";
import ContactUsBtn from "@/components/ContactUsBtn";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";
import React from "react";
export default function Workers() {
  return (
    <div id="workers" className="md:grid md:grid-cols-3 flex flex-col-reverse md:p-0 p-8 bg-foreground gap-8 min-h-[400px] items-center">
      <div className="relative md:h-full h-[500px] w-full" >
      <Image src="/person.png" className="object-contain object-bottom md:scale-125 absolute bottom-0 md:-translate-y-12 translate-y-8" alt="Person" fill  />

      </div>
      <div  className="col-span-2">
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
      SÓNIA ELIANA
        </span>
        <p className="text-neutral-400 leading-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
        <ContactUsBtn />
      </AnimateElement>
      </div>
    </div>
  );
}
