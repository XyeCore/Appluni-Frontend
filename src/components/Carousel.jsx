import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../App'; // Import the isLoggedIn variable

export const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={item.image} alt={item.alt} className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(75, 0, 130, 0.8)' }}>
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">{item.title}</h1>
                  <p className="text-xl mb-6 max-w-2xl mx-auto">{item.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to={!isLoggedIn ? "/auth" : "/dashboard"} 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Get Started
                    </Link>
                    <a 
                      href="/universities" 
                      className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold border border-gray-300 transition-colors"
                    >
                      Explore Universities
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2  text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 scale-120 "
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 scale-120"
        aria-label="Next Slide"
      >
        &#10095;
      </button>
    </div>
  );
}; 