"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Users, Dumbbell, Award } from "lucide-react";

const items = [
  { icon: Star, value: "4.9", label: "Google Rating", desc: "Top-rated gym in Gurgaon", color: "text-gold", bg: "bg-gold/10" },
  { icon: Users, value: "1000+", label: "Active Members", desc: "Growing fitness community", color: "text-purple", bg: "bg-purple/10" },
  { icon: Dumbbell, value: "50+", label: "Modern Machines", desc: "Latest premium equipment", color: "text-purple", bg: "bg-purple/10" },
  { icon: Award, value: "10+", label: "Certified Trainers", desc: "Professional coaches", color: "text-success", bg: "bg-success/10" },
];

export default function Stats() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-[120px] bg-dark-100">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            By the <span className="gradient-text">Numbers</span>
          </h2>
          <p
            className="section-subtext"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              marginTop: "16px",
            }}
          >
            A decade of excellence in fitness
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-2xl text-center transition-all duration-300 hover:-translate-y-0.5"
              style={{ padding: "48px 32px" }}
            >
              <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="text-2xl lg:text-3xl font-display font-bold text-white mb-2">
                {item.value}
              </div>
              <div className="text-sm font-medium text-text-secondary mb-2.5">{item.label}</div>
              <div className="text-xs text-text-muted leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
