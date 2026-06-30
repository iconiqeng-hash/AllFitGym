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
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
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

      <div className="relative z-10 premium-container pt-32 lg:pt-40 pb-24 lg:pb-32">
        <div className="max-w-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-10"
            style={{ marginTop: "40px" }}
          >
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            <span className="text-xs font-medium text-text-secondary">
              4.9 Rated Gym in Gurgaon &bull; 146+ Reviews
            </span>
            <MapPin className="w-3 h-3 text-text-muted ml-1" />
            <span className="text-xs text-text-muted">Sushant Lok</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-8"
          >
            <span className="text-white block">Transform</span>
            <span className="text-white block">Your Body.</span>
            <span className="gradient-text block">Transform Your Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-text-muted max-w-[520px] mb-12 leading-relaxed"
          >
            Gurgaon&apos;s Premium Fitness Destination with Expert Trainers,
            Modern Equipment, Personal Training &amp; Rehab Programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a href="#pricing" className="btn-premium !py-3.5 !px-8">
              Book Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" className="btn-outline-premium !py-3.5 !px-8">
              View Memberships
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4"
            style={{ gap: "14px", marginTop: "24px" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass rounded-2xl transition-all duration-300"
                style={{ padding: "22px" }}
              >
                <s.icon className={`w-4 h-4 ${s.color}`} style={{ marginBottom: "12px" }} />
                <div className="text-xl font-display font-bold text-white" style={{ marginBottom: "6px" }}>{s.value}</div>
                <div className="text-xs text-text-muted">{s.label}</div>
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
