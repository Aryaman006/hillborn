export default function Header2({ heading, subheading }) {
  return (
    <section
      className="relative bg-black bg-bottom bg-cover bg-[url('/images/bg-image2.png')] 
      bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="text-center flex flex-col justify-center max-w-6xl px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[90%] sm:max-w-[800px] font-extrabold leading-tight 
          sm:leading-snug md:leading-snug lg:leading-normal tracking-wide mx-auto"
        >
          {heading}
        </h1>

        {/* Subheading */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-[90%] sm:max-w-[850px] 
          mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-gray-300 mx-auto"
        >
          {subheading}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center font-semibold mt-8 sm:mt-10 md:mt-14 gap-4 sm:gap-6">
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-950 
            text-white rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
            aria-label="Get Our Services"
          >
            Get Our Services
          </button>
          <button
            className="bg-white px-6 sm:px-8 py-3 sm:py-4 text-black rounded-full hover:bg-gray-100 
            transition duration-300 shadow-lg"
            aria-label="Contact Here"
          >
            Contact Here
          </button>
        </div>
      </div>
    </section>
  );
}
