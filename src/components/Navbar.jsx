"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Trainers", href: "#trainers" },
  { name: "Membership", href: "#pricing" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-16 lg:h-[72px] flex items-center"
      style={{
        background: scrolled
          ? "rgba(15,17,21,0.85)"
          : "rgba(15,17,21,0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div className="premium-container flex items-center justify-between w-full">
        <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
          <div className="rounded-xl flex items-center justify-center overflow-hidden" style={{ width: "72px", height: "72px" }}>
            <img
              src="/images/93ee5950-3ef0-4cbb-981f-2562cb0c55d8-removebg-preview.png"
              alt="Logo"
              className="w-full h-full object-contain"
              style={{ transform: "scale(2.5)", transformOrigin: "center" }}
            />
          </div>
          <span className="font-display font-bold tracking-tight text-white text-base">
            ALL FIT <span className="gradient-text">GYM</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center justify-center flex-1 gap-3">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  setActive(l.href.slice(1));
                }}
                className="relative px-6 py-2 text-sm font-medium transition-all duration-300"
                style={{ color: isActive ? "white" : "rgba(255,255,255,0.6)" }}
              >
                {l.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full"
                    style={{ background: "linear-gradient(135deg, #8B5CF6, #A855F7)" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="#pricing"
            className="btn-premium !py-2.5 !px-6 text-xs"
          >
            Book Free Trial
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 lg:hidden z-40"
            style={{ background: "rgba(9,9,11,0.98)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full px-6 pt-8 pb-10"
            >
              <div className="flex-1 space-y-1">
                {links.map((l, i) => {
                  const isActive = active === l.href.slice(1);
                  return (
                    <motion.a
                      key={l.name}
                      href={l.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      onClick={() => {
                        setOpen(false);
                        setActive(l.href.slice(1));
                      }}
                      className="flex items-center gap-3 px-4 py-4 text-base font-medium rounded-2xl transition-all"
                      style={{
                        color: isActive ? "white" : "rgba(255,255,255,0.5)",
                        background: isActive ? "rgba(139,92,246,0.08)" : "transparent",
                      }}
                    >
                      {l.name}
                    </motion.a>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="btn-premium w-full !py-3.5 text-sm"
                >
                  Book Free Trial
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
