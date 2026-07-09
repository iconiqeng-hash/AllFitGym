"use client";
import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Star, Globe } from "lucide-react";

const specializations = [
  "Strength & Conditioning Coach",
  "Weight Management Specialist",
  "Functional Training Expert",
  "Rehab & Recovery Specialist",
  "Yoga & Flexibility Coach",
  "Sports Performance Trainer",
  "Body Transformation Coach",
  "HIIT & Cardio Specialist",
];

const certifications = [
  "NASM-CPT",
  "ACE-CPT",
  "NSCA-CSCS",
  "ISSA-CPT",
  "ACSM-CEP",
  "NCCPT",
  "CSCS",
  "CF-L1",
];

const bios = [
  "Specializes in powerlifting, Olympic lifts, and progressive overload programming for all fitness levels.",
  "Expert in sustainable weight loss, metabolic conditioning, and personalized nutrition planning.",
  "Focuses on movement quality, mobility, and real-world fitness through functional training.",
  "Clinical approach to injury prevention, recovery protocols, and pain-free movement restoration.",
  "Mindful movement specialist blending flexibility, mobility, and breath work for holistic wellness.",
  "Performance-driven training for athletes focusing on speed, agility, power, and endurance.",
  "Holistic transformation coach combining strength training with lifestyle and nutrition coaching.",
  "High-energy cardio specialist expert in HIIT, circuit training, and fat loss optimization.",
];

function formatName(filename) {
  const name = filename.replace(/\.[^.]+$/, "");
  return name
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function hashIndex(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % max;
}

const imageModules = import.meta.glob("/public/images/**/*.{jpeg,jpg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const socialLinks = {
  anurag: "https://instagram.com/anurag_luxe",
  satyam: "https://instagram.com/Satyam__brahmann",
  arvind: "https://instagram.com/arvind_rvarma",
  keshav: "https://instagram.com/Dreamfitness_11",
  bhanu: "https://instagram.com/akki_sharma0052",
};

function getSocialLink(name) {
  const n = name.toLowerCase();
  for (const [key, url] of Object.entries(socialLinks)) {
    if (n.includes(key)) return url;
  }
  return "#";
}

function getTrainerRole(name) {
  return name.toLowerCase().includes("bhanu") ? "General Trainer" : "Personal Trainer";
}

function getExperienceYears(name, hash) {
  if (name === "Satyam Sharma") return 2;
  return 5 + (hash % 6);
}

function getRating(role, years) {
  if (role === "General Trainer") return "4.4";
  if (years <= 2) return "4.6";
  if (years <= 5) return "4.7";
  if (years <= 7) return "4.8";
  return "4.9";
}

function getReviewCount(role, years, hash) {
  if (role === "General Trainer") return 48;
  return 70 + years * 18 + hash * 6;
}

export default function Trainers() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  const trainers = useMemo(() => {
    return Object.entries(imageModules)
      .filter(([filepath]) => !filepath.includes("removebg-preview") && !filepath.includes("logo"))
      .map(([filepath, url]) => {
        const filename = filepath.split("/").pop();
        const name = formatName(filename);
        const h = hashIndex(name, 8);
        const role = getTrainerRole(name);
        const years = getExperienceYears(name, h);
        return {
          name,
          role,
          img: url,
          spec: specializations[h % specializations.length],
          exp: `${years} Years`,
          cert: certifications[h % certifications.length],
          rating: getRating(role, years),
          reviews: getReviewCount(role, years, h),
          bio: bios[h % bios.length],
        };
      })
  }, []);
  const isCarousel = trainers.length > 5;

  const containerClass = isCarousel
    ? "flex w-full max-w-full snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
    : "flex w-full max-w-full snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0 lg:grid-cols-3 xl:grid-cols-5";

  const cardClass = isCarousel
    ? "group relative w-full shrink-0 snap-center overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:w-[280px] lg:w-[320px]"
    : "group relative w-full shrink-0 snap-center overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:w-auto sm:shrink";

  return (
    <section id="trainers" ref={ref} className="overflow-hidden bg-dark-100 py-20 sm:py-24 lg:py-[120px]">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <div className="dot" />
            <span>Our Team</span>
          </div>
          <h2 className="section-heading">
            Meet Our <span className="gradient-text">Expert Trainers</span>
          </h2>
          <p
            className="section-subtext"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              marginTop: "16px",
              marginBottom: "24px",
              maxWidth: "none",
            }}
          >
            Certified professionals dedicated to helping you reach your fitness goals.
          </p>
        </motion.div>

        {trainers.length === 0 ? (
          <p className="text-center text-text-muted text-sm">
            No trainers found. Add images to the <code className="text-purple">/public/images/</code> folder.
          </p>
        ) : (
          <div className={containerClass}>
            {trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inview ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={cardClass}
                style={{ background: "#171A20" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-[#171A20]/30 to-transparent" />

                  <div
                    className={`absolute left-3 top-3 rounded-md text-[0.58rem] font-bold uppercase tracking-[0.06em] shadow-lg ${
                      t.role === "General Trainer"
                        ? "border border-gold/35 bg-gold text-dark shadow-gold/20"
                        : "border border-white/70 bg-white text-dark shadow-black/35"
                    }`}
                    style={{ padding: "3px 7px" }}
                  >
                    <span style={{ display: "block", padding: "0 1px" }}>
                      {t.role}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 glass rounded-lg px-2.5 py-1">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-xs font-medium text-white">{t.rating}</span>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#171A20] via-[#171A20]/90 to-transparent"
                    style={{ padding: "28px 24px 24px 24px" }}
                  >
                    <h3 className="mb-1.5 font-display text-base font-bold leading-snug text-white">{t.name}</h3>
                    <p className={`mb-1.5 text-xs font-semibold ${
                      t.role === "General Trainer" ? "text-gold" : "text-success"
                    }`}>
                      {t.role}
                    </p>
                    <p className="mb-1.5 text-xs leading-snug text-text-muted">{t.spec}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2.5">
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3 text-purple" />
                        <span className="text-xs text-purple font-medium">{t.cert}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-text-muted" />
                        <span className="text-xs text-text-muted">{t.exp}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ padding: "20px" }}
                >
                  <div
                    className="glass rounded-xl pointer-events-auto"
                    style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}
                  >
                    <p className="text-xs text-text-secondary leading-relaxed">
                      &ldquo;{t.bio}&rdquo;
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold fill-gold" />
                      <span className="text-xs text-text-muted">
                        {t.rating} &middot; {t.reviews} reviews
                      </span>
                    </div>
                    <div className="pt-0.5">
                      <a
                        href={getSocialLink(t.name)}
                        target={getSocialLink(t.name) !== "#" ? "_blank" : undefined}
                        rel={getSocialLink(t.name) !== "#" ? "noopener noreferrer" : undefined}
                        className="w-full flex items-center justify-center gap-1.5 glass rounded-lg text-xs font-medium text-text-secondary hover:text-white hover:bg-white/[0.06] transition-all"
                        style={{ paddingTop: "12px", paddingBottom: "12px" }}
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Social
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
