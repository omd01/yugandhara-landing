import Image from "next/image";
export default function Fotter() {
  return (
    <div className="flex justify-between w-full h-auto px-28 ">
      <div className=" flex justify-center items-center ">
        <div><h3 className="bg-red-400 text-6xl">We Are Yuga</h3></div>
        <div className="w-72 h-1 bg-black mx-4"></div>
        
      </div>
      <div className="absolute bottom-0 right-0 ">
        <Image
          src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1723978126/Yuga/Bottom_design_1_fea5k1.svg"
          alt="Flowbite Logo"
          width={700}
          height={50}
          //   className="w-full h-auto "
        />
      </div>
    </div>
  );
}
