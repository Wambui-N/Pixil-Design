"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const navLinks = [
  { path: "/", label: "Pixil Designs" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  //   { path: "/Contact", label: "Contact" },
];

const container = {
  hidden: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
  show: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const links = {
  hidden: { y: -100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-orange text-white font-medium uppercase font-satoshi py-2 px-3 flex items-center rounded-xl"
      >
        <span className="px-1">{isOpen ? "Close" : "Menu"}</span>
        <span
          className={`material-symbols-rounded transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown color="#F9F8F3" strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute right-0 mt-4 p-6 bg-black shadow-md rounded-2xl inline-block min-w-max`}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {navLinks.map((link, index) => (
              <div key={index} className="p-0 overflow-hidden">
                <motion.div
                  className="overflow-hidden text-orange hover:text-grey text-right font-brule font-medium text-3xl uppercase block py-1"
                  variants={links}
                >
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className="flex flex-row justify-end items-center"
                  >
                    {pathname === link.path && (
                      <span className="">
                        <svg
                          className="w-5 h-auto px-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 69.3 70"
                          fill="none"
                        >
                          <path
                            fill="#DEEBD3"
                            d="M46.85,39.87L69.3,35,46.85,30.13a9.64,9.64,0,0,1-7.37-7.45L34.65,0,29.83,22.68a9.65,9.65,0,0,1-7.37,7.45L0,35l22.46,4.87a9.65,9.65,0,0,1,7.37,7.45L34.65,70l4.83-22.68A9.64,9.64,0,0,1,46.85,39.87Z"
                          />
                        </svg>
                      </span>
                    )}
                    {link.label}
                  </Link>
                </motion.div>
              </div>
            ))}
            <Link
              href="/contact"
              className="text-sand font-brule font-medium text-2xl uppercase py-2 flex flex-row justify-end items-center"
            >
              Let's Get Started <ArrowUpRight color="#E5DCD7" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
