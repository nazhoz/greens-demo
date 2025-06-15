import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="/images/newlogoright.png"
            width={180}
            height={180}
            alt="logo"
            className="object-contain"
          />
        </div>

        {/* Newsletter Section */}
        <div className="w-full max-w-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border-0 border-b border-gray-300 rounded-none outline-none focus:outline-none focus:ring-0 focus:ring-green-500"
            />
            <Button
              type="submit"
              className="px-4 py-2 bg-white border cursor-pointer border-[#f1d069] text-black hover:bg-[#f1d069] hover:text-background transition-all duration-300 ease-in-out"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
