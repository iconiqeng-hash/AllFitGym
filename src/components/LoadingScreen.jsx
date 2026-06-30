"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      onFinish();
      return;
    }

    const done = setTimeout(onFinish, 3000);
    return () => clearTimeout(done);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div
        className="absolute top-1/4 -left-[10%] w-[300px] h-[300px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-[10%] w-[350px] h-[350px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Animated Loader Graphic */}
        <div className="relative w-[180px] h-[180px] flex items-center justify-center mb-8">
          <svg width="180" height="180" viewBox="0 0 180 180" className="relative z-10">
            <defs>
              {/* Chrome Handle Cylinder Gradient */}
              <linearGradient id="chromeHandle" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="15%" stopColor="#f8fafc" />
                <stop offset="30%" stopColor="#cbd5e1" />
                <stop offset="55%" stopColor="#475569" />
                <stop offset="80%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              {/* Matte Black Plates Cylinder Gradient */}
              <linearGradient id="matteBlackPlates" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="12%" stopColor="#374151" />
                <stop offset="30%" stopColor="#1f2937" />
                <stop offset="55%" stopColor="#0f172a" />
                <stop offset="85%" stopColor="#374151" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>

              {/* Gold/Bronze Collar Gradient */}
              <linearGradient id="goldCollar" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="20%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="80%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>

              {/* Glowing Purple Filter */}
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Ring */}
            <circle
              cx="90"
              cy="90"
              r="75"
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="4"
            />

            {/* Glowing Progress Ring */}
            <motion.circle
              cx="90"
              cy="90"
              r="75"
              fill="none"
              stroke="#a855f7"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#neonGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />

            {/* Rotating Dumbbell Group */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 90 90"
                to="360 90 90"
                dur="3.5s"
                repeatCount="indefinite"
              />
              {/* Handle (Chrome shaft in center) */}
              <rect x="55" y="86" width="70" height="8" rx="1.5" fill="url(#chromeHandle)" stroke="#09090b" strokeWidth="1" />

              {/* Knurling Texture on Handle */}
              {[...Array(14)].map((_, idx) => (
                <line
                  key={idx}
                  x1={58 + idx * 4}
                  y1="87"
                  x2={58 + idx * 4}
                  y2="93"
                  stroke="rgba(0, 0, 0, 0.25)"
                  strokeWidth="0.8"
                />
              ))}

              {/* Left Weight Plates */}
              {/* Large Outer Plate */}
              <rect x="42" y="66" width="10" height="48" rx="3.5" fill="url(#matteBlackPlates)" stroke="#09090b" strokeWidth="1.5" />
              {/* Highlights on Large Plate */}
              <rect x="43" y="67" width="2" height="46" rx="1" fill="#ffffff" opacity="0.08" />

              {/* Medium Plate */}
              <rect x="32" y="71" width="8" height="38" rx="3" fill="url(#matteBlackPlates)" stroke="#09090b" strokeWidth="1.5" />
              <rect x="33" y="72" width="2" height="36" rx="1" fill="#ffffff" opacity="0.08" />

              {/* Small Plate */}
              <rect x="24" y="76" width="6" height="28" rx="2" fill="url(#matteBlackPlates)" stroke="#09090b" strokeWidth="1.5" />
              <rect x="25" y="77" width="1" height="26" rx="0.5" fill="#ffffff" opacity="0.08" />

              {/* Collar (Gold contrast accent) */}
              <rect x="52" y="78" width="3" height="24" rx="1" fill="url(#goldCollar)" stroke="#09090b" strokeWidth="0.5" />

              {/* Right Weight Plates */}
              {/* Large Outer Plate */}
              <rect x="128" y="66" width="10" height="48" rx="3.5" fill="url(#matteBlackPlates)" stroke="#09090b" strokeWidth="1.5" />
              <rect x="129" y="67" width="2" height="46" rx="1" fill="#ffffff" opacity="0.08" />

              {/* Medium Plate */}
              <rect x="140" y="71" width="8" height="38" rx="3" fill="url(#matteBlackPlates)" stroke="#09090b" strokeWidth="1.5" />
              <rect x="141" y="72" width="2" height="36" rx="1" fill="#ffffff" opacity="0.08" />

              {/* Small Plate */}
              <rect x="150" y="76" width="6" height="28" rx="2" fill="url(#matteBlackPlates)" stroke="#09090b" strokeWidth="1.5" />
              <rect x="151" y="77" width="1" height="26" rx="0.5" fill="#ffffff" opacity="0.08" />

              {/* Collar */}
              <rect x="125" y="78" width="3" height="24" rx="1" fill="url(#goldCollar)" stroke="#09090b" strokeWidth="0.5" />

              {/* Chrome Ends (Bolts) */}
              <circle cx="21" cy="90" r="3.5" fill="url(#chromeHandle)" stroke="#09090b" strokeWidth="0.5" />
              <circle cx="159" cy="90" r="3.5" fill="url(#chromeHandle)" stroke="#09090b" strokeWidth="0.5" />
            </g>
          </svg>

          {/* Orbiting Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-purple"
              style={{
                boxShadow: "0 0 8px #a855f7",
                top: "50%",
                left: "50%",
                marginTop: "-3px",
                marginLeft: "-3px",
              }}
              animate={{
                x: [
                  Math.cos((i * 60 * Math.PI) / 180) * 75,
                  Math.cos(((i * 60 + 120) * Math.PI) / 180) * 85,
                  Math.cos(((i * 60 + 240) * Math.PI) / 180) * 75,
                  Math.cos(((i * 60 + 360) * Math.PI) / 180) * 75,
                ],
                y: [
                  Math.sin((i * 60 * Math.PI) / 180) * 75,
                  Math.sin(((i * 60 + 120) * Math.PI) / 180) * 85,
                  Math.sin(((i * 60 + 240) * Math.PI) / 180) * 75,
                  Math.sin(((i * 60 + 360) * Math.PI) / 180) * 75,
                ],
                scale: [0.8, 1.4, 0.6, 0.8],
                opacity: [0.4, 1, 0.3, 0.4],
              }}
              transition={{
                duration: 3.2 + i * 0.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Minimal Luxury Brand Typography */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-4 flex items-center justify-center">
            <span className="font-display text-2xl font-bold tracking-wider text-white">
              ALL FIT{" "}
              <span style={{ color: "#a855f7" }}>GYM</span>
            </span>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[1.5px] w-24 origin-center rounded-full mb-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(168,85,247,0.5), transparent)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/30"
          >
            Train Strong. Live Better.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
