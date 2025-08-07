"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full px-6 md:px-16 lg:px-24 py-3 flex justify-between items-center shadow-sm bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href={"/"}>
          <img src="/logo_xinka.png" alt="xinka" className="w-28 md:w-32" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10 text-sm text-gray-700 font-normal md:text-[1rem]">
        <a href="#about" className="hover:text-blue-500 transition">
          Tentang
        </a>
        <a href="#service" className="hover:text-blue-500 transition">
          Layanan
        </a>
        <a href="#portfolio" className="hover:text-blue-500 transition">
          Portofolio
        </a>
        <a href="#contact" className="ml-4 border border-blue-500 text-blue-500 font-semibold px-6 py-2.5 rounded hover:bg-blue-500 hover:text-white transition text-sm">
          Chat Sekarang
        </a>
      </div>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
          <HamburgerMenuIcon className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-[1px]">
          <div ref={sidebarRef} className="w-72 h-full bg-white shadow-md p-6 relative">
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4" aria-label="Close Menu">
              <Cross1Icon className="w-5 h-5 text-gray-800" />
            </button>

            {/* Sidebar Content */}
            <img src="/logo_xinka.png" alt="xinka" className="w-24 mb-8" />
            <ul className="space-y-6 text-gray-700">
              <li>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#service" onClick={() => setIsOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setIsOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={() => setIsOpen(false)}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="block border border-blue-500 text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition" onClick={() => setIsOpen(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
