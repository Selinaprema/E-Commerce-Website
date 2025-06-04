import React, { useEffect, useState } from "react";
import {
  FiHeart,
  FiStar,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import product from "../assets/product.jpg"; // Ensure this path is correct

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(4);

  const products = [
    {
      id: 1,
      name: "Sandalwood Bliss",
      price: 99.99,
      rating: 4.5,
      image: product,
      discount: 30,
    },
    {
      id: 2,
      name: "Vanilla Dream",
      price: 79.99,
      rating: 4.7,
      image: product,
      discount: 25,
    },
    {
      id: 3,
      name: "Lavender Calm",
      price: 89.5,
      rating: 4.3,
      image: product,
      discount: 20,
    },
    {
      id: 4,
      name: "Rose Serenity",
      price: 109.99,
      rating: 4.8,
      image: product,
      discount: 35,
    },
    {
      id: 5,
      name: "Citrus Burst",
      price: 74.95,
      rating: 4.2,
      image: product,
      discount: 15,
    },
    {
      id: 6,
      name: "Cedar Musk",
      price: 95.0,
      rating: 4.6,
      image: product,
      discount: 28,
    },
    {
      id: 7,
      name: "Ocean Mist",
      price: 82.99,
      rating: 4.4,
      image: product,
      discount: 22,
    },
    {
      id: 8,
      name: "Amber Nights",
      price: 102.0,
      rating: 4.7,
      image: product,
      discount: 30,
    },
    {
      id: 9,
      name: "Jasmine Noir",
      price: 98.49,
      rating: 4.5,
      image: product,
      discount: 25,
    },
    {
      id: 10,
      name: "Patchouli Woods",
      price: 88.75,
      rating: 4.1,
      image: product,
      discount: 18,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(1);
      } else if (window.innerWidth < 768) {
        setProductsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerPage(3);
      } else {
        setProductsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / productsPerPage);
  const startIdx = currentSlide * productsPerPage;
  const visibleProducts = products.slice(startIdx, startIdx + productsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section id="products" className="py-12 scroll-mt-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#59745f]">
            Featured Products
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-[#e0eae2] transition-colors"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-[#e0eae2] transition-colors"
              aria-label="Next slide"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.discount > 0 && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
                <button className="absolute top-3 left-3 p-2 bg-white rounded-full shadow hover:bg-[#e0eae2] text-gray-700">
                  <FiHeart size={18} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.rating})
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#333] mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[#59745f]">
                      $
                      {(product.price * (1 - product.discount / 100)).toFixed(
                        2
                      )}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="p-2 bg-[#59745f] rounded-full text-white hover:bg-[#45674c] transition-colors">
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-[#59745f]" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
