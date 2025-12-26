'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    { smallText: 'Top Forest Tours!', mainText: 'Welcome to Consetetur Forest', buttonText: 'Book a tour!' },
    { smallText: 'Discover Hidden Beauty', mainText: 'Explore Ancient Woods', buttonText: 'Start Adventure' },
    { smallText: 'Nature at Its Best', mainText: 'Breathe in Tranquility', buttonText: 'Reserve Now' },
  ];

  return (
    <>
      {/* Header hiện đại */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#065f46" />
                </linearGradient>
              </defs>
              <path d="M12 2L8 7H16L12 2Z" fill="url(#treeGradient)" opacity="0.9"/>
              <path d="M6 10H18L12 5L6 10Z" fill="url(#treeGradient)" opacity="0.8"/>
              <path d="M4 15H20L12 9L4 15Z" fill="url(#treeGradient)" opacity="0.7"/>
              <rect x="10" y="18" width="4" height="4" fill="url(#treeGradient)" />
            </svg>
            <span className={`text-4xl font-black tracking-tight ${scrolled ? 'text-green-700' : 'text-white drop-shadow-2xl'}`}>FOREST</span>
          </div>

          <ul className="hidden md:flex space-x-14">
            {['Locations', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={`font-semibold text-lg ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-200'} transition`}>
                  {item}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-500"></span>
                </a>
              </li>
            ))}
          </ul>

          <button className={`md:hidden text-4xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>☰</button>
        </nav>
      </header>

      {/* Slider hiện đại đỉnh cao */}
      <section className="h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: [0, 0, -400], opacity: 0.5 },
            next: { translate: ['100%', 0, 0], opacity: 0 },  // Từ phải sang
          }}
          speed={1600}
          loop={true}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          grabCursor={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                {/* Hình nền cinematic mới */}
                <Image
                  src={
                    index === 0 ? "https://mymodernmet.com/wp/wp-content/uploads/2021/11/albert-dros-colorful-forest-landscape-thumbnail.jpg" :  // id 4
                    index === 1 ? "https://thumbs.dreamstime.com/b/misty-forest-path-lined-ancient-trees-lush-greenery-morning-light-serene-pathway-winds-towering-bathed-soft-362631825.jpg" :  // id 9
                                  "https://static.vecteezy.com/system/resources/previews/069/756/744/large_2x/lush-green-forest-enveloped-in-fog-creating-serene-and-tranquil-atmosphere-in-morning-light-free-photo.jpeg"   // id 6
                  }
                  alt="Mystical forest"
                  fill
                  className="object-cover brightness-80"
                  priority
                />
                {/* Gradient overlay hiện đại */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>

                <div className="absolute inset-0 flex items-center justify-start px-10 md:px-24">
                  <div className="text-white max-w-5xl">
                    <p className="text-2xl md:text-4xl font-light mb-6 tracking-wider opacity-0 animate-slide-left">
                      {slide.smallText}
                    </p>
                    <h1 className="text-6xl md:text-9xl font-black mb-12 leading-tight opacity-0 animate-zoom-in">
                      {slide.mainText}
                    </h1>
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:scale-110 transition-transform shadow-2xl opacity-0 animate-pulse-in">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Animation siêu hiện đại */}
      <style jsx>{`
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8) translateY(100px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse-in {
          0% { opacity: 0; transform: scale(0.9); }
          70% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-slide-left { animation: slide-left 1.4s ease-out forwards; }
        .animate-zoom-in { animation: zoom-in 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards; opacity: 0; }
        .animate-pulse-in { animation: pulse-in 2s ease-out 1s forwards; opacity: 0; }
      `}</style>

    </>
  );
}