"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F6] shadow-md bg-opacity-90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        {/* Logo */}
        <Image
          src={scrolled ? "/images/logoright.png" : "/images/whiteright.png"}
          width={scrolled ? 40 : 60}
          height={scrolled ? 40 : 60}
          alt="logo"
          onClick={() => router.push("/Home")}
          onMouseEnter={() => router.prefetch("/Home")}
          className="cursor-pointer transition-all duration-300 w-auto h-auto"
        />

        {/* CTA Button */}
        <Button
          variant="outline"
          className={`text-xs sm:text-sm md:text-sm font-bold px-4 sm:px-6 py-2 sm:py-3 md:py-4 border-2 cursor-pointer bg-transparent ${
            scrolled
              ? "border-[#f1d069] text-black hover:bg-[#f1d069] hover:text-background"
              : "border-[#f1d069] text-white hover:bg-[#f1d069] hover:text-background"
          } transition-all duration-300 ease-in-out`}
        >
          GET IN TOUCH
        </Button>
      </div>
    </div>
  );
};

export default Nav;
