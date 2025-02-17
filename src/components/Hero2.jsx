export default function Hero2() {
  return (
    <section className="relative bg-black bg-bottom bg-cover bg-[url('/images/bg-image.png')] bg-no-repeat text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="text-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-snug lg:leading-normal">
          Your One–Stop Solution <br className="hidden md:block" /> for Custom Website <br className="hidden md:block" /> Packages
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 md:mt-10 text-gray-300">
          Get a professionally built website in days, not weeks.
        </p>
        <button className="mt-10 sm:mt-12 md:mt-16 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-800 to-gray-950 text-white rounded-lg shadow-lg hover:bg-gray-700 transition">
          Get Our Services
        </button>
      </div>
    </section>
  );
}
