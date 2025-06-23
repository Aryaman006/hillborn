import React, { useEffect, useRef } from "react";

const EndlessScrollDown = () => {
 const images = [
    "/images/sample1.jpeg",
    "/images/sample2.jpeg",
    "/images/sample3.jpeg",
    "/images/sample4.jpeg",
    "/images/sample5.jpeg",
    "/images/sample6.jpeg",
    "/images/sample4.jpeg",
  ];


  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let translateY = -scrollContainer.offsetHeight / 4; // Start midway through the first duplicate
    scrollContainer.style.transform = `translateY(${translateY}px)`;

    let animationFrame;
    const animateScroll = () => {
      translateY += 1; // Control the speed of scrolling
      scrollContainer.style.transform = `translateY(${translateY}px)`;

      // Reset when the bottom half is reached
      if (translateY >= 0) {
        translateY = -scrollContainer.offsetHeight / 2;
      }

      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, []);

  return (
    <div className="relative overflow-hidden h-96 w-full lg:w-64 bg-gray-100">
      <div className="flex flex-col" ref={scrollRef}>
        {/* Duplicate images for seamless loop */}
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="w-full h-auto max-w-full sm:max-w-1/2 lg:max-w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default EndlessScrollDown;
