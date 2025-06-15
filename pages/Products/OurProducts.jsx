"use client";
import { productsData } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const getRandomProducts = (count) => {
  const shuffled = [...productsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const OurProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    setRandomProducts(getRandomProducts(7));
  }, []);

  return (
    <div className="bg-[#e8f1ee] px-10 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        <div className="flex flex-col gap-3 mt-10">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <span className="text-[15px] text-[#999e9c]">
            Appetizing luscious savor hot senses. Effervescent the secure
            special. Kids spicey chance.
          </span>
          <Link
            href="/Home/Products"
            className="text-green-800 font-semibold hover:underline"
            prefetch={true}
          >
            View All Products
          </Link>
        </div>
        {randomProducts.map((product) => (
          <Link
            key={product.id}
            className="relative group rounded overflow-hidden border px-2 py-2 border-gray-300 flex justify-center items-center"
            href="/Home/Products"
            prefetch={true}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-64 h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute top-3 w-full text-center text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
              <span></span>
              {product.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
