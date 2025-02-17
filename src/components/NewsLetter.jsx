export default function Newsletter() {
  return (
    <div className="bg-gradient-to-r min-h-[18rem] md:min-h-[20rem] lg:min-h-[24rem] mb-20 from-gray-800 to-gray-950 text-white p-6 md:p-12 rounded-lg relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 border border-gray-700 rounded-full"></div>
        <div className="absolute bottom-10 left-6 w-16 h-16 md:w-32 md:h-32 border border-gray-700 rounded-full"></div>
        <div className="absolute top-16 right-10 w-24 h-24 md:w-48 md:h-48 border border-gray-700 rounded-full"></div>
        <div className="absolute bottom-4 right-6 w-18 h-18 md:w-36 md:h-36 border border-gray-700 rounded-full"></div>
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-24 md:h-24 border border-gray-700 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="mt-8 relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16">
        {/* Left Section */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center md:text-left">
          Subscribe to our weekly email newsletter!
        </h2>

        {/* Right Section */}
        <div className="flex flex-col w-full md:w-auto">
          <form className="flex flex-col md:flex-row w-full md:border-b gap-4 md:gap-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 border-b md:border-none py-2 bg-transparent text-white focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              className="bg-white text-black w-40 mb-4 md:py-0 md:h-12 rounded-full font-medium hover:bg-gray-100 transition"
            >
              SUBSCRIBE →
            </button>
          </form>
          <div className="flex items-center justify-center gap-2 mt-4">
            {/* Icon */}
            <i>
              <img
                src="/images/check-icon.png"
                alt="Check Icon"
                className="h-4 w-4 md:h-5 md:w-5"
              />
            </i>

            {/* Text */}
            <p className="text-sm md:text-base text-gray-400 text-center">
              Join the 10,000 users in our newsletter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
