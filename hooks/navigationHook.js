"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default useNavigation = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return{
    router,
    scrolled
  }
};
