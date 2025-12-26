'use client';

import Header from '@/components/Header';
import FeaturedTours from '@/components/FeaturedTours';
import Reality from '@/components/Reality';
import WhyChooseDanang from '@/components/Reality';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header cố định */}
      <Header />

      {/* Featured Tours hexagon - section tiếp theo */}
      <FeaturedTours />
      <WhyChooseDanang />
      {/* <Reality /> */}


      {/* Các section khác sau này */}
    </main>
  );
}