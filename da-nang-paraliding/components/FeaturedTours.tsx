'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['Núi non', 'Thành phố', 'Biển cả'];

const data = {
  'Núi non': {
    background:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
    items: [
      { name: 'Bà Nà Hills', sub: 'Khu du lịch trên mây', img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/86/2023/08/30021548/Kh%C3%A1nh-Phan.jpg' },
      { name: 'Cầu Vàng', sub: 'Biểu tượng Đà Nẵng', img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/9a/d4/e8.jpg' },
      { name: 'Ngũ Hành Sơn', sub: 'Danh thắng tâm linh', img: 'https://vietnamstory.in/wp-content/uploads/2024/07/Bana-hills-400x267.jpeg' },
      { name: 'Sơn Trà', sub: 'Lá phổi xanh', img: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1975088879569529' },
      { name: 'Hội An', sub: 'Phố cổ di sản', img: 'https://vietnammarveltravel.com/wp-content/uploads/2025/07/490735504_24074115268843394_8952654598402239392_n-400x300.jpg' },
      { name: 'Chùa Linh Ứng', sub: 'Tượng Phật lớn nhất', img: 'https://cdn.prod.website-files.com/60f7b6bdcbc1d9f3f65c3519/65f8f2c764d6556cb8614746_main%20(tiny).webp' },
      { name: 'Rừng Bà Nà', sub: 'Thiên nhiên nguyên sinh', img: 'https://vietnamstory.in/wp-content/uploads/2025/08/entrance-fee-marble-mountain-quite-low.jpg' },
    ],
  },
  'Thành phố': { background: '', items: [] },
  'Biển cả': { background: '', items: [] },
};

export default function FeaturedTours() {
  const [activeTab, setActiveTab] = useState<'Núi non' | 'Thành phố' | 'Biển cả'>('Núi non');
  const currentData = data[activeTab];

  // Desktop giữ nguyên
  const HEX_W_DESKTOP = 380;
  const HEX_H_DESKTOP = 392;
  const GAP_X_DESKTOP = -30;
  const GAP_Y_DESKTOP = 30;

  const desktopPositions = [
    { top: 0, left: HEX_W_DESKTOP + GAP_X_DESKTOP },
    { top: 0, left: 2 * (HEX_W_DESKTOP + GAP_X_DESKTOP) },
    { top: 0, left: 3 * (HEX_W_DESKTOP + GAP_X_DESKTOP) },
    { top: HEX_H_DESKTOP - GAP_Y_DESKTOP - 50, left: (HEX_W_DESKTOP + GAP_X_DESKTOP) / 2 },
    { top: HEX_H_DESKTOP - GAP_Y_DESKTOP - 50, left: (HEX_W_DESKTOP + GAP_X_DESKTOP) * 1.5 },
    { top: HEX_H_DESKTOP - GAP_Y_DESKTOP - 50, left: (HEX_W_DESKTOP + GAP_X_DESKTOP) * 2.5 },
  ];

  // Mobile honeycomb compact
  const HEX_W_MOBILE = 160;
  const HEX_H_MOBILE = 170;
  const GAP_X_MOBILE = -20;
  const GAP_Y_MOBILE = 20;

  const mobilePositions = [
    { top: 0, left: HEX_W_MOBILE / 2 },
    { top: 0, left: HEX_W_MOBILE * 1.5 + GAP_X_MOBILE },
    { top: HEX_H_MOBILE - GAP_Y_MOBILE, left: 0 },
    { top: HEX_H_MOBILE - GAP_Y_MOBILE, left: HEX_W_MOBILE + GAP_X_MOBILE },
    { top: (HEX_H_MOBILE - GAP_Y_MOBILE) * 2, left: HEX_W_MOBILE / 2 },
    { top: (HEX_H_MOBILE - GAP_Y_MOBILE) * 2, left: HEX_W_MOBILE * 1.5 + GAP_X_MOBILE },
    { top: (HEX_H_MOBILE - GAP_Y_MOBILE) * 3, left: HEX_W_MOBILE / 2 + GAP_X_MOBILE / 2 + HEX_W_MOBILE / 2 },
  ];

  return (
    <section className="relative py-12 md:py-18">
      {/* Background full height + extra để bao phủ hết honeycomb */}
      <div className="absolute inset-0">
        <Image
          src={currentData.background || '/placeholder.jpg'}
          alt="bg"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-16 pt-12 md:pt-8">
          <div className="flex gap-6 sm:gap-10 bg-white/10 backdrop-blur-xl rounded-full px-6 sm:px-8 py-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`text-lg sm:text-xl font-bold transition ${
                  activeTab === tab ? 'text-cyan-300' : 'text-white/70 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-12 md:mb-20 px-4">
          Featured Tours Đà Nẵng
        </h2>

        {/* Desktop Honeycomb - đẩy xuống dưới tiêu đề */}
        <div className="hidden md:flex justify-center mt-8 mb-32">
          <div className="relative w-[1600px] h-[700px]">
            {currentData.items.map((item, index) => (
              <motion.div
                key={item.name}
                style={desktopPositions[index] || {}}
                className="absolute"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
                whileHover={{ scale: 1.1, y: -4, zIndex: 20 }}
              >
                <div className="hexagon group">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-125"
                  />
                  <div className="overlay">
                    <h3 className="title-main">{item.name}</h3>
                    <p className="title-sub">{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Honeycomb Compact - trên nền background núi */}
        <div className="md:hidden flex justify-center pb-32">
          <div className="relative w-full max-w-[380px] h-[680px]">
            {currentData.items.map((item, index) => (
              <motion.div
                key={item.name}
                style={mobilePositions[index] || { top: 0, left: 0 }}
                className="absolute"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="hexagon-mobile group">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-125"
                  />
                  <div className="overlay-mobile">
                    <h3 className="title-main-mobile">{item.name}</h3>
                    <p className="title-sub-mobile">{item.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hexagon {
          width: 380px;
          height: 392px;
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
        }

        .hexagon-mobile {
          width: ${HEX_W_MOBILE}px;
          height: ${HEX_H_MOBILE}px;
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
        }

        .overlay, .overlay-mobile {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding-bottom: 30px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
          transition: all 0.5s ease;
        }

        .title-main { font-size: 1.35rem; font-weight: 800; color: white; transition: transform 0.45s ease; }
        .title-sub { font-size: 1.05rem; font-weight: 500; color: white; opacity: 0; transform: translateY(34px); transition: all 0.45s ease; }

        .title-main-mobile { font-size: 1rem; font-weight: 800; color: white; transition: transform 0.45s ease; }
        .title-sub-mobile { font-size: 0.8rem; font-weight: 500; color: white; opacity: 0; transform: translateY(20px); transition: all 0.45s ease; }

        .group:hover .title-main,
        .group:hover .title-main-mobile { transform: translateY(-16px); }

        .group:hover .title-sub,
        .group:hover .title-sub-mobile { opacity: 1; transform: translateY(-4px); }
      `}</style>
    </section>
  );
}