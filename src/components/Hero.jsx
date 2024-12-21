import React, { useState } from 'react';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    title: 'Stripy Zig Zag Jigsaw Pillow and Duvet Set',
    buttonText: 'View Product',
  },
  {
    image:
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80',
    title: 'Modern Lamp for Your Home',
    buttonText: 'Discover More',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    title: 'Elegant Wooden Clock',
    buttonText: 'Shop Now',
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide */}
      <div
        className="absolute w-full h-full transition-transform duration-500 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40">
              <div className="text-white text-center">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <a
                  href="#"
                  className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
      >
        &#8594;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

