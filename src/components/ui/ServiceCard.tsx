import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  style?: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

const ServiceCard = ({
  style,
  name,
  description,
  features,
  image,
}: ServiceCardProps) => {
  return (
    <div className={`responsive flex flex-col gap-12 py-12 rounded-lg ${style}`}>
      <h2>{name}</h2>
      <div className="grid grid-cols-3 gap-6 items-end h-[300px]">
        <p>{description}</p>
        <ul className="list-none text-sm">
          {features.map((feature) => (
            <li className="">{feature}</li>
          ))}
        </ul>
        <div className="h-full w-full overflow-hidden">
          <Image
            className="rounded-lg object-cover object-center h-full w-full"
            src={image}
            alt="alt"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
