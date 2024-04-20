import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-[50px] font-extrabold sm:text-5xl">
            Welcome to
            <strong className="font-extrabold text-teal-600 sm:block">
              {" "}
              SoftThread Heaven Store{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Welcome to the SoftThread Heaven, where you can find the best and
            most comfortable bedding products for your home. Our products are
            made from the finest materials and designed to provide you with the
            ultimate in comfort and relaxation. Whether you are looking for
            sheets, comforters, pillows, or other bedding products, we have
            everything you need to create the perfect sleep environment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/products"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
