"use client";

import React, { useEffect, useState } from "react";
import { productsData } from "@/data/data";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Helper function to group by product name
const groupByName = (data) => {
  const grouped = {};

  data.forEach((item) => {
    if (!grouped[item.name]) {
      grouped[item.name] = {
        name: item.name,
        image: item.image, // Use first image found
        variants: [],
      };
    }

    grouped[item.name].variants.push({
      kg: item.kg,
      image: item.image, // Optional: if you want per-variant images
    });
  });

  return Object.values(grouped);
};

const AllProducts = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const groupedProducts = groupByName(productsData);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden -mt-[6.3rem]">
        <Image
          src="/images/allproducts.jpg"
          alt="All Products"
          fill
          className={`object-cover transition duration-500 ease-in-out ${
            isScrolled ? "mix-blend-multiply" : ""
          }`}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl md:text-7xl font-bold">
          All Products
        </div>
      </div>

      {/* Sort Menu */}
      <div className="flex justify-end px-6 pt-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Sort by</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
            <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Best Selling</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Products Grid */}
      <div className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {groupedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-2 border flex flex-col justify-between "
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-[200px] object-contain mb-4"
              />

              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold  text-center">
                  {product.name}
                </h2>
                <div className="flex items-center justify-between gap-2">
                  {product.variants.map((variant, i) => (
                    <div
                      key={i}
                      className="text-sm flex items-center justify-between last:border-none py-1"
                    >
                      <Badge className="bg-[#139f50]">{variant.kg}</Badge>
                      {/* Uncomment to show per-variant image instead:
                    <Image
                      src={variant.image}
                      alt={`${product.name} ${variant.kg}`}
                      width={30}
                      height={30}
                    /> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
