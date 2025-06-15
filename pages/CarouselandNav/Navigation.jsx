"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/data/data";

const Navigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden -mt-[6.3rem]">
      {/* Background Image Transition */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={slides[currentIndex].id}
          src={slides[currentIndex].src}
          alt={slides[currentIndex].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-30" />

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-40 px-4 text-white text-center">
        <motion.div
          key={slides[currentIndex].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl px-4"
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-tight md:tracking-[0.3em] mb-4 drop-shadow-xl ${
              slides[currentIndex].title === "FRESH IDEAS"
                ? "text-black md:-ml-24"
                : "text-white"
            }`}
          >
            {slides[currentIndex].title}
          </h1>

          {slides[currentIndex].sub && (
            <p className="mb-6 text-sm sm:text-base md:text-lg xl:text-xl">
              {slides[currentIndex].sub}
            </p>
          )}

          {slides[currentIndex].buttonText && (
            <Button className="bg-yellow-400 text-black font-semibold px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base hover:bg-yellow-500 transition rounded-md">
              {slides[currentIndex].buttonText}
            </Button>
          )}
        </motion.div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={prevSlide}
          className="text-white font-bold text-xs sm:text-sm rotate-[-90deg] tracking-widest"
        >
          PREV
        </button>
      </div>
      <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={nextSlide}
          className="text-white font-bold text-xs sm:text-sm rotate-90 tracking-widest"
        >
          NEXT
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-40">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-green-500 scale-110" : "bg-yellow-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
