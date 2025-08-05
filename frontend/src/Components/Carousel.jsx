import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import data from "../assets/data/recommendations.json";

const Carousel = () => {
  const containerRef = useRef(null);
  const items = data.productData;

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4">
      <h2 className="text-xl font-semibold mb-6 text-center text-white">
        Product Recommendations
      </h2>

      {/* Carousel wrapper with flex layout for proper arrow positioning */}
      <div className="flex items-center gap-4">
        {/* Left scroll button */}
        <button
          aria-label="Scroll Left"
          onClick={scrollLeft}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>

        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide flex-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map(({ productUrl, imageSrc, productTitle, price }, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 sm:w-44 md:w-48 scroll-snap-align-center"
              style={{
                marginRight: idx === items.length - 1 ? "0" : "24px",
              }}
            >
              <a
                href={productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full"
              >
                <div className="w-[60vw] h-[60vw] max-w-[17vw] max-h-[17vw] mb-3 flex items-center justify-center bg-gray-50 rounded">
                  <img
                    src={imageSrc}
                    alt={productTitle}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="w-full">
                  <h3 className="font-semibold text-xs sm:text-sm text-gray-900 mb-1 leading-tight">
                    {productTitle.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-gray-600 mb-1 leading-tight">
                    {productTitle.split(" - ")[1]}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">
                    £{price}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          aria-label="Scroll Right"
          onClick={scrollRight}
          className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105"
        >
          <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;