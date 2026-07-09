"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 left-0 right-0 z-50 flex h-16 items-center lg:fixed lg:h-[72px]"
        style={{
          background: scrolled
            ? "rgba(15,17,21,0.95)"
            : "rgba(15,17,21,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.28)" : "0 6px 20px rgba(0,0,0,0.16)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="premium-container flex w-full min-w-0 items-center justify-between">
          <a href="#home" className="group flex min-w-0 shrink-0 items-center gap-2.5">
            <div className="flex items-center justify-center overflow-hidden rounded-xl" style={{ width: "clamp(56px, 14vw, 72px)", height: "clamp(56px, 14vw, 72px)" }}>
              <img
                src="/images/93ee5950-3ef0-4cbb-981f-2562cb0c55d8-removebg-preview.png"
                alt="Logo"
                className="w-full h-full object-contain"
                style={{ transform: "scale(2.5)", transformOrigin: "center" }}
              />
            </div>
            <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-white sm:text-base">
              ALL FIT <span className="gradient-text">GYM</span>
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-3">
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
                  className="relative px-3 py-2 text-sm font-medium transition-all duration-300 xl:px-5 2xl:px-6"
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-white/80 shadow-lg shadow-black/20 transition-all hover:border-purple/30 hover:bg-purple/[0.12] hover:text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} strokeWidth={2.4} /> : <Menu size={22} strokeWidth={2.4} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto lg:hidden"
            style={{ background: "rgba(9,9,11,0.98)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mx-auto flex min-h-full w-full max-w-md flex-col px-5 pt-6 pb-[calc(2rem+env(safe-area-inset-bottom))]"
            >
              <div className="grid gap-4" style={{ marginBottom: "28px" }}>
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
                      className="flex min-h-[56px] items-center rounded-2xl border text-base font-semibold leading-none shadow-lg shadow-black/10 transition-all"
                      style={{
                        color: isActive ? "white" : "rgba(255,255,255,0.72)",
                        background: isActive ? "rgba(139,92,246,0.16)" : "rgba(255,255,255,0.035)",
                        borderColor: isActive ? "rgba(139,92,246,0.28)" : "rgba(255,255,255,0.08)",
                        padding: "18px 22px 18px 22px",
                      }}
                    >
                      <span style={{ display: "block" }}>
                        {l.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                style={{
                  marginTop: "10px",
                  paddingTop: "22px",
                  paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
                  position: "sticky",
                  bottom: 0,
                  background: "linear-gradient(180deg, rgba(9,9,11,0), rgba(9,9,11,0.98) 28%)",
                }}
              >
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="btn-premium min-h-[58px] w-full !py-4 text-sm"
                >
                  Book Free Trial
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
