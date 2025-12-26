'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { percent: 95, label: 'Du khách hài lòng', color: 'cyan' },
  { percent: 88, label: 'Tour chất lượng cao', color: 'emerald' },
  { percent: 92, label: 'Điểm đến an toàn', color: 'teal' },
  { percent: 80, label: 'Tái thăm Đà Nẵng', color: 'blue' },
];

const honeycombItems = [
  { img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/86/2023/08/30021548/Kh%C3%A1nh-Phan.jpg', text: 'BÀ NÀ HILLS\n& CẦU VÀNG' },
  { img: 'https://vietnamnomad.com/wp-content/uploads/2020/02/My-Khe-Beach-Da-Nang-2023-Vietnamnomad.jpg', text: 'BÃI BIỂN\nMỸ KHÊ' },
  { img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/53/f3/76/caption.jpg?w=800&h=800&s=1', text: 'NGŨ HÀNH\nSƠN' },
  { img: 'https://media.cnn.com/api/v1/images/stellar/prod/140630220413-dragon-bridge-fire-breathing.jpg', text: 'CẦU RỒNG' },
  { img: 'https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2021-12/shutterstock_1506184586_resize_0.jpg', text: 'PHỐ CỔ\nHỘI AN' },
  { img: 'https://static.vinwonders.com/2022/09/Linh-Ung-Pagoda-4.jpg', text: 'CHÙA\nLINH ỨNG' },
  { img: 'https://cdn.forevervacation.com/uploads/media/images/uploaded_images/1674639365.jpg', text: 'BÁN ĐẢO\nSƠN TRÀ' },
  { img: 'https://vietnam.travel/sites/default/files/inline-images/782A3225_resize.jpg', text: 'THÀNH PHỐ\nĐÁNG SỐNG' },
  { img: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1761129090/destination/dddl9mymv8wcjhoawsve.jpg', text: 'TRẢI NGHIỆM\nTUYỆT VỜI' },
  { img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9c/85/60/caption.jpg?w=1200', text: 'KHÁM PHÁ\nNGAY' },
];

export default function DanangHoneycomb() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <h2 className="text-center text-5xl font-extrabold mb-20">
        Khám Phá Du Lịch Đà Nẵng
      </h2>

      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:flex justify-center">
        <div className="grid grid-cols-4 gap-x-2 gap-y-1">
          {honeycombItems.map((item, index) => (
            <motion.div
              key={index}
              className={`
                ${index >= 10 && index < 10 ? 'translate-x-[250px]' : ''}
                ${index >= 10 ? 'translate-x-[240px]' : ''}
              `}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.08, zIndex: 10 }}
            >
              <div className="hex group">
                <Image src={item.img} alt={item.text} fill className="object-cover" />
                <div className="overlay">
                  <p className="hex-text">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 px-6">
        {honeycombItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <div className="hex-mobile group">
              <Image src={item.img} alt={item.text} fill className="object-cover" />
              <div className="overlay">
                <p className="hex-text mobile">{item.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== STATS ===== */}
<div className="mt-28">
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center text-xl md:text-2xl text-gray-600 mb-16"
  >
    Một vài con số ấn tượng
  </motion.p>

  <div className="flex flex-wrap justify-center gap-12 md:gap-16">
    {stats.map((stat, index) => (
      <StatCircle key={index} {...stat} />
    ))}
  </div>
</div>


      <style jsx>{`
        .hex {
          width: 220px;
          height: 240px;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.3);
        }

        .hex-mobile {
          width: 100%;
          max-width: 200px;
          aspect-ratio: 0.866 / 1;
          margin: 0 auto;
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.25);
        }

        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.9)
          );
          transition: 0.4s ease;
        }

        .group:hover .overlay {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.95)
          );
        }

        .hex-text {
          color: white;
          font-weight: 800;
          text-align: center;
          white-space: pre-line;
          line-height: 1.3;
          font-size: 1.05rem;
          padding: 0 12px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.6);
        }

        .hex-text.mobile {
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}

function StatCircle({
  percent,
  label,
  color,
}: {
  percent: number;
  label: string;
  color: string;
}) {
  return (
    <div className="relative w-44 h-44">
      <svg className="w-full h-full -rotate-90">
        <circle cx="50%" cy="50%" r="44%" stroke="#e5e7eb" strokeWidth="14" fill="none" />
        <motion.circle
          cx="50%"
          cy="50%"
          r="44%"
          stroke="currentColor"
          strokeWidth="14"
          fill="none"
          strokeDasharray="283"
          initial={{ strokeDashoffset: 283 }}
          whileInView={{ strokeDashoffset: 283 - (percent / 100) * 283 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className={`text-${color}-500`}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-extrabold text-${color}-500`}>
          {percent}%
        </span>
        <span className="text-sm text-gray-700 mt-2 text-center">{label}</span>
      </div>
    </div>
  );
}