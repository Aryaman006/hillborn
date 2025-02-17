import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-8 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex flex-col lg:w-1/2">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center lg:text-left">
              About Us
            </h2>
            <p className="text-gray-600 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              We offer digital solutions, web development, and digital
              marketing to enhance your online presence and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">1. Our Story</h3>
              <p className="text-gray-600 text-sm">
                We started to empower businesses with innovative, scalable, and
                impactful digital solutions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">2. Our Expertise</h3>
              <p className="text-gray-600 text-sm">
                We specialize in crafting user-friendly, high-performance
                digital solutions for various industries.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">3. Why Choose Us</h3>
              <p className="text-gray-600 text-sm">
                We deliver tailored, transparent, and reliable solutions that
                exceed client expectations consistently.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">4. Building Together</h3>
              <p className="text-gray-600 text-sm">
                We partner with clients to create transformative solutions for
                today and future challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Right Stats Section */}
        <div className="flex flex-col gap-10">
          {/* Explore Button */}
          <div className="text-center lg:text-left">
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-700">
              Explore More
            </button>
          </div>
          {/* Stats Box */}
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 text-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              {/* Employee Count */}
              <div className="w-full flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Image src="/images/img3.png" height={30} width={30} />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">24+</p>
                  <p className="text-sm text-gray-300">Employees</p>
                </div>
              </div>

              {/* Office Count */}
              <div className="w-full flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Image src="/images/img1.png" height={30} width={30} />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">2+</p>
                  <p className="text-sm text-gray-300">Offices</p>
                </div>
              </div>

              {/* Cities Count */}
              <div className="w-full flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <Image src="/images/img2.png" height={30} width={30} />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">23+</p>
                  <p className="text-sm text-gray-300">Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
