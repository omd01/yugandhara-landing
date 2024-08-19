"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CompLogo from "./CompLogo";

export default function CompLogosCard() {
  const iconsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      iconsRef.current,
      { opacity: 0, scale: 0.5, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1, // Each logo appears with a slight delay
      }
    );
  }, []);

  // Hover animation function
  const handleMouseEnter = (index) => {
    gsap.to(iconsRef.current[index], {
      scale: 1.2,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconsRef.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };
  const icons_data = [
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004169/Yuga/Company%20Logos/Yugandhara_Foundation_nesbu5.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004166/Yuga/Company%20Logos/Yuga_Studios_bixo6l.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004171/Yuga/Company%20Logos/Mask_Production_gwcgqx.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004172/Yuga/Company%20Logos/Nikaay_u71ujk.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004171/Yuga/Company%20Logos/Envifuture_ks0rmj.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004169/Yuga/Company%20Logos/Yugandhara_Strategic_Holdings_1_zqhp6r.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004168/Yuga/Company%20Logos/YUGA_Weddings_p9pdhr.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004165/Yuga/Company%20Logos/YUGA_Sports_Entertainment_gyc9ki.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004165/Yuga/Company%20Logos/Yuga_Production_House_w3hxln.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004163/Yuga/Company%20Logos/YUGA_Hospitality_vwphur.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004162/Yuga/Company%20Logos/Useless_vn8okj.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004161/Yuga/Company%20Logos/TMS_dznucp.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004161/Yuga/Company%20Logos/TMS_Global_Kitchen_fqa8ss.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004161/Yuga/Company%20Logos/Urban_Farmer_yyirob.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004160/Yuga/Company%20Logos/The_Magic_Pan_c6m7ef.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004160/Yuga/Company%20Logos/SM_Consultancy_qbfrt4.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004159/Yuga/Company%20Logos/SIGA_bf7iav.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
    {
      link: "https://res.cloudinary.com/dqbwa8i3y/image/upload/v1721004159/Yuga/Company%20Logos/Rooh_Photography_zz5hij.svg",
      alt: "Flowbite Logo",
      width: 100,
      height: 50,
    },
  ];

  return (
    <>
      {icons_data.map((icon, index) => (
        <div
          key={index}
          ref={(el) => (iconsRef.current[index] = el)} // Attach each logo to the refs array
          className="flex justify-center items-center"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <CompLogo
            link={icon.link}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
          />
        </div>
      ))}
    </>
  );
}
