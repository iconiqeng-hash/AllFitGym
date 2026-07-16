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

  const enquiryMessage = (data) =>
    `Hello ALL FIT GYM Team,\n\nMy name is ${data.name}. I would love to learn more about your gym and membership options.\n\n${data.message || "I would like to enquire about memberships and services."}\n\nYou can reach me at: +91 ${data.phone}\n\nThank you!`;

  const handlePhoneChange = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, phone: digits }));
    if (phoneError) setPhoneError("");
  };

  const validatePhone = (phone) => {
    if (!phone) return "Phone number is required";
    if (!/^[6-9]\d{9}$/.test(phone)) return "Enter a valid 10-digit Indian mobile number";
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
    const text = enquiryMessage(form);
    window.open(`https://wa.me/919667949344?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", phone: "", message: "" });
    }, 6000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="overflow-hidden bg-dark-100"
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

        <div className="grid w-full min-w-0 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full min-w-0 space-y-8"
          >
            <div
              className="w-full min-w-0 rounded-[20px]"
              style={{ background: "#171A20", border: "1px solid rgba(255,255,255,0.08)", padding: "clamp(20px, 6vw, 28px)" }}
            >
              <h3 className="font-['Poppins'] text-xl font-semibold text-white" style={{ marginBottom: "24px" }}>Get in Touch</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div className="flex min-w-0 items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <MapPin className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Address</div>
                    <div className="font-['Poppins'] text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>
                      2935A, Block C, Sushant Lok Phase I, Sector 43,<br />
                      Gurugram, Haryana 122009
                    </div>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <Phone className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Phone</div>
                    <a href="tel:+919667949344" className="font-['Poppins'] text-sm transition-colors" style={{ color: "#9CA3AF" }}
                      onMouseEnter={(e) => e.target.style.color = "#A855F7"}
                      onMouseLeave={(e) => e.target.style.color = "#9CA3AF"}>
                      +91 96679 49344
                    </a>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <Mail className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Email</div>
                    <a href="mailto:info@allfitgym.com" className="font-['Poppins'] text-sm transition-colors" style={{ color: "#9CA3AF" }}
                      onMouseEnter={(e) => e.target.style.color = "#A855F7"}
                      onMouseLeave={(e) => e.target.style.color = "#9CA3AF"}>
                      info@allfitgym.com
                    </a>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(139,92,246,0.1)" }}>
                    <Clock className="w-5 h-5" style={{ color: "#A855F7" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-['Poppins'] text-sm font-medium text-white mb-2">Timings</div>
                    <div className="font-['Poppins'] text-sm" style={{ color: "#9CA3AF" }}>
                      Mon - Sat: 5:30 AM - 10:00 PM<br />
                      Sunday: 7:00 AM - 9:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row" style={{ marginTop: "32px" }}>
                <a
                  href="https://wa.me/919667949344?text=Hi!%20I%20want%20to%20know%20more%20about%20ALL%20FIT%20GYM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl font-['Poppins'] text-sm font-semibold transition-all duration-300"
                  style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E", paddingTop: "16px", paddingBottom: "16px" }}
                  onMouseEnter={(e) => e.target.style.background = "rgba(34,197,94,0.25)"}
                  onMouseLeave={(e) => e.target.style.background = "rgba(34,197,94,0.15)"}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919667949344"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl font-['Poppins'] text-sm font-semibold transition-all duration-300"
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
            className="w-full min-w-0"
          >
            <div
              className="w-full min-w-0 rounded-[20px] flex flex-col"
              style={{
                background: "#171A20",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2), 0 1px 4px rgba(0,0,0,0.1)",
                padding: "clamp(20px, 6vw, 24px)",
              }}
            >
              <h3 className="font-['Poppins'] text-xl font-semibold text-white" style={{ marginBottom: "12px" }}>Send Us a Message</h3>
              <p className="font-['Poppins'] text-sm" style={{ color: "#9CA3AF", marginBottom: "20px" }}>
                Fill out the form and we&apos;ll get back to you via WhatsApp.
              </p>

              <form onSubmit={submit} className="flex-1 flex flex-col">
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
                  <div className="min-w-0">
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

                  <div className="min-w-0">
                    <label className="font-['Poppins'] text-sm font-medium block" style={{ color: "#D1D5DB", marginBottom: "16px" }}>
                      Phone Number
                    </label>
                    <div
                      className="flex w-full overflow-hidden rounded-xl transition-all duration-200"
                      style={{
                        border: phoneError ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.08)",
                        height: "54px",
                        background: "#1F232B",
                      }}
                    >
                      <span
                        className="flex shrink-0 items-center font-['Poppins'] text-sm text-text-secondary"
                        style={{
                          padding: "0 16px",
                          borderRight: "1px solid rgba(255,255,255,0.08)",
                          background: "#252A34",
                        }}
                      >
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        placeholder="9876543210"
                        inputMode="numeric"
                        maxLength={10}
                        pattern="[6-9][0-9]{9}"
                        className="min-w-0 flex-1 bg-transparent text-white placeholder:text-[#9CA3AF] focus:outline-none"
                        style={{
                          padding: "14px 18px",
                          fontSize: "15px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                        }}
                        onFocusCapture={(e) => {
                          setPhoneError("");
                          e.currentTarget.parentElement.style.borderColor = "#8B5CF6";
                          e.currentTarget.parentElement.style.boxShadow = "0 0 0 3px rgba(139,92,246,0.15)";
                          e.currentTarget.parentElement.style.background = "#252A34";
                        }}
                        onBlur={(e) => {
                          if (!phoneError) {
                            e.currentTarget.parentElement.style.borderColor = "rgba(255,255,255,0.08)";
                          }
                          e.currentTarget.parentElement.style.boxShadow = "none";
                          e.currentTarget.parentElement.style.background = "#1F232B";
                        }}
                      />
                    </div>
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

                  <div className="min-w-0">
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

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl text-center"
                      style={{
                        padding: "28px 24px",
                        background: "rgba(34, 197, 94, 0.08)",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        className="mx-auto flex items-center justify-center rounded-full"
                        style={{
                          width: "52px",
                          height: "52px",
                          marginBottom: "16px",
                          background: "rgba(34, 197, 94, 0.15)",
                        }}
                      >
                        <CheckCircle className="w-6 h-6 text-success" />
                      </div>
                      <h4 className="font-['Poppins'] text-lg font-semibold text-white" style={{ marginBottom: "10px" }}>
                        Thank you for reaching out!
                      </h4>
                      <p className="font-['Poppins'] text-sm leading-relaxed" style={{ color: "#B8BCC8", maxWidth: "360px", margin: "0 auto" }}>
                        We&apos;ve opened WhatsApp so you can connect with our team directly. Someone from ALL FIT GYM will be with you shortly to help you take the next step in your fitness journey.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={sent}
                  className="w-full font-['Poppins'] font-semibold text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 text-sm disabled:opacity-80"
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
                      Opening WhatsApp...
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
