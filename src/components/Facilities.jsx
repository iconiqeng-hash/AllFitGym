"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Zap, Target, UserCheck, HeartPulse, Lock } from "lucide-react";

const facilities = [
  { icon: Dumbbell, title: "Strength Zone", desc: "Premium free weights, barbells, and strength machines for serious lifters.", img: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&q=85" },
  { icon: Zap, title: "Cardio Zone", desc: "Latest treadmills, ellipticals, bikes and rowing machines with personal entertainment.", img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=85" },
  { icon: Target, title: "Functional Training", desc: "Dedicated space with kettlebells, TRX, battle ropes and agility equipment.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85" },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one sessions with certified trainers tailored to your specific goals.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85" },
  { icon: HeartPulse, title: "Rehabilitation", desc: "Specialized recovery and rehab programs supervised by experienced experts.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85" },
  { icon: Lock, title: "Locker Facilities", desc: "Secure lockers, clean changing rooms and premium shower facilities.", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=85" },
];

export default function Facilities() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="facilities"
      ref={ref}
      className="bg-dark-100"
      style={{
        paddingTop: "clamp(30px, 3vw, 50px)",
        paddingBottom: "clamp(40px, 4vw, 60px)"
      }}
    >
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit ">
            <div className="dot" />
            <span>Our Facilities</span>
          </div>
          <h2 className="section-heading">
            World-Class <span className="gradient-text">Facilities</span>
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
            Everything you need for a complete fitness experience, under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              style={{ background: "#171A20" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-[#171A20]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center shadow-lg">
                  <f.icon className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="px-6 pb-7 -mt-1">
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
