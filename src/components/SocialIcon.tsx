import Link from "next/link";
import React from "react";

type SocialIconProps = {
  href: string;
  icon: string;
  label: string;
};

export const SocialIcon = ({ href, icon, label }: SocialIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-orange transition-colors duration-200"
      aria-label={label}
    >
      {/* Import and use your SVG icons here */}
      
    </Link>
  );
}; 