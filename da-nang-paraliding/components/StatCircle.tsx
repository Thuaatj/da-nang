import { motion } from "framer-motion";

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
    <div className="relative w-44 h-44 md:w-52 md:h-52">
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="44%"
          stroke="#e5e7eb"
          strokeWidth="14"
          fill="none"
        />

        <motion.circle
          cx="50%"
          cy="50%"
          r="44%"
          stroke="currentColor"
          strokeWidth="14"
          fill="none"
          strokeDasharray="283"
          initial={{ strokeDashoffset: 283 }}
          whileInView={{
            strokeDashoffset: 283 - (percent / 100) * 283,
          }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className={`text-${color}-500`}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl md:text-5xl font-extrabold text-${color}-500`}>
          {percent}%
        </span>
        <span className="text-sm md:text-base text-gray-700 text-center mt-2 max-w-[120px]">
          {label}
        </span>
      </div>
    </div>
  );
}
