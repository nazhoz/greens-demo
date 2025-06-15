"use client";

import React from "react";

const Map = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.740807794285!2d76.13015657369887!3d10.9829261553536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cb9f777db05b%3A0xdbec3fe19f62faf1!2sAl%20Mazra%20Enterprises!5e0!3m2!1sen!2sin!4v1749963653932!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
