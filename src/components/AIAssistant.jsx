"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Bot, Sparkles, Dumbbell, Salad, Beef, HelpCircle, Calendar, UserPlus, CheckCircle } from "lucide-react";

const quickActions = [
  { icon: Dumbbell, label: "Membership Plans", query: "What are the membership plans?" },
  { icon: Salad, label: "Weight Loss", query: "I want to lose weight. Guide me." },
  { icon: Beef, label: "Muscle Gain", query: "I want to build muscle. What should I do?" },
  { icon: HelpCircle, label: "FAQ", query: "What are the gym timings?" },
  { icon: Calendar, label: "Free Trial", query: "I want to book a free trial." },
  { icon: UserPlus, label: "Join Now", query: "How can I become a member?" },
];

const benefits = [
  { icon: CheckCircle, text: "Personalized membership recommendations" },
  { icon: CheckCircle, text: "Workout assistance & exercise guidance" },
  { icon: CheckCircle, text: "Instant answers to all your questions" },
  { icon: CheckCircle, text: "Lead capture & instant follow-ups" },
];

const responses = {
  membership:
    "Here are our membership plans:\n\n• 1 Month — ₹3,000\n• 3 Months — ₹6,000\n• 6 Months — ₹9,000\n• 12 Months — ₹15,000\n\nEvery plan includes trainer guidance, workout & diet charts, full gym access, and weekly fitness events.\n\nWould you like help choosing the right plan? Book a free trial to experience ALL FIT GYM firsthand!",
  weight:
    "We're glad you're taking this step toward a healthier you.\n\nFor sustainable weight loss, our trainers typically recommend:\n\n1. A membership plan with diet & nutrition guidance\n2. 3–4 sessions per week combining cardio and strength\n3. A personalised workout chart tailored to your goals\n4. Consistent check-ins to track your progress\n\nBook a free trial and our team will help you build a plan that works for your lifestyle.",
  muscle:
    "Building muscle is a journey — and we're here to guide you through it.\n\nOur approach includes:\n\n• A structured workout split designed for your level\n• Diet guidance for lean muscle gains\n• Progressive overload tracking with trainer support\n• Access to premium strength & functional training zones\n\nVisit us for a free trial and let's start building your best physique together.",
  timings:
    "We'd love to see you at the gym!\n\n🕐 Mon–Sat: 5:30 AM – 10:00 PM\n🕐 Sunday: 7:00 AM – 9:00 PM\n\n📍 2935, Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122009\n\nFeel free to walk in during these hours, or book a free trial so our team can give you a personalised tour.",
  trial:
    "Wonderful — we're excited you're interested in trying ALL FIT GYM!\n\nYour free trial is the perfect way to experience our space, meet our trainers, and see if we're the right fit for your goals. There's absolutely no obligation.\n\nTo confirm your visit:\n📞 Call: +91 96679 49344\n💬 WhatsApp: wa.me/919667949344\n\n📍 Sushant Lok Phase I, Gurgaon\n\nOur team will be happy to schedule a time that works for you. We can't wait to welcome you!",
  join:
    "We'd love to have you as part of the ALL FIT GYM family!\n\nHere's how to get started:\n\n1. Book a free trial to experience our facilities\n2. Choose a membership plan that fits your goals\n3. Our team will guide you through a smooth onboarding\n\n📞 +91 96679 49344 | 💬 WhatsApp available\n\nYour fitness journey starts here — and we'll be with you every step of the way.",
  enquiry:
    "Thank you for your interest in ALL FIT GYM — we truly appreciate you reaching out.\n\nOur team is here to help with memberships, training programmes, diet guidance, and anything else you need to reach your fitness goals.\n\nThe fastest way to connect:\n📞 +91 96679 49344\n💬 WhatsApp: wa.me/919667949344\n\nVisit us at Sushant Lok Phase I, Gurgaon. We look forward to welcoming you soon!",
  default:
    "Welcome to ALL FIT GYM — Gurgaon's premium fitness destination!\n\nI'm here to help you with:\n• Membership plans & pricing\n• Weight loss & muscle building guidance\n• Gym timings & location\n• Free trial bookings\n\nWhat would you like to know? We're happy to help you take the first step toward your fitness goals.",
};

function getResp(input) {
  const l = input.toLowerCase();
  if (l.includes("plan") || l.includes("membership") || l.includes("price")) return responses.membership;
  if (l.includes("weight") || l.includes("fat") || l.includes("lose")) return responses.weight;
  if (l.includes("muscle") || l.includes("build") || l.includes("gain")) return responses.muscle;
  if (l.includes("timing") || l.includes("time") || l.includes("open") || l.includes("hour")) return responses.timings;
  if (l.includes("trial") || l.includes("free") || l.includes("book")) return responses.trial;
  if (l.includes("join") || l.includes("member") || l.includes("sign up") || l.includes("signup")) return responses.join;
  if (l.includes("enquir") || l.includes("inquir") || l.includes("contact") || l.includes("reach out")) return responses.enquiry;
  return responses.default;
}

