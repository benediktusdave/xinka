"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      //   once: true,
    });
  }, []);

  return (
    <section className="bg-white py-12 lg:py-20 px-6 md:px-24">
      <div className="max-w-[76rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="w-full md:w-1/2" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Tentang Xinka Solution</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-center md:text-left">Xinka Solution adalah penyedia layanan IT yang berdedikasi, membantu bisnis berkembang melalui solusi digital yang cerdas dan efisien.</p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">👨‍💻</div>
              <div>
                <h4 className="font-semibold text-lg">Berpengalaman</h4>
                <p className="text-gray-600 text-sm">Telah berhasil menyelesaikan berbagai proyek lintas industri yang disesuaikan dengan kebutuhan bisnis.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">⚙️</div>
              <div>
                <h4 className="font-semibold text-lg">Inovatif & Adaptif</h4>
                <p className="text-gray-600 text-sm">Selalu mengikuti tren teknologi terbaru dan beradaptasi secara mulus dengan kebutuhan klien.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <h4 className="font-semibold text-lg">Dukungan Penuh</h4>
                <p className="text-gray-600 text-sm">Bantuan menyeluruh dari perencanaan hingga peluncuran, demi kesuksesan jangka panjang.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kanan: Statistik */}
        <div className="w-full md:w-1/2 flex justify-center items-center" data-aos="fade-up">
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="w-38 md:w-32 lg:w-[17rem] bg-gradient-to-br from-blue-500 to-blue-800 text-white rounded-xl px-6 py-5 shadow-md text-left">
              <div className="text-xl md:text-3xl font-bold mb-2">50+</div>
              <div className="text-md">Proyek Selesai</div>
            </div>

            <div className="w-38 md:w-32 lg:w-[17rem] bg-gradient-to-br from-blue-500 to-blue-800 text-white rounded-xl px-6 py-5 shadow-md text-left">
              <div className="text-xl md:text-3xl font-bold mb-2">100%</div>
              <div className="text-md">Klien Puas</div>
            </div>

            <div className="w-38 md:w-32 lg:w-[17rem] bg-gradient-to-br from-blue-500 to-blue-800 text-white rounded-xl px-6 py-5 shadow-md text-left">
              <div className="text-xl md:text-3xl font-bold mb-2">24/7</div>
              <div className="text-md">Dukungan Tersedia</div>
            </div>

            <div className="w-38 md:w-32 lg:w-[17rem] bg-gradient-to-br from-blue-500 to-blue-800 text-white rounded-xl px-6 py-5 shadow-md text-left">
              <div className="text-xl md:text-3xl font-bold mb-2">5+</div>
              <div className="text-md">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
