import Image from "next/image";
export default function CompLogo({ link, alt, width, height }) {
  return (
    <div>
      <Image
        src={link}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}
