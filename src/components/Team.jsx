import Image from "next/image";

export default function TeamMembers() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Meet our team members
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat gravida
          malesuada quam commodo id integer nam.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Member 1 */}
          <div className="relative group">
            <Image
              src="/images/founder1.png" // Replace with your image path
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

          {/* Member 2 */}
          {/* <div className="relative group">
            <Image
              src="/images/founder2.png" // Replace with your image path
              alt="Munikrishna"
              width={400}
              height={500}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Manokrishna</h3>
              <p className="text-gray-300 text-sm">CEO & CO-FOUNDER</p>
            </div>
          </div> */}

          {/* Member 3 */}
          {/* <div className="relative group">
            <Image
              src="/images/founder3.png" // Replace with your image path
              alt="Mano Gnanaseelan"
              width={400}
              height={500}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-lg font-bold">Muni Gnanaseelan</h3>
              <p className="text-gray-300 text-sm">CO-FOUNDER & CTO</p>
            </div>
          </div> */}
        </div>

        {/* Explore More Button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:bg-gray-700">
            Explore More
            <span className="ml-2 text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}