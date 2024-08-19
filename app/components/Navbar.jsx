"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 }, // Start off-screen and invisible
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" } // Slide down and fade in
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-white drop-shadow-xl h-[12%] shadow-slate-700 font-argb "
    >
      <div className="md:px-28 flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978854/Yuga/logo_imcnpq.svg"
            alt="Yugandhara Logo"
            width={250}
            height={37}
            className="w-40 h-10 md:w-48 md:h-12"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto text-lg"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="nav-item block py-2 px-3 text-gray-900 rounded md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-item block py-2 px-3 text-gray-900 rounded md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-item block py-2 px-3 text-gray-900 rounded md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
