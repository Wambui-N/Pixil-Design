import ServiceCard from "@/components/ui/ServiceCard";
import React from "react";
import { services } from "@/lib/service";

const ServicesSection = () => {
  return (
    <div className="">
      {/* <ServiceCard bg="bg-blue" name="Web Design" /> */}
      {services.map((service) => (
        <ServiceCard
          style={service.style}
          key={service.name}
          name={service.name}
          description={service.description}
          features={service.features}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesSection;
