import React, { useRef } from "react";
import data from '../assets/data/recommendations.json';

const Carousel = () => {
  const containerRef = useRef(null);
  const items = data.productData;

  // Scroll handlers for horizontal scroll
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4">
      <h2 className="text-xl font-semibold mb-6 text-center text-white">Product Recommendations</h2>

      <div className="relative flex items-center">
        {/* Left scroll button - positioned outside the scrollable area */}
        <button
          aria-label="Scroll Left"
          onClick={scrollLeft}
          className="flex-shrink-0 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10 mr-4"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth flex-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map(({ productUrl, imageSrc, productTitle, price }, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-40 sm:w-44 md:w-48 scroll-snap-align-center"
              style={{ marginRight: idx === items.length - 1 ? '0' : '24px' }}
            >
              <a
                href={productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full"
              >
                {/* Product Image */}
                <div className="w-[50vw] h-[50vw] max-w-[120px] max-h-[120px] mb-3 flex items-center justify-center bg-gray-50 rounded">
                  <img
                    src={imageSrc}
                    alt={productTitle}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                {/* Product Details */}
                <div className="w-full">
                  <h3 className="font-semibold text-xs sm:text-sm text-gray-900 mb-1 leading-tight">
                    {productTitle.split(' - ')[0]}
                  </h3>
                  <p className="text-xs text-gray-600 mb-1 leading-tight">
                    {productTitle.split(' - ')[1]}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">
                    £{price}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right scroll button - positioned outside the scrollable area */}
        <button
          aria-label="Scroll Right"
          onClick={scrollRight}
          className="flex-shrink-0 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10 ml-4"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;