import React from "react";
import HeroImage from "../assets/Candles_Hero_Image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center lg:text-left lg:items-start">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold font-sans text-white leading-tight mb-4">
            Experience the Luxury of Handcrafted Candles
          </h1>
          <p className="text-white text-base sm:text-lg mb-6">
            Indulge your senses with our exclusive collection of premium
            <br /> candles, designed to create an atmosphere of elegance and{" "}
            <br />
            relaxation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="/products"
              className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Shop Now
            </a>
            <a
              href="/offers"
              className="px-6 py-3 text-white text-sm font-semibold rounded-lg transition"
              style={{ backgroundColor: "#59745f" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#4a5e4d")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#59745f")
              }
            >
              View Offers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
