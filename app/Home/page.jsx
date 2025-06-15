import Navigation from "@/pages/CarouselandNav/Navigation";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Ecology from "@/pages/Ecology/Ecology";
import Map from "@/pages/Map/Map";
import OurProducts from "@/pages/Products/OurProducts";
import Products from "@/pages/Products/Products";
import React from "react";

const page = () => {
  return (
    <>
      <Navigation />
      <Ecology />
      <Products />
      <OurProducts />
      <ContactUs />
      <Map />
    </>
  );
};

export default page;
