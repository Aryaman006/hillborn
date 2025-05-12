import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const services = [
  {
    id: 1,
    title: "Digital Data Solution",
    description:
      "Tailored solutions for enterprise software, IT consulting, and seamless integration to drive business innovation.",
    icon: "/images/image4.png",
    link: "/digitaldataSolutions",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Boost your online presence through SEO, social media, content creation, and targeted advertising strategies.",
    icon: "/images/image5.png",
    link: "/digital-marketing",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Custom web development for responsive, scalable websites, ecommerce platforms, and ongoing digital support services.",
    icon: "/images/image6.png",
    link: "/web-development",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-black mb-2">
          Browse Our Set of Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We offer digital solutions, web development, and digital marketing to enhance your online presence and growth.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.link}
            className="relative group bg-white text-gray-800 border rounded-lg p-6 shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-700"
            aria-labelledby={`service-${service.id}`}
          >
            {/* Top-left frame */}
            <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-b from-gray-900 to-gray-700 group-hover:bg-white transition duration-500 flex items-center justify-center shadow-md">
              <Image
                src={service.icon}
                alt={service.title}
                width={32}
                height={32}
              />
            </div>

            {/* Content */}
            <h3
              id={`service-${service.id}`}
              className="text-xl font-semibold mb-2 mt-16 group-hover:text-white transition duration-500"
            >
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-300 transition duration-500">
              {service.description}
            </p>
            <span className="text-blue-500 flex items-center gap-1 group-hover:text-blue-300 transition duration-500">
              Learn more &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
