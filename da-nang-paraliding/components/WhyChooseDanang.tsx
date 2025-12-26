'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { percent: 95, label: 'Du khách hài lòng', color: 'cyan' },
  { percent: 88, label: 'Tour chất lượng cao', color: 'emerald' },
  { percent: 92, label: 'Điểm đến an toàn', color: 'teal' },
  { percent: 80, label: 'Tái thăm Đà Nẵng', color: 'blue' },
  { percent: 98, label: 'Trải nghiệm tuyệt vời', color: 'indigo' },
];

const honeycombItems = [
  { img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/86/2023/08/30021548/Kh%C3%A1nh-Phan.jpg', text: 'BÀ NÀ HILLS' },
  { img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/9a/d4/e8.jpg', text: 'CẦU VÀNG' },
  { img: 'https://vietnamnomad.com/wp-content/uploads/2020/02/My-Khe-Beach-Da-Nang-2023-Vietnamnomad.jpg', text: 'BÃI BIỂN MỸ KHÊ' },
  { img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/53/f3/76/caption.jpg?w=800&h=800&s=1', text: 'NGŨ HÀNH SƠN' },
  { img: 'https://media.cnn.com/api/v1/images/stellar/prod/140630220413-dragon-bridge-fire-breathing.jpg?q=w_3432,h_2287,x_0,y_0,c_fill', text: 'CẦU RỒNG' },
  { img: 'https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2021-12/shutterstock_1506184586_resize_0.jpg?itok=eUC22DbS', text: 'PHỐ CỔ HỘI AN' },
  { img: 'https://static.vinwonders.com/2022/09/Linh-Ung-Pagoda-4.jpg', text: 'CHÙA LINH ỨNG' },
  { img: 'https://cdn.forevervacation.com/uploads/media/images/uploaded_images/1674639365.jpg', text: 'BÁN ĐẢO SƠN TRÀ' },
  { img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/48/2024/08/16031426/Marble-Mountains-Da-Nang.png', text: 'DU LỊCH ĐÀ NẴNG' },
  { img: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1761129090/destination/dddl9mymv8wcjhoawsve.jpg', text: 'THÀNH PHỐ ĐÁNG SỐNG' },
  { img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9c/85/60/caption.jpg?w=1200&h=-1&s=1', text: 'TRẢI NGHIỆM TUYỆT VỜI' },
  { img: 'https://vietnam.travel/sites/default/files/inline-images/782A3225_resize.jpg', text: 'KHÁM PHÁ NGAY' },
];

export default function WhyChooseDanang() {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-6xl font-extrabold text-gray-900 mb-24"
        >
          Tại Sao Chọn Đà Nẵng?
        </motion.h2>

        {/* Desktop Honeycomb - bố cục đều, không chồng chéo */}
        <div className="hidden lg:block relative max-w-7xl mx-auto h-[960px] mb-32">
          <div className="absolute inset-0 flex items-center justify-center">
            {honeycombItems.map((item, index) => {
              // Vị trí thủ công chính xác, đều đặn, không chồng
              const positions = [
                { top: '8%', left: '28%' },   // 0
                { top: '6%', left: '50%' },    // 1
                { top: '22%', left: '62%' },   // 2
                { top: '42%', left: '62%' },   // 3
                { top: '58%', left: '50%' },   // 4
                { top: '42%', left: '28%' },   // 5
                { top: '22%', left: '16%' },   // 6
                { top: '6%', left: '38%' },    // 7 (giữa trên)
                { top: '74%', left: '38%' },   // 8 (dưới giữa)
                { top: '58%', left: '16%' },   // 9
                { top: '74%', left: '16%' },   // 10
                { top: '74%', left: '62%' },   // 11
              ];

              return (
                <motion.div
                  key={index}
                  style={{ top: positions[index].top, left: positions[index].left }}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.7 }}
                  whileHover={{ scale: 1.12, zIndex: 50 }}
                >
                  <div className="hexagon-large group">
                    <Image src={item.img} alt={item.text} fill className="object-cover" />
                    <div className="overlay-large">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-2xl">
                        {item.text}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile - hexagon nhỏ hơn, ngắn gọn, xếp lưới đẹp */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-20 px-4">
          {honeycombItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="hexagon-mobile group">
                <Image src={item.img} alt={item.text} fill className="object-cover" />
                <div className="overlay-mobile">
                  <p className="text-base md:text-lg font-bold text-white drop-shadow-lg">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div ref={ref} className="mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-xl md:text-2xl text-gray-600 mb-16"
          >
            Một vài con số ấn tượng
          </motion.p>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {stats.map((stat, index) => (
              <StatCircle key={index} percent={stat.percent} label={stat.label} color={stat.color} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop hexagon lớn - đều và đẹp */
        .hexagon-large {
          width: 260px;
          height: 280px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s;
        }

        /* Mobile hexagon nhỏ gọn hơn */
        .hexagon-mobile {
          width: 100%;
          aspect-ratio: 0.866 / 1;
          max-width: 200px;
          margin: 0 auto;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .overlay-large,
        .overlay-mobile {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%);
          transition: background 0.4s ease;
        }

        .group:hover .overlay-large,
        .group:hover .overlay-mobile {
          background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%);
        }
      `}</style>
    </section>
  );
}

// Vòng tròn thống kê - viền ngoài chạy quanh (xoay 360° liên tục khi vào view)
function StatCircle({ percent, label, color, inView }: { percent: number; label: string; color: string; inView: boolean }) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      // Viền ngoài xoay liên tục
      controls.start({
        rotate: 360,
        transition: { duration: 20, ease: 'linear', repeat: Infinity },
      });

      // Đếm số từ 0 đến percent
      let current = 0;
      const increment = percent / 80; // ~2 giây
      const timer = setInterval(() => {
        current += increment;
        if (current >= percent) {
          setCount(percent);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 25);

      return () => clearInterval(timer);
    }
  }, [inView, percent, controls]);

  const colorClass = `text-${color}-500`;

  return (
    <div className="relative w-44 h-44 md:w-52 md:h-52">
      {/* Background circle */}
      <svg className="w-full h-full -rotate-90">
        <circle cx="50%" cy="50%" r="44%" stroke="#e2e8f0" strokeWidth="14" fill="none" />

        {/* Progress circle - chạy theo % */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="44%"
          stroke="currentColor"
          strokeWidth="14"
          fill="none"
          className={colorClass}
          strokeDasharray="283"
          initial={{ strokeDashoffset: 283 }}
          animate={{ strokeDashoffset: inView ? 283 - (percent / 100) * 283 : 283 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          strokeLinecap="round"
        />

        {/* Outer rotating ring - viền ngoài chạy quanh */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="44%"
          stroke="currentColor"
          strokeWidth="14"
          fill="none"
          className={`${colorClass} opacity-60`}
          animate={controls}
          strokeDasharray="20 263"
          strokeLinecap="round"
        />
      </svg>

      {/* Text center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span className={`text-5xl md:text-6xl font-extrabold ${colorClass}`}>
          {count}%
        </motion.span>
        <span className="text-sm md:text-base text-gray-700 text-center mt-3 max-w-32 leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
}