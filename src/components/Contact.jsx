"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Send, MessageCircle, Mail, CheckCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\s+/g, "");
    if (!cleaned) return "Phone number is required";
    if (!/^[6-9]\d{9}$/.test(cleaned)) return "Enter a valid 10-digit Indian mobile number";
    return "";
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validatePhone(form.phone);
    if (err) {
      setPhoneError(err);
      return;
    }
    setPhoneError("");
    const text = `Hi! I'm ${form.name}. ${form.message} Phone: ${form.phone}`;
    window.open(`https://wa.me/919667949344?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
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
          style={{ textAlign: "center" }}>
          <div className="section-label mx-auto w-fit">
            <div className="dot" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-heading" style={{ marginBottom: "0.25rem" }}>
            Visit <span className="gradient-text">ALL FIT GYM</span>
          </h2>
          <p className="section-subtext" style={{ textAlign: "center", margin: "0 auto", marginBottom: "2rem" }}>
            Ready to start your fitness journey? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div
              className="rounded-[20px]"
              style={{ background: "#171A20", border: "1px solid rgba(255,255,255,0.08)", padding: "28px" }}
            >
              <h3 className="font-['Poppins'] text-xl font-semibold text-white" style={{ marginBottom: "24px" }}>Get in Touch</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <MapPin className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div>
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Address</div>
                    <div className="font-['Poppins'] text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                      2935, Block C, Sushant Lok Phase I, Sector 43,<br />
                      Gurugram, Haryana 122009
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <Phone className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div>
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Phone</div>
                    <a href="tel:+919667949344" className="font-['Poppins'] text-sm transition-colors" style={{ color: "#9CA3AF" }}
                      onMouseEnter={(e) => e.target.style.color = "#A855F7"}
                      onMouseLeave={(e) => e.target.style.color = "#9CA3AF"}>
                      +91 96679 49344
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <Mail className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div>
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Email</div>
                    <a href="mailto:info@allfitgym.com" className="font-['Poppins'] text-sm transition-colors" style={{ color: "#9CA3AF" }}
                      onMouseEnter={(e) => e.target.style.color = "#A855F7"}
                      onMouseLeave={(e) => e.target.style.color = "#9CA3AF"}>
                      info@allfitgym.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <Clock className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div>
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Timings</div>
                    <div className="font-['Poppins'] text-sm" style={{ color: "#9CA3AF" }}>
                      Mon - Sat: 5:30 AM - 10:00 PM<br />
                      Sunday: 7:00 AM - 9:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3" style={{ marginTop: "32px" }}>
                <a
                  href="https://wa.me/919667949344?text=Hi!%20I%20want%20to%20know%20more%20about%20ALL%20FIT%20GYM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 font-['Poppins'] font-semibold rounded-xl transition-all duration-300 text-sm"
                  style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E", paddingTop: "16px", paddingBottom: "16px" }}
                  onMouseEnter={(e) => e.target.style.background = "rgba(34,197,94,0.25)"}
                  onMouseLeave={(e) => e.target.style.background = "rgba(34,197,94,0.15)"}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919667949344"
                  className="flex-1 flex items-center justify-center gap-2 font-['Poppins'] font-semibold rounded-xl transition-all duration-300 text-sm"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "white", paddingTop: "16px", paddingBottom: "16px" }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "rgba(139,92,246,0.4)";
                    e.target.style.background = "rgba(139,92,246,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.12)";
                    e.target.style.background = "transparent";
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div
              className="rounded-[20px] overflow-hidden h-48"
              style={{ background: "#171A20", border: "1px solid rgba(255,255,255,0.08)", marginTop: "36px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.664534498457!2d77.0449863150815!3d28.45209498248698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c8e5e9e1e1%3A0x1234567890abcdef!2sSushant%20Lok%20Phase%20I%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.6) brightness(0.75) contrast(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                title="ALL FIT GYM Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="rounded-[20px] flex flex-col"
              style={{
                background: "#171A20",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.1)",
                padding: "24px",
              }}
            >
              <h3 className="font-['Poppins'] text-xl font-semibold text-white" style={{ marginBottom: "12px" }}>Send Us a Message</h3>
              <p className="font-['Poppins'] text-sm" style={{ color: "#9CA3AF", marginBottom: "20px" }}>
                Fill out the form and we&apos;ll get back to you via WhatsApp.
              </p>

              <form onSubmit={submit} className="flex-1 flex flex-col">
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
                  <div>
                    <label className="font-['Poppins'] text-sm font-medium block" style={{ color: "#D1D5DB", marginBottom: "8px" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl text-white placeholder:text-[#9CA3AF] focus:outline-none transition-all duration-200"
                      placeholder="Enter your name"
                      style={{
                        padding: "14px 18px",
                        fontSize: "15px",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        background: "#1F232B",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        height: "54px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#8B5CF6";
                        e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.15)";
                        e.target.style.background = "#252A34";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                        e.target.style.background = "#1F232B";
                      }}
                      onMouseEnter={(e) => { if (e.target !== document.activeElement) e.target.style.background = "#252A34"; }}
                      onMouseLeave={(e) => { if (e.target !== document.activeElement) e.target.style.background = "#1F232B"; }}
                    />
                  </div>

                  <div>
                    <label className="font-['Poppins'] text-sm font-medium block" style={{ color: "#D1D5DB", marginBottom: "16px" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      onFocus={() => {
                        setPhoneError("");
                      }}
                      className="w-full rounded-xl text-white placeholder:text-[#9CA3AF] focus:outline-none transition-all duration-200"
                      style={{
                        padding: "14px 18px",
                        fontSize: "15px",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        background: "#1F232B",
                        border: phoneError ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        height: "54px",
                      }}
                      onFocusCapture={(e) => {
                        setPhoneError("");
                        e.target.style.borderColor = "#8B5CF6";
                        e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.15)";
                        e.target.style.background = "#252A34";
                      }}
                      onBlur={(e) => {
                        if (!phoneError) {
                          e.target.style.borderColor = "rgba(255,255,255,0.08)";
                        }
                        e.target.style.boxShadow = "none";
                        e.target.style.background = "#1F232B";
                      }}
                      onMouseEnter={(e) => { if (e.target !== document.activeElement) e.target.style.background = "#252A34"; }}
                      onMouseLeave={(e) => { if (e.target !== document.activeElement) e.target.style.background = "#1F232B"; }}
                    />
                    <AnimatePresence>
                      {phoneError && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="font-['Poppins'] text-xs mt-2"
                          style={{ color: "rgba(239,68,68,0.85)" }}
                        >
                          {phoneError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="font-['Poppins'] text-sm font-medium block" style={{ color: "#D1D5DB", marginBottom: "16px" }}>
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your fitness goals..."
                      className="w-full rounded-xl text-white placeholder:text-[#9CA3AF] focus:outline-none transition-all duration-200 resize-y"
                      style={{
                        padding: "14px 18px",
                        fontSize: "15px",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        background: "#1F232B",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        minHeight: "100px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#8B5CF6";
                        e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.15)";
                        e.target.style.background = "#252A34";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                        e.target.style.background = "#1F232B";
                      }}
                      onMouseEnter={(e) => { if (e.target !== document.activeElement) e.target.style.background = "#252A34"; }}
                      onMouseLeave={(e) => { if (e.target !== document.activeElement) e.target.style.background = "#1F232B"; }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full font-['Poppins'] font-semibold text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 text-sm"
                  style={{
                    height: "48px",
                    padding: "0 24px",
                    background: "linear-gradient(135deg, #8B5CF6, #A855F7)",
                    borderRadius: "14px",
                    boxShadow: "0 4px 20px rgba(139,92,246,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px) scale(1.02)";
                    e.target.style.boxShadow = "0 8px 30px rgba(139,92,246,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "0 4px 20px rgba(139,92,246,0.25)";
                  }}
                  onMouseDown={(e) => {
                    e.target.style.transform = "scale(0.98)";
                  }}
                  onMouseUp={(e) => {
                    e.target.style.transform = "translateY(-2px) scale(1.02)";
                  }}
                >
                  {sent ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
