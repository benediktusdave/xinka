"use client";

import React from "react";
import { CodeIcon, MobileIcon, DesktopIcon } from "@radix-ui/react-icons";

const services = [
  {
    title: "Aplikasi Web",
    subtitle: "Kami merancang dan membangun aplikasi web yang cepat, responsif, dan mudah digunakan. Cocok untuk berbagai kebutuhan bisnis seperti sistem informasi, portal layanan, hingga platform e-commerce.",
    icon: <CodeIcon className="w-10 h-10 text-blue-700" />,
    // features: ["React & Next.js Development", "Spring Boot Web Development", "RESTful API & Microservices"],
  },
  {
    title: "Aplikasi Mobile",
    subtitle: "Kami menyediakan layanan pembuatan aplikasi mobile yang mendukung berbagai perangkat. Solusi kami membantu Anda menjangkau pelanggan secara lebih luas dan meningkatkan interaksi pengguna.",
    icon: <MobileIcon className="w-10 h-10 text-blue-700" />,
    // features: ["Native Android (Java)", "Firebase Integration", "Play Store Deployment"],
  },
  {
    title: "Aplikasi Desktop",
    subtitle: "Kami mengembangkan aplikasi desktop yang stabil dan efisien, disesuaikan dengan alur kerja dan kebutuhan operasional Anda. Ideal untuk penggunaan internal perusahaan maupun distribusi luas.",
    icon: <DesktopIcon className="w-10 h-10 text-blue-700" />,
    // features: ["Java Swing & JavaFX UI", "Local DB (SQLite, MySQL)", "Cross-platform Packaging (JAR, EXE)"],
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-20">
      <div className="max-w-[76rem] mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 md:mb-16">Kami menyediakan solusi IT yang kuat dan disesuaikan dengan tujuan bisnis Anda — mulai dari pengembangan web dan mobile yang skalabel hingga perangkat lunak desktop.</p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 p-6" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
              {/* <ul className="space-y-2 text-sm text-gray-700">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckIcon className="text-green-500 w-4 h-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
