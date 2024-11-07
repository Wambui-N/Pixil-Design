'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropDown from "../DropDown";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="responsive flex flex-row justify-between items-center py-4 sticky top-0 left-0 right-0 z-50">
      <Link href="/" className="">
        <svg
          className="mix-blend-difference"
          width="40"
          height="40"
          viewBox="0 0 70 70"
          fill="#0B0100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M46.85 39.87L69.3 35L46.85 30.13C45.0339 29.7312 43.3719 28.8158 42.0643 27.4939C40.7566 26.1721 39.8591 24.5003 39.48 22.68L34.65 0L29.83 22.68C29.4497 24.4998 28.5518 26.1709 27.2444 27.4926C25.9369 28.8142 24.2756 29.7301 22.46 30.13L0 35L22.46 39.87C24.2756 40.2699 25.9369 41.1858 27.2444 42.5074C28.5518 43.8291 29.4497 45.5002 29.83 47.32L34.65 70L39.48 47.32C39.8591 45.4997 40.7566 43.8279 42.0643 42.5061C43.3719 41.1842 45.0339 40.2688 46.85 39.87Z" />
        </svg>
      </Link>
      <DropDown />
    </div>
  );
};

export default Navbar;
