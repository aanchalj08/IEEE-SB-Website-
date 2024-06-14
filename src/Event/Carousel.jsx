import { useState } from 'react';
import screenshot1 from '../assets/Screenshot1.png';
import screenshot2 from '../assets/Screenshot2.png';
import screenshot3 from '../assets/Screenshot3.png';
import screenshot4 from '../assets/Screenshot4.png';
import screenshot5 from '../assets/Screenshot5.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, imageURL: screenshot1, text: '' },
    { id: 2, imageURL: screenshot2, text: '' },
    { id: 3, imageURL: screenshot3, text: '' },
    { id: 4, imageURL: screenshot4, text: '' },
    { id: 5, imageURL: screenshot5, text: '' },
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-10 mb-5">
    
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 h-50"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-80 flex items-center justify-center text-white text-2xl"
              style={{
                backgroundImage: `url(${slide.imageURL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {slide.text}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
