import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function TeamMembers() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet our team members
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida
            malesuada quam commodo id integer nam.
          </p>
        </div>

        {/* Grid with Team Members and WhatsApp Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Member 1 */}
            <div className="relative group">
              <Image
                src="/images/founder1.png"
                alt="Gowtham Kumar D"
                width={400}
                height={500}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-lg font-bold">Gowtham Kumar D</h3>
                <p className="text-gray-300 text-sm">CEO & CO-FOUNDER</p>
              </div>
            </div>

            {/* More team members can go here */}
          </div>

          {/* Right Column: WhatsApp Icon and Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-gray-800 text-lg font-medium mb-4">
              Have any doubts? <br className="md:hidden" />
              <span className="text-green-600 font-semibold">Chat with us on WhatsApp</span>
            </p>
            <a
              href="https://wa.me/919353690229?text=Hi%20I%20need%20support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 transition-transform duration-300 transform hover:scale-110"
            >
              <FaWhatsapp className="md:ml-36 text-[100px]" />
            </a>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:bg-gray-700">
            Explore More
            <span className="ml-2 text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
