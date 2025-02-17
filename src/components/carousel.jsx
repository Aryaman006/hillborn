"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const projects = [
  { id: 1, title: "Unlimited movies, TV shows and more.", description: "Enjoy on your TV, download your shows to watch offline.", imageUrl: "/images/project1.png" },
  { id: 2, title: "We power innovation because we are innovators.", description: "Visualize it, create it, grow it.", imageUrl: "/images/project2.png" },
  { id: 3, title: "Explore the beauty of the beautiful world.", description: "Plan your trip with ease and convenience.", imageUrl: "/images/project3.png" },
  { id: 4, title: "Discover modern architecture.", description: "Find unique building designs.", imageUrl: "/images/project1.png" },
  { id: 5, title: "Empowering startups globally.", description: "Solutions tailored to your needs.", imageUrl: "/images/project2.png" },
  { id: 6, title: "Mastering the art of travel.", description: "Uncover hidden gems worldwide.", imageUrl: "/images/project3.png" },
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3; // Number of items to show on large screens
  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024;

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipeLeft = () => {
    if (currentIndex < projects.length - (isLargeScreen ? itemsPerView : 1)) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    delta: 50,
  });

  return (
    <div className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Our Recent Projects</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Browse through our recent work. Swipe to explore more!
      </p>

      <div {...handlers} className="relative max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (isLargeScreen ? 33.33 : 100)}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                isLargeScreen ? "min-w-1/3" : "min-w-full"
              } px-4 flex-shrink-0`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {projects
          .slice(
            0,
            projects.length - (isLargeScreen ? itemsPerView - 1 : 0)
          )
          .map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handleSwipeRight}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        aria-label="Previous"
      >
        &larr;
      </button>
      <button
        onClick={handleSwipeLeft}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        aria-label="Next"
      >
        &rarr;
      </button>
    </div>
  );
}
