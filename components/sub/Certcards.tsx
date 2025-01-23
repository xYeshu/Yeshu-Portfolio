import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const CertCards = ({ src, title, description }: Props) => {
  return (
    <div className="cursor-pointer relative hover:opacity-90 h-[270px] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

     
    </div>
  );
};

export default CertCards;
