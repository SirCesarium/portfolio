"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CircleArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-40 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-[1] text-center max-w-screen-md"
      >
        <span className="block text-sm sm:text-base font-mono text-primary mb-4 tracking-widest uppercase">
          I&apos;m Cesar Marcano and
        </span>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold !leading-[0.9] tracking-tighter mb-6">
          I Build Backend
          <span className="block">That You Can <span className="text-purple-400">Trust</span>.</span>
        </h1>

        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full text-base px-8 h-12 shadow-lg shadow-primary/20"
            >
              <a href="#projects" data-track-id="hero-view-projects-link">
                View Projects <CircleArrowDown className="ml-2 !h-5 !w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
