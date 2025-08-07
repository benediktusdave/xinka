"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-sm border-t border-gray-300">
      {/* Informasi utama */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 text-center space-y-4">
        <img src="/logo_xinka.png" alt="Xinka Logo" className="mx-auto w-24 md:w-28" />

        <div>
          <h4 className="font-semibold text-lg">Xinka Solution</h4>
          <p className="pt-0.5">Jl. Hayamwuruk No.47, Purwodadi-Grobogan</p>
          <p className="pt-0.5">Telepon: +62 858-6507-1993</p>
          <p className="pt-0.5">Email: xinka@gmail.com</p>
        </div>

        {/* Sosial Media */}
        <div className="flex justify-center gap-4 pt-4">
          <a href="#" target="_blank" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/xinkatech.id?utm_source=ig_web_button_share_sheet&igsh=ZTZpYXBhN3dpeWpz" target="_blank" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" className="hover:text-blue-600">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" className="hover:text-sky-400">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" className="hover:text-red-500">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Navigasi bawah */}
      <div className="border-t border-white/10 py-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-gray-400 text-xs">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#beranda" className="hover:text-black">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-black">
              Tentang
            </a>
            <a href="#layanan" className="hover:text-black">
              Layanan
            </a>
            <a href="#portofolio" className="hover:text-black">
              Portofolio
            </a>
            <a href="#kontak" className="hover:text-black">
              Kontak
            </a>
          </div>
          <div className="text-center md:text-right">Copyright © {new Date().getFullYear()} Xinka Solution. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
