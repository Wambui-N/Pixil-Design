import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturesCardProps {
  projectName: string;
  image: string;
  children: React.ReactNode;
}

const FeaturesCard = ({ projectName, image, children }: FeaturesCardProps) => {
  return (
    <Link href={`/work`}>
      <div className="flex flex-col gap-3">
        <Image
          className="rounded-xl object-cover w-full h-[400px]"
          src={image}
          alt="alt"
          width={500}
          height={500}
          quality={100}
        />
        {children}
        <h4 className="text-base font-medium uppercase">{projectName}</h4>
      </div>
    </Link>
  );
};

export default FeaturesCard;
