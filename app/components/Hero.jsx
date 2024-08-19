"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import CompLogosCard from "./card/CompLogosCard";

export default function Hero() {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate the main logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5, rotate: -45 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // Animate the "We Are Yuga" text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );

    // Animate the line under the text
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    // Animate the bottom design element
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <div className="bg-white border-gray-200 w-full h-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-16 px-5 md:px-24">
        <div
          ref={logoRef}
          className="p-0 m-0 flex justify-center w-full md:w-1/5 mx-0 my-10 md:my-0 md:mx-9"
        >
          <Image
            src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724001427/Yuga/Y_Icons-cropped_jla0ey.svg"
            alt="Company Logo"
            width={500}
            height={50}
            className="sm:w-full h-auto w-1/2"
          />
        </div>

        <div className="grid w-full md:w-3/4 grid-cols-3 grid-rows-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          <CompLogosCard />
        </div>
      </div>

      <div className="flex flex-col md:py-8 md:flex-row justify-between">
        <div className="flex pb-0 md:pb-24 pl-8 md:pl-48 items-end w-full">
          <div ref={textRef}>
            <h3 className="text-black text-2xl md:text-5xl font-argblite">
              We Are Yuga
            </h3>
          </div>
          <div ref={lineRef} className="w-2/4 h-[2px] bg-black mx-4"></div>
        </div>
        <div
          ref={imageRef}
          className="p-0 m-0 flex justify-center md:w-1/4 md:absolute bottom-0 right-0"
        >
          <Image
            src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978126/Yuga/Bottom_design_1_fea5k1.svg"
            alt="Design Element"
            width={700}
            height={50}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
