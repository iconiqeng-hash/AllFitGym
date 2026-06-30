import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Trainers from "./components/Trainers";
import Transformations from "./components/Transformations";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import AIAssistant from "./components/AIAssistant";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleFinish = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onFinish={handleFinish} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen bg-dark"
          >
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Facilities />
            <Trainers />
            <Transformations />
            <Pricing />
            <Testimonials />
            <AIAssistant />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
