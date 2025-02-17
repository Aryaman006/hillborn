import React, { useEffect, useRef } from "react";

const EndlessScrollUp = () => {
  const images = [
    "/images/sample1.png",
    "/images/sample2.png",
    "/images/sample3.png",
    "/images/sample4.png",
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let translateY = -(scrollContainer.offsetHeight / 2); // Start in the middle of the container
    scrollContainer.style.transform = `translateY(${translateY}px)`;

    let animationFrame;
    const animateScroll = () => {
      translateY -= 1; // Control the speed of scrolling
      scrollContainer.style.transform = `translateY(${translateY}px)`;

      // When the top of the list reaches the top of the container, reset the scroll position
      if (translateY <= -scrollContainer.offsetHeight) {
        translateY = -(scrollContainer.offsetHeight / 2);
      }

      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-96 w-full lg:w-64 overflow-hidden bg-gray-100">
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

export default EndlessScrollUp;
