import Image from "next/image";
import EndlessScrollUp from "./test2";
import EndlessScrollDown from "./test";

export default function Hero() {
  const images = [
    "/images/sample1.png",
    "/images/sample1.png",
    "/images/sample1.png",
    "/images/sample1.png",
    "/images/sample2.png",
    "/images/sample3.png",
    "/images/sample4.png",
  ];

  const socialLinks = [
    { src: "/images/Google.png", alt: "Google" },
    { src: "/images/Facebook.png", alt: "Facebook" },
    { src: "/images/Youtube.png", alt: "YouTube" },
    { src: "/images/Pinterest.png", alt: "Pinterest" },
    { src: "/images/Twitch.png", alt: "Twitch" },
    { src: "/images/Webflow.png", alt: "Webflow" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-8xl md:ml-28 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 p-6 lg:p-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex items-center gap-3 w-72 bg-white rounded-full border p-3 shadow">
            <span className="text-sm font-medium text-gray-800">
              Made by Our Best Developers
            </span>
            <Image src="/images/image 4.png" height={25} width={25} alt="Developer Badge" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Businesses with Innovative Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Helping businesses grow and succeed by providing smart and creative
            ideas. We create tools and designs that make work easier, improve
            customer experiences, and help businesses stay ahead in a
            fast-changing world.
          </p>
          <div className="flex gap-6">
            <button className="bg-gradient-to-r from-gray-800 to-gray-950 w-52 h-12 text-white rounded-lg hover:opacity-90 transition duration-300 shadow-lg">
              Get Our Services
            </button>
            <button className="bg-gray-200 px-8 py-3 rounded-full hover:bg-gray-300 transition duration-300 shadow-lg">
              Sign In
            </button>
          </div>
        </div>

        {/* Right Section (Images with Infinite Scroll) */}
        <div className="w-full overflow-hidden lg:w-1/2 flex gap-6 flex-row">
          {/* Left Column - Upwards Scrolling */}
          <EndlessScrollUp />
          <EndlessScrollDown />
        </div>
      </div>

      {/* Footer Section */}
      {/* <footer className="bg-gradient-to-l from-gray-900 to-gray-700 mt-32 text-white py-10">
        <div className="mx-auto flex justify-center items-center">
          <div className="flex animate-loop gap-8 md:gap-36  justify-center">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="flex items-center transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <Image src={link.src} alt={link.alt} width={80} height={70} />
              </div>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  );
}
