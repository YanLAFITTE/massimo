import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="flex h-[95vh] flex-col  bg-black lg:h-[75vh] lg:flex-row lg:justify-between lg:bg-[url('/offerBg.png')]">
      {/* Text container */}
      <div className="flex  flex-1 flex-col items-center justify-center gap-8 p-6 text-center md:px-16  xl:px-28 ">
        <h1 className="text-5xl font-bold text-white [text-wrap:balance] xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white [text-wrap:balance] xl:py-4 xl:text-xl">
          Savor our irresistible burger—juicy beef, melted cheese, crisp
          veggies, and secret sauce nestled in a soft bun. Paired with golden,
          crispy fries that are seasoned to perfection. One bite and you&apos;ll
          crave more!
        </p>
        <CountDown />
        <button className="bg-red-500 px-6 py-3 text-white xl:text-lg ">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="relative w-full flex-1  lg:max-w-[50vw]  ">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
