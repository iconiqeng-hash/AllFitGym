"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check, Crown, ArrowRight, X } from "lucide-react";

const includedFeatures = [
  "Guidance from a General Trainer",
  "General Workout Chart",
  "Diet Chart & Basic Nutrition Guidance",
  "Full Access to All Gym Equipment & Facilities",
  "Access to Weekly Fitness Events & Challenges",
  "A Supportive Environment to Help You Stay Consistent and Reach Your Goals",
];

const plans = [
  {
    name: "1 Month",
    tagline: "Flexible Start",
    price: "3,000",
    duration: "1 month",
    popular: false,
  },
  {
    name: "3 Months",
    tagline: "Great Value",
    price: "6,000",
    duration: "3 months",
    popular: false,
  },
  {
    name: "6 Months",
    tagline: "Most Popular",
    price: "9,000",
    duration: "6 months",
    popular: true,
  },
  {
    name: "12 Months",
    tagline: "Best Value",
    price: "15,000",
    duration: "12 months",
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (!selectedPlan) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPlan(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlan]);

  return (
    <section id="pricing" ref={ref} className="overflow-hidden bg-dark-100 py-20 sm:py-24 lg:py-[120px]">
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
            Choose a duration that fits your schedule and goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 rounded-3xl border border-white/[0.06] bg-white/[0.02]"
          style={{
            padding: "clamp(28px, 6vw, 44px) clamp(20px, 5vw, 40px)",
          }}
        >
          <h3
            className="text-center font-display text-xl font-bold text-white sm:text-2xl"
            style={{ marginBottom: "12px" }}
          >
            What&apos;s Included?
          </h3>
          <p
            className="mx-auto max-w-2xl text-center text-sm text-text-secondary sm:text-base"
            style={{ marginBottom: "24px" }}
          >
            Every membership comes with everything you need to begin your fitness journey:
          </p>
          <ul
            className="mx-auto grid max-w-3xl sm:grid-cols-2"
            style={{ gap: "16px" }}
          >
            {includedFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start text-sm leading-6 text-text-secondary"
                style={{ gap: "12px", padding: "4px 8px" }}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple/15">
                  <Check className="h-3 w-3 text-purple" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div
          className="grid items-stretch gap-6 pt-7 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4"
          style={{ marginTop: "56px" }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative w-full rounded-3xl transition-all duration-500 ${
                p.popular
                  ? "bg-gradient-to-b from-dark-300 to-dark-200 border border-purple/[0.12] shadow-xl shadow-purple/[0.05] xl:scale-[1.03]"
                  : "glass hover:bg-white/[0.03]"
              }`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {p.popular && (
                <div
                  className="absolute left-1/2 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-purple to-purple-hover text-xs font-bold text-white shadow-lg shadow-purple/20"
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
                className="text-center flex-1 flex flex-col justify-between"
                style={{ padding: "clamp(34px, 8vw, 48px) clamp(20px, 6vw, 36px)" }}
              >
                <div>
                  <div className="text-xs font-semibold text-purple uppercase tracking-[0.15em] mb-4">
                    {p.tagline}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-7">{p.name}</h3>

                  <div className="mb-12 text-center">
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-lg font-medium text-text-muted">₹</span>
                      <span className="font-display text-5xl font-bold tracking-tight text-white lg:text-6xl">{p.price}</span>
                    </div>
                    <span className="mt-2 block text-sm text-text-muted">for {p.duration}</span>
                  </div>

                </div>

                <div className="mt-auto" style={{ paddingTop: "36px" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedPlan(p)}
                    className="inline-flex w-full items-center justify-center border border-purple/25 bg-purple/[0.07] text-sm font-semibold text-purple-hover transition-all hover:border-purple/50 hover:bg-purple/[0.12] hover:text-white"
                    style={{
                      padding: "14px 28px",
                      marginBottom: "14px",
                      borderRadius: "14px",
                    }}
                    aria-label={`Explore ${p.name} plan features`}
                  >
                    Explore Features
                  </button>
                  <a
                    href={`https://wa.me/919667949344?text=${encodeURIComponent(`Hi! I'm interested in the ${p.name} membership (₹${p.price}).`)}`}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedPlan(null);
            }}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="plan-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative max-h-[calc(100svh-2rem)] w-full max-w-md overflow-y-auto overflow-x-hidden rounded-3xl border border-white/[0.1] bg-dark-200 shadow-2xl shadow-black/60"
            >
              <div
                className="border-b border-white/[0.07]"
                style={{ padding: "clamp(24px, 7vw, 32px) clamp(20px, 7vw, 36px) clamp(22px, 6vw, 28px)" }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-text-muted transition-colors hover:bg-white/[0.05] hover:text-white"
                  aria-label="Close plan details"
                >
                  <X className="h-4 w-4" />
                </button>
                <div
                  className="text-xs font-semibold uppercase tracking-[0.15em] text-purple"
                  style={{ paddingRight: "56px", marginBottom: "10px" }}
                >
                  {selectedPlan.tagline}
                </div>
                <h3 id="plan-modal-title" className="font-display text-3xl font-bold leading-tight text-white">
                  {selectedPlan.name} Membership
                </h3>
                <div style={{ marginTop: "18px" }}>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base text-text-muted">₹</span>
                    <span className="font-display text-4xl font-bold text-white">{selectedPlan.price}</span>
                  </div>
                  <span className="mt-1 block text-sm text-text-muted">for {selectedPlan.duration}</span>
                </div>
              </div>

              <div style={{ padding: "clamp(24px, 7vw, 28px) clamp(20px, 7vw, 36px) clamp(28px, 8vw, 36px)" }}>
                <p className="text-sm font-semibold text-white" style={{ marginBottom: "22px" }}>What&apos;s Included</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-start text-sm leading-6 text-text-secondary" style={{ gap: "14px" }}>
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple/15">
                        <Check className="h-3 w-3 text-purple" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919667949344?text=${encodeURIComponent(`Hi! I'm interested in the ${selectedPlan.name} membership (₹${selectedPlan.price}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium !w-full"
                  style={{ marginTop: "32px", padding: "15px 28px" }}
                >
                  Choose {selectedPlan.name}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
