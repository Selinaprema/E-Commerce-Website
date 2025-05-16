import React from "react";
import HeroImage from "../assets/Home-Hero-Image.jpg"; // or .png, etc.

const Hero = () => {
  return (
    <section id="home" className="bg-amber-50 scroll-mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4">
            Experience the Luxury of Handcrafted Candles
          </h1>
          <p className="text-amber-700 text-base sm:text-lg mb-6">
            Indulge your senses with our exclusive collection of premium
            candles, designed to create an atmosphere of elegance and
            relaxation.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="/products"
              className="px-6 py-3 bg-pink-900 text-white text-sm font-semibold rounded-lg"
            >
              Shop Now
            </a>
            <a
              href="/offers"
              className="px-6 py-3 border border-pink-500 text-pink-600 text-sm font-semibold rounded-lg"
            >
              View Offers
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-3/4 lg:w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
