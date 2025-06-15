"use client";

import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Globe,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [requirement, setRequirement] = useState("");
  const [comment, setComment] = useState("");

  const sendWhatsAppMessage = () => {
    const message = `Hello, I am ${name} requirement: ${requirement}.%0AComment: ${comment}`;
    const whatsappNumber = "918078291170"; // Your WhatsApp number

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Section - Contact Info */}
      <div className="bg-[#4b8b71] text-white w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold mb-2">Contacts</h2>
        <p className="mb-6 text-sm">
          Mega bold action. Sold care wherever less appetizing your far easily
        </p>

        <div className="flex items-start gap-3 mb-4">
          <MapPin className="mt-1 w-5 h-5" />
          <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <Phone className="mt-1 w-5 h-5" />
          <p>+1 (234) 56789, +1 987 654 3210</p>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <Mail className="mt-1 w-5 h-5" />
          <a href="mailto:support@watchland.com" className="underline">
            support@watchland.com
          </a>
        </div>

        {/* Social Media Icons using Lucide */}
        <div className="flex gap-4 mt-6">
          <Twitter className="w-5 h-5 hover:text-gray-200 cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-gray-200 cursor-pointer" />
          <Youtube className="w-5 h-5 hover:text-gray-200 cursor-pointer" />
          <Instagram className="w-5 h-5 hover:text-gray-200 cursor-pointer" />
          <Globe className="w-5 h-5 hover:text-gray-200 cursor-pointer" />{" "}
          {/* Used as fallback for missing brand icons */}
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="bg-[#282828] text-white w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-extrabold mb-2">
          <span className="bg-blue-700 px-2">Get In Touch</span>
        </h2>
        <p className="mb-6 text-sm">
          Vinyl grown remarkable in survey wherever parents are it’s. Mega bold
          action. Sold care
        </p>

        <div className="flex flex-col gap-6">
          <div className="relative">
            <Input
              placeholder="Your name"
              className=" rounded-none border-0 border-b border-white bg-transparent text-white placeholder:text-white "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <User className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
          </div>

          <div className="relative">
            <Input
              placeholder="Requirements"
              className=" rounded-none border-0 border-b border-white bg-transparent text-white placeholder:text-white"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
            />
            <Mail className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
          </div>

          <div className="relative">
            <Textarea
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className=" rounded-none border-0 border-b border-white bg-transparent text-white placeholder:text-white min-h-[80px]"
            />
            <MessageSquare className="absolute right-2 top-4 text-white w-5 h-5" />
          </div>

          <Button
            variant="outline"
            onClick={sendWhatsAppMessage}
            className="border-2 rounded-md border-white text-white uppercase bg-transparent cursor-pointer"
          >
            Send a Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