export default function AIAssistant() {
  const ref = useRef(null);
  const chatRef = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });
  const [msgs, setMsgs] = useState([
    { role: "bot", text: "Welcome! I'm your ALL FIT GYM assistant.\n\nWhether you're looking to book a free trial, explore membership plans, or get fitness guidance — I'm here to help. What can I assist you with today?" },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const chat = chatRef.current;
    if (!chat) return;
    const frame = requestAnimationFrame(() => {
      chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [msgs]);

  const handle = (text) => {
    const q = text || input;
    if (!q.trim()) return;
    setMsgs((p) => [...p, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => setMsgs((p) => [...p, { role: "bot", text: getResp(q) }]), 500);
  };

  return (
    <section
      id="ai-assistant"
      ref={ref}
      className="overflow-hidden bg-dark-100"
      style={{
        paddingTop: "clamp(30px, 3vw, 50px)",
        paddingBottom: "clamp(40px, 4vw, 60px)"
      }}
    >
      <div className="premium-container">
        <div className="grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              padding: "clamp(16px, 4vw, 28px) clamp(12px, 3vw, 24px)",
            }}
          >
            <div className="section-label w-fit" style={{ marginBottom: "20px" }}>
              <Sparkles className="w-3.5 h-3.5 text-purple" />
              <span>AI Powered</span>
            </div>

            <h2 className="section-heading" style={{ marginBottom: "16px" }}>
              24/7 <span className="gradient-text">Fitness Guidance</span>
            </h2>

            <p
              className="section-subtext max-w-[440px]"
              style={{ marginBottom: "28px", paddingRight: "8px" }}
            >
              Get instant answers, personalized recommendations, and book your
              free trial — all powered by AI, available anytime.
            </p>

            <div style={{ marginBottom: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center" style={{ gap: "12px", padding: "4px 8px" }}>
                  <b.icon className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm text-text-secondary">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2" style={{ padding: "0 4px" }}>
              {quickActions.map((a, i) => (
                <button
                  key={i}
                  onClick={() => handle(a.query)}
                  className="flex min-w-0 items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-200 hover:bg-white/[0.03] glass"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <a.icon className="w-3.5 h-3.5 text-purple" />
                  </div>
                  <span className="min-w-0 text-sm font-medium leading-snug text-text-secondary">{a.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full min-w-0 lg:ml-auto lg:max-w-[600px]"
          >
            <div
              className="glass rounded-[24px] overflow-hidden shadow-2xl shadow-black/40"
              style={{ background: "rgba(23, 26, 32, 0.8)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "clamp(8px, 3vw, 12px)" }}
            >
              <div
                className="flex min-w-0 items-center gap-3 bg-white/[0.02]"
                style={{ padding: "clamp(12px, 4vw, 16px) clamp(14px, 5vw, 20px)", borderRadius: "16px" }}
              >
                <div
                  className="rounded-lg flex items-center justify-center overflow-hidden"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img
                    src="/images/93ee5950-3ef0-4cbb-981f-2562cb0c55d8-removebg-preview.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                    style={{ transform: "scale(2.5)", transformOrigin: "center" }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white">ALL FIT AI</div>
                  <div className="text-xs text-success/70 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    Online
                  </div>
                </div>
              </div>

              <div
                ref={chatRef}
                className="overflow-y-auto"
                style={{
                  height: "360px",
                  padding: "clamp(18px, 5vw, 24px) clamp(10px, 4vw, 16px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {msgs.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[90%] break-words rounded-[18px] text-[13px] leading-relaxed whitespace-pre-line sm:max-w-[85%] ${
                        m.role === "user"
                          ? "bg-purple/20 text-white rounded-br-sm"
                          : "bg-white/[0.03] text-text-secondary rounded-bl-sm"
                      }`}
                      style={{
                        padding: "14px clamp(14px, 4vw, 20px)",
                        border: m.role === "user" ? "1px solid rgba(139, 92, 246, 0.2)" : "1px solid rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                style={{ padding: "8px" }}
              >
                <div className="flex min-w-0 gap-2 sm:gap-3" style={{ alignItems: "center" }}>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handle()}
                    placeholder="Ask about plans, workouts, diet..."
                    className="min-w-0 flex-1 text-sm text-white placeholder-text-muted focus:outline-none transition-colors"
                    style={{
                      padding: "14px clamp(12px, 4vw, 20px)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      borderRadius: "12px",
                      height: "48px",
                    }}
                  />
                  <button
                    onClick={() => handle()}
                    className="flex items-center justify-center hover:shadow-lg hover:shadow-purple/20 transition-all shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Bot className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
