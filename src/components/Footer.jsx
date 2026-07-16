"use client";
import { MapPin, Phone, Mail, ArrowRight, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Trainers", href: "#trainers" },
  { name: "Plans", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    href: "https://www.instagram.com/allfitgym_",
    label: "Instagram",
  },
];

const contactInfo = [
  { icon: MapPin, text: "2935A, Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana" },
  { icon: Phone, text: "+91 96679 49344", href: "tel:+919667949344" },
  { icon: Mail, text: "info@allfitgym.com", href: "mailto:info@allfitgym.com" },
];

export default function Footer() {
  return (
    <footer
      className="mt-24 overflow-hidden border-t border-white/[0.08] bg-dark-100 sm:mt-32"
      style={{
        paddingTop: "clamp(60px, 9vw, 90px)",
        paddingBottom: "40px",
      }}
    >
      <div className="premium-container mb-24 lg:mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-6 sm:gap-x-16 lg:gap-x-24">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <a href="#home" className="mb-10 flex min-w-0 items-center gap-3">
              <div className="rounded-xl flex items-center justify-center overflow-hidden" style={{ width: "90px", height: "90px" }}>
                <img
                  src="/images/93ee5950-3ef0-4cbb-981f-2562cb0c55d8-removebg-preview.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                  style={{ transform: "scale(2.5)", transformOrigin: "center" }}
                />
              </div>
              <span className="min-w-0 text-xl font-display font-bold text-white">
                ALL FIT<span className="gradient-text ml-0.5">GYM</span>
              </span>
            </a>
            <p
              className="text-sm text-text-muted leading-relaxed mb-12 max-w-sm"
              style={{
                paddingTop: "8px",
                paddingBottom: "16px",
                lineHeight: "1.8",
              }}
            >
              Train Strong. Live Better. Gurgaon&apos;s premium fitness destination
              dedicated to helping you achieve your fitness goals since 2014.
            </p>
            <div className="flex gap-4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/[0.06] hover:text-purple transition-all duration-200 text-text-muted"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4
              className="text-xs font-bold text-text-muted uppercase tracking-[0.15em]"
              style={{ paddingBottom: "24px" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-sm text-text-muted hover:text-white transition-colors duration-200"
                    style={{
                      display: "block",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <h4
              className="text-xs font-bold text-text-muted uppercase tracking-[0.15em]"
              style={{ paddingBottom: "24px" }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((c, i) => (
                <li key={i}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-sm text-text-muted hover:text-white transition-colors"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <c.icon className="w-4.5 h-4.5 text-purple/50 mt-0.5 shrink-0" />
                      <span className="min-w-0">{c.text}</span>
                    </a>
                  ) : (
                    <div
                      className="text-sm text-text-muted"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <c.icon className="w-4.5 h-4.5 text-purple/50 mt-0.5 shrink-0" />
                      <span className="min-w-0 whitespace-pre-line leading-relaxed">{c.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h4
              className="text-xs font-bold text-text-muted uppercase tracking-[0.15em]"
              style={{ paddingBottom: "24px" }}
            >
              Newsletter
            </h4>
            <p
              className="text-sm text-text-muted"
              style={{
                paddingTop: "8px",
                paddingBottom: "16px",
                lineHeight: "1.7",
              }}
            >
              Stay updated with fitness tips and exclusive offers.
            </p>
            <div className="flex min-w-0 gap-2" style={{ paddingTop: "8px" }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 bg-white/[0.03] border border-white/[0.06] rounded-xl text-sm text-white placeholder-text-muted focus:outline-none focus:border-purple/40 transition-colors"
                style={{ paddingLeft: "16px", paddingRight: "16px", paddingTop: "14px", paddingBottom: "14px" }}
              />
              <button className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center hover:shadow-lg hover:shadow-purple/20 transition-all shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div
          className="premium-container flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            paddingTop: "32px",
            paddingBottom: "32px",
          }}
        >
          <div className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} ALL FIT GYM. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            Made with <Heart className="w-3 h-3 text-purple" /> in Gurgaon
          </div>
        </div>
      </div>
    </footer>
  );
}
