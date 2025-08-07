// components/HeroSection.tsx

import { BentoDemo } from "./BentoGrid";

export default function HeroSection() {
  return (
    <section className="bg-white pt-16 md:pt-20 pb-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-[76rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Area */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">Mulai Perjalanan Digital Anda di Sini</h1>
          <p className="text-lg text-gray-600 mt-6">Kami membuat website yang cepat, andal, dan elegan, yang mencerminkan nilai bisnis Anda.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition">
              Hubungi Kami
            </a>
            <a href="#portfolio" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg text-center transition">
              Lihat Portofolio
            </a>
          </div>
        </div>

        <div className="hidden lg:inline-block h-[470px] w-full overflow-hidden p-3">
          <BentoDemo />
        </div>
      </div>
    </section>
  );
}
