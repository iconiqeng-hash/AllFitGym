"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    tagline: "Essential Access",
    price: "1,499",
    features: ["Full Gym Access", "Cardio Zone", "Strength Area", "Locker Facility", "Free Wi-Fi"],
    popular: false,
  },
  {
    name: "Pro",
    tagline: "Most Popular",
    price: "2,499",
    features: ["Everything in Basic", "Functional Training", "Diet Guidance", "Group Classes", "Steam Room Access", "Progress Tracking"],
    popular: true,
  },
  {
    name: "Elite",
    tagline: "Premium Experience",
    price: "4,999",
    features: ["Everything in Pro", "Personal Trainer", "Customized Fitness Plan", "Rehab Programs", "Priority Booking", "Monthly Body Analysis", "Premium Locker"],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-24 lg:py-[120px] bg-dark">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <div className="dot" />
            <span>Membership Plans</span>
          </div>
          <h2 className="section-heading">
            Choose Your <span className="gradient-text">Fitness Plan</span>
          </h2>
          <p
            className="section-subtext"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              marginTop: "16px",
              marginBottom: "32px",
            }}
          >
            Flexible plans designed to fit your goals and budget.
          </p>
        </motion.div>

        <div
          className="flex flex-wrap gap-6 lg:gap-8 w-full mx-auto items-start"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-3xl transition-all duration-500 ${
                p.popular
                  ? "bg-gradient-to-b from-dark-300 to-dark-200 border border-purple/[0.12] shadow-xl shadow-purple/[0.05] xl:scale-[1.03] xl:-my-2"
                  : "glass hover:bg-white/[0.03]"
              }`}
              style={{ width: "100%", maxWidth: "350px" }}
            >
              {p.popular && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple to-purple-hover text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg shadow-purple/20 whitespace-nowrap"
                  style={{
                    padding: "10px 24px",
                    top: "-20px",
                  }}
                >
                  <Crown className="w-3.5 h-3.5" />
                  Recommended
                </div>
              )}

              <div
                className="text-center"
                style={{ padding: "48px 36px" }}
              >
                <div className="text-xs font-semibold text-purple uppercase tracking-[0.15em] mb-4">
                  {p.tagline}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-7">{p.name}</h3>

                <div className="flex items-baseline justify-center gap-1.5 mb-10">
                  <span className="text-lg text-text-muted font-medium">₹</span>
                  <span className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">{p.price}</span>
                  <span className="text-base text-text-muted">/mo</span>
                </div>

                <ul className="space-y-4.5 mb-12 flex flex-col items-center">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3.5 py-1">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        p.popular ? "bg-purple/15" : "bg-white/5"
                      }`}>
                        <Check className={`w-3 h-3 ${p.popular ? "text-purple" : "text-text-muted"}`} />
                      </div>
                      <span className="text-sm text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/919667949344?text=Hi!%20I%20want%20to%20join%20ALL%20FIT%20GYM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center ${
                    p.popular ? "btn-premium !w-full" : "btn-outline-premium !w-full"
                  }`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 28px",
                    borderRadius: "14px",
                  }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
