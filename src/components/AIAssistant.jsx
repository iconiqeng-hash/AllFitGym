"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  membership: "We offer 3 plans:\n\nBasic ₹1,499/mo — Gym + Cardio + Strength\nPro ₹2,499/mo — + Functional Training + Diet Guidance\nElite ₹4,999/mo — + Personal Trainer + Custom Plan\n\nBook a free trial to experience our facilities!",
  weight: "For weight loss, we recommend:\n\n1. Our Pro plan with diet guidance\n2. 3-4x/week cardio + strength combo\n3. Customized nutrition plan from our trainers\n4. Regular progress tracking\n\nBook a free consultation to get started!",
  muscle: "For muscle building:\n\nElite plan recommended with personal trainer\nCustomized workout split\nDiet plan for lean gains\nProgressive overload tracking\n\nLet's build your dream physique!",
  timings: "Gym Timings:\n\nMon-Sat: 5:30 AM - 10:00 PM\nSunday: 7:00 AM - 9:00 PM\n\nAddress: 2935, Block C, Sushant Lok Phase I, Sector 43, Gurugram",
  trial: "Great choice!\n\nBook your FREE trial:\nCall: +91 96679 49344\nWhatsApp: wa.me/919667949344\n\nVisit us at Sushant Lok Phase 1, Gurgaon\n\nNo commitment required!",
  default: "Thanks for your interest in ALL FIT GYM!\n\nI can help you with:\n- Membership plans\n- Weight loss guidance\n- Muscle gain tips\n- Gym timings & location\n- Free trial booking\n\nWhat would you like to know?",
};

function getResp(input) {
  const l = input.toLowerCase();
  if (l.includes("plan") || l.includes("membership") || l.includes("price")) return responses.membership;
  if (l.includes("weight") || l.includes("fat") || l.includes("lose")) return responses.weight;
  if (l.includes("muscle") || l.includes("build") || l.includes("gain")) return responses.muscle;
  if (l.includes("timing") || l.includes("time") || l.includes("open") || l.includes("hour")) return responses.timings;
  if (l.includes("trial") || l.includes("free") || l.includes("book")) return responses.trial;
  return responses.default;
}

export default function AIAssistant() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });
  const [msgs, setMsgs] = useState([
    { role: "bot", text: "Hi! I'm your AI Fitness Assistant.\n\nAsk me anything about ALL FIT GYM — plans, workouts, diet, or book a free trial!" },
  ]);
  const [input, setInput] = useState("");

  const handle = (text) => {
    const q = text || input;
    if (!q.trim()) return;
    setMsgs((p) => [...p, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => setMsgs((p) => [...p, { role: "bot", text: getResp(q) }]), 500);
  };

  return (
    <section id="ai-assistant" ref={ref} className="py-24 lg:py-32 bg-dark">
      <div className="premium-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label w-fit">
              <Sparkles className="w-3.5 h-3.5 text-purple" />
              <span>AI Powered</span>
            </div>

            <h2 className="section-heading">
              24/7 <span className="gradient-text">Fitness Guidance</span>
            </h2>

            <p className="section-subtext mb-8 max-w-[440px]">
              Get instant answers, personalized recommendations, and book your
              free trial — all powered by AI, available anytime.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <b.icon className="w-5 h-5 text-success shrink-0" />
                  <span className="text-sm text-text-secondary">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {quickActions.map((a, i) => (
                <button
                  key={i}
                  onClick={() => handle(a.query)}
                  className="flex items-center gap-3 glass rounded-xl px-4 py-3.5 text-left transition-all duration-200 hover:bg-white/[0.03]"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <a.icon className="w-3.5 h-3.5 text-purple" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{a.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:max-w-[600px] lg:ml-auto w-full"
          >
            <div
              className="glass rounded-[24px] overflow-hidden shadow-2xl shadow-black/40"
              style={{ background: "rgba(23, 26, 32, 0.8)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "12px" }}
            >
              <div
                className="bg-white/[0.02] flex items-center gap-3"
                style={{ padding: "16px 20px", borderRadius: "16px" }}
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
                <div>
                  <div className="text-sm font-bold text-white">ALL FIT AI</div>
                  <div className="text-xs text-success/70 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    Online
                  </div>
                </div>
              </div>

              <div
                className="overflow-y-auto"
                style={{
                  height: "360px",
                  padding: "24px 16px",
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
                      className={`max-w-[85%] rounded-[18px] text-[13px] leading-relaxed whitespace-pre-line ${
                        m.role === "user"
                          ? "bg-purple/20 text-white rounded-br-sm"
                          : "bg-white/[0.03] text-text-secondary rounded-bl-sm"
                      }`}
                      style={{
                        padding: "14px 20px",
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
                <div className="flex gap-3" style={{ alignItems: "center" }}>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handle()}
                    placeholder="Ask about plans, workouts, diet..."
                    className="flex-1 text-sm text-white placeholder-text-muted focus:outline-none transition-colors"
                    style={{
                      padding: "14px 20px",
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
