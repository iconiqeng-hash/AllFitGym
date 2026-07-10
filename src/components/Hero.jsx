"use client";
import { motion } from "framer-motion";
import { Star, ArrowRight, Dumbbell, Users, Award, MapPin } from "lucide-react";

const stats = [
  { icon: Star, value: "4.9", label: "Google Rating", color: "text-gold" },
  { icon: Users, value: "1000+", label: "Active Members", color: "text-purple" },
  { icon: Award, value: "10+", label: "Expert Trainers", color: "text-purple" },
  { icon: Dumbbell, value: "50+", label: "Modern Machines", color: "text-purple" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-4rem)] overflow-x-hidden pt-8 sm:pt-10 lg:min-h-[calc(100svh-72px)] lg:pt-12"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/85 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple/[0.04] to-transparent" />
      </div>

      <div className="absolute top-1/3 left-[10%] w-[400px] h-[400px] bg-purple/[0.06] rounded-full blur-[200px]" />
      <div className="absolute bottom-1/3 right-[10%] w-[500px] h-[500px] bg-purple/[0.04] rounded-full blur-[200px]" />

      <div className="premium-container relative z-10 w-full pb-16 sm:pb-20 lg:pb-24 xl:pb-32">
        <div
          className="max-w-[720px] min-w-0"
          style={{
            padding: "clamp(12px, 3vw, 24px) clamp(8px, 2.5vw, 20px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex w-fit max-w-full flex-wrap items-start gap-x-4 gap-y-2 rounded-2xl border border-white/[0.1] bg-dark-100/70 shadow-lg shadow-black/25 backdrop-blur-xl sm:mb-8 sm:items-center sm:rounded-full"
            style={{ padding: "14px 20px" }}
          >
            <span className="flex min-w-0 items-start gap-2 sm:max-w-[26rem] sm:items-center">
              <Star className="h-3.5 w-3.5 shrink-0 fill-gold text-gold" />
              <span className="block min-w-0 whitespace-normal text-xs font-medium leading-snug text-text-secondary">
                4.9 Rated Gym in Gurgaon &bull; 146+ Reviews
              </span>
            </span>
            <span className="flex min-w-0 items-center gap-1.5">
              <MapPin className="h-3 w-3 shrink-0 text-text-muted" />
              <span className="block min-w-0 whitespace-normal text-xs leading-snug text-text-muted">
                Sushant Lok
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 max-w-full overflow-visible font-display text-[clamp(2.1rem,10.4vw,3rem)] font-bold leading-[1.08] tracking-[-0.015em] sm:mb-7 sm:text-[clamp(2.8rem,6vw,5rem)] sm:leading-[0.95] sm:tracking-[-0.03em]"
            style={{ padding: "0 4px" }}
          >
            <span className="text-white block">Transform</span>
            <span className="text-white block">Your Body.</span>
            <span className="gradient-text block">Transform Your Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-[520px] text-base leading-relaxed text-text-muted sm:text-lg"
            style={{ padding: "0 6px" }}
          >
            Gurgaon&apos;s Premium Fitness Destination with Expert Trainers,
            Modern Equipment, Personal Training &amp; Rehab Programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-col sm:mb-16 sm:flex-row"
            style={{
              padding: "clamp(8px, 2vw, 16px) clamp(10px, 3vw, 20px)",
              gap: "16px",
            }}
          >
            <a
              href="#pricing"
              className="btn-premium"
              style={{ padding: "14px 28px" }}
            >
              Book Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="btn-outline-premium"
              style={{ padding: "14px 28px" }}
            >
              View Memberships
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4"
            style={{ gap: "clamp(10px, 3vw, 14px)", marginTop: "24px" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="min-w-0 rounded-2xl transition-all duration-300 glass"
                style={{ padding: "clamp(14px, 4vw, 22px)" }}
              >
                <s.icon className={`w-4 h-4 ${s.color}`} style={{ marginBottom: "12px" }} />
                <div className="text-xl font-display font-bold text-white" style={{ marginBottom: "6px" }}>{s.value}</div>
                <div className="text-xs leading-snug text-text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-purple/30" />
        </motion.div>
      </div>
    </section>
  );
}
