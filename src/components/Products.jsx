import Image from "next/image";

export default function FutureProducts() {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-6">
          Our Future Products
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Discover the innovations shaping tomorrow. Our future products are designed to inspire, enhance, and elevate your everyday experiences.
        </p>

        {/* Collage Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Image Block */}
          <div className="rounded-lg overflow-hidden col-span-1">
            <Image
              src="/images/p6.png"
              alt="Book an Exclusive"
              width={300}
              height={150}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Second Image Block */}
          <div className="rounded-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/p5.png"
              alt="Minimal Chair"
              width={300}
              height={100}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Third Image Block */}
          <div className="rounded-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/p1.png"
              alt="Elevate Your Experience"
              width={300}
              height={50}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Fourth Image Block */}
          <div className="rounded-lg md:mt-[-130px] overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/p2.png"
              alt="Explore The World"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Fifth Image Block */}
          <div className="rounded-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/p3.png"
              alt="To Travel Is To Live"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Sixth Image Block */}
          <div className="rounded-lg md:mt-[-250px] overflow-hidden col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/p4.png"
              alt="Future Innovations"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
