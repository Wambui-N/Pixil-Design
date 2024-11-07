import React from "react";

const Hero = ({ text }: { text: string }) => {
  return (
    <div className="responsive">
      <div className="w-[70%] pt-48">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Hero;
