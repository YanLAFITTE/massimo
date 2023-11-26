import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="flex w-max">
        {/* Single item */}
        {featuredProducts.map((item) => (
          <div
            className=" flex h-[90vh] w-screen flex-col items-center justify-center  p-4   transition-all duration-300 hover:bg-fuchsia-50 md:w-[50vw]  xl:w-[33vw]"
            key={item.id}
          >
            {/* Image container */}
            {item.img && (
              <div className="group relative w-full flex-1">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-contain transition-all duration-300 group-hover:rotate-[60deg]"
                />
              </div>
            )}
            {/* Text container */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 xl:p-8">{item.desc}</p>
              <span className="text-xl  font-bold">${item.price}</span>
              <button className="rounded-md bg-red-500 px-2 py-1 text-white  xl:text-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
