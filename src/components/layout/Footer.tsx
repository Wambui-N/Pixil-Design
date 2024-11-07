"use client";

import Link from "next/link";
import React from "react";
import { SocialIcon } from "@/components/SocialIcon";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/Work", label: "Work" },
  { path: "/About", label: "About" },
  { path: "/Services", label: "Services" },
  { path: "/Contact", label: "Contact" },
] as const;

const socialLinks = [
  {
    href: "https://x.com/PixilDesigns",
    icon: "twitter",
    label: "Follow us on Twitter",
  },
  {
    href: "https://www.instagram.com/pixildesigns/",
    icon: "instagram",
    label: "Follow us on Instagram",
  },
  {
    href: "https://www.linkedin.com/in/pixil-designs/",
    icon: "linkedin",
    label: "Connect with us on LinkedIn",
  },
] as const;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-orange text-black font-light py-6 h-[400px] relative"
      role="contentinfo"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed h-[600px] w-full bottom-0 responsive flex flex-col justify-end">
        {/* Logo and Navigation Section */}
        <div className="flex flex-col gap-8 py-4 border-b border-black/20">
          <Link href="/" className="w-full p-4" aria-label="Pixil Designs Home">
            {/* SVG Logo Component */}
          </Link>

          <nav className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
            <ul className="flex flex-wrap gap-4 md:gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="hover:text-black transition-colors duration-200 capitalize"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToTop}
              className="hover:text-black transition-colors duration-200 cursor-pointer"
              aria-label="Scroll to top of page"
            >
              Back to the top
            </button>
          </nav>
        </div>

        {/* CTA Section */}
        <div className="border-b border-black/20 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <Link
              href="/Book"
              className="text-black font-brule font-medium text-2xl md:text-4xl hover:text-black/80 transition-colors duration-200"
            >
              Let&apos;s get started!
            </Link>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.href}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-4 flex flex-col md:flex-row justify-between gap-4 text-black/50 text-sm">
          <p>©{new Date().getFullYear()} Pixil Designs - All rights Reserved</p>
          <p>Designed by Pixil Designs</p>
          <div className="flex flex-col md:items-end gap-2">
            <Link
              href="https://privacyterms.io/view/JtggHBgp-stS04EJK-QRJNZD/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-200 capitalize"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://privacyterms.io/view/5kRAMhHn-Bt8mK2Oe-6IH4si/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors duration-200 capitalize"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
