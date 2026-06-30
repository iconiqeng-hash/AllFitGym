"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Arun Mehta", avatar: "AM", text: "Good balance of machines and free weights. Staff is friendly and helpful. The trainers really know their stuff and push you to your limits in a supportive way.", rating: 5, program: "Personal Training" },
  { name: "Deepa Nair", avatar: "DN", text: "Clean environment and positive atmosphere. I've been coming here for 6 months and the results speak for themselves. The functional training area is fantastic.", rating: 5, program: "Weight Loss" },
  { name: "Karthik Reddy", avatar: "KR", text: "One of the best gyms in Gurgaon. Premium equipment, great trainers, and a motivating vibe. The rehab program helped me recover from a back injury.", rating: 5, program: "Rehab Program" },
  { name: "Priyanka Joshi", avatar: "PJ", text: "The personal training at ALL FIT GYM is top-notch. My trainer created a customized plan that perfectly fits my schedule and goals. Highly recommended!", rating: 5, program: "Muscle Building" },
  { name: "Saurabh Tiwari", avatar: "ST", text: "Amazing gym with world-class facilities. The cardio zone has the latest machines and the strength area is always well-maintained. Best investment in my health.", rating: 5, program: "Strength Training" },
  { name: "Meera Singh", avatar: "MS", text: "I joined ALL FIT GYM for post-pregnancy fitness and the trainers were incredibly supportive. The rehab programs are well-structured and effective.", rating: 5, program: "Rehab Program" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });
  const [cur, setCur] = useState(0);
  const [pp, setPp] = useState(3);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth < 640) setPp(1);
      else if (window.innerWidth < 1024) setPp(2);
      else setPp(3);
    };
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  const max = Math.max(0, testimonials.length - pp);
  const next = () => setCur((p) => Math.min(p + 1, max));
  const prev = () => setCur((p) => Math.max(p - 1, 0));

  return (
    <section id="testimonials" ref={ref} className="py-24 lg:py-[120px] bg-dark-100">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <div className="dot" />
            <span>Testimonials</span>
          </div>
          <h2 className="section-heading">
            What Our <span className="gradient-text">Members Say</span>
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
            Real reviews from real members who transformed their lives.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 lg:gap-8"
            animate={{ x: `-${cur * (100 / pp)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `calc(${100 / pp}% - ${(pp - 1) * 32 / pp}px)` }}
              >
                <div
                  className="glass rounded-2xl h-full flex flex-col transition-all duration-300 hover:bg-white/[0.03]"
                  style={{ padding: "44px 36px" }}
                >
                  <div className="flex items-center gap-5 mb-6 shrink-0" style={{ padding: "4px 0" }}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center text-white font-bold text-base shrink-0">
                      {t.avatar}
                    </div>
                    <div style={{ paddingLeft: "2px" }}>
                      <div className="text-base font-bold text-white" style={{ marginBottom: "6px" }}>{t.name}</div>
                      <div className="text-xs text-text-muted">{t.program}</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6 shrink-0" style={{ padding: "4px 0" }}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>

                  <Quote className="w-5 h-5 text-purple/20 mb-5 shrink-0" />

                  <p className="text-sm text-text-secondary leading-relaxed flex-1" style={{ paddingBottom: "12px" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between shrink-0 mt-8 pt-6 border-t border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-xs text-text-muted">Google Review</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gold/10 px-2.5 py-1 rounded-full">
                      <Star className="w-3 h-3 text-gold fill-gold" />
                      <span className="text-xs font-medium text-gold">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            disabled={cur === 0}
            className="w-10 h-10 rounded-full glass flex items-center justify-center transition-all hover:bg-white/[0.06] disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === cur ? "w-7 bg-purple" : "w-1.5 bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={cur >= max}
            className="w-10 h-10 rounded-full glass flex items-center justify-center transition-all hover:bg-white/[0.06] disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
