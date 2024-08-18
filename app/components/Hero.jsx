import React from "react";
import Image from "next/image";
import CompLogosCard from "./card/CompLogosCard";


export default function Hero() {
  return (
    <div className="bg-white border-gray-200 w-full h-full flex flex-col justify-between">

        <div className="flex flex-col md:flex-row justify-centeritems-center py-8 md:py-16 px-5 md:px-28">
                <div className="p-0 m-0 flex justify-center w-full md:w-1/4 mx-0 my-10 md:my-0 md:mx-8">
                    <Image
                    src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724001427/Yuga/Y_Icons-cropped_jla0ey.svg"
                    alt="Flowbite Logo"
                    width={500}
                    height={50}
                    className="w-3/4 h-auto "
                    />
                </div>
                
               <div className="grid w-full md:w-3/4 grid-cols-3 grid-rows-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
                <CompLogosCard />
                 </div>
                
        </div>

      <div className="flex flex-col md:py-8 md:flex-row justify-between">
        <div className="flex pb-0 md:pb-24 pl-8 md:pl-48 items-end w-full">
          <div>
            <h3 className=" text-black text-2xl md:text-5xl">We Are Yuga</h3>
            </div>
          <div className="w-2/4 h-[2px] bg-black mx-4"></div>
        </div>
        <div className="p-0 m-0 flex justify-center md:w-1/4 md:absolute  bottom-0 right-0">
        <Image
          src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978126/Yuga/Bottom_design_1_fea5k1.svg"
          alt="Flowbite Logo"
          width={700}
          height={50}
          className="w-full h-auto "
        />
      </div>
      </div>

    </div>
  );
}
