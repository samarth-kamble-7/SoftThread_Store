import Image from "next/image";
import React from "react";

const Offers = () => {
  return (
    <div>
      <h1 className=" flex items-center justify-center text-teal-600 font-extrabold text-[50px]">
        Offer
      </h1>
      <div className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 ml-[170px] mr-[170px] mt-5 ">
        <Image
          alt=""
          height={200}
          width={200}
          src={"/banner.png"}
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Run with the pack
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-[55px] font-black sm:text-5xl lg:text-6xl">
              {" "}
              Get 20% off{" "}
            </span>

            <span className="mt-2 block text-sm">On your next order</span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href="#"
          >
            Get Discount
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th April, 2024 *
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
