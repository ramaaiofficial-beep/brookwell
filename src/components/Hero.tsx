import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-highway.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[750px] md:h-[850px] overflow-hidden font-['Roboto',sans-serif]">
      {/* ---------- Background Image ---------- */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[#132f4c]/70" /> {/* Deep navy overlay */}
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative container mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-3xl text-white pt-20">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white/10 px-4 py-2 mb-4 rounded-sm"
          >
            <div className="w-1.5 h-1.5 bg-[#e12b2b] rounded-full mr-2" />
            <p className="text-sm font-medium tracking-wide text-white">
              Protecting Roads. Protecting Lives.
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6"
          >
            India’s Trusted Crash
            <br />
            Barrier Manufacturer
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10"
          >
            At Brookwell Industries, we engineer safety through W-Beam and
            Thrie-Beam crash barriers — delivering strength, durability, and
            protection to make roads safer, stronger, and future-ready.
          </motion.p>

          {/* ---------- Get In Touch Button ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <Link to="/contact-us" className="inline-block">
              <button className="relative px-10 py-4 text-white italic font-semibold skew-x-[-15deg] bg-[#e12b2b] overflow-hidden group shadow-md">
                <span className="absolute inset-0 bg-[#f44242] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 block skew-x-[15deg] text-lg">
                  Get In Touch
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ---------- Navigation Arrows ---------- */}
      <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button className="w-12 h-12 bg-[#e12b2b] hover:bg-[#f44242] text-white flex items-center justify-center shadow-lg transition-all duration-300">
          <ChevronRight className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 bg-[#e12b2b] hover:bg-[#f44242] text-white flex items-center justify-center shadow-lg transition-all duration-300">
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      {/* ---------- Scroll To Top Button ---------- */}
      
    </section>
  );
};

export default Hero;
