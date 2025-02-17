import Image from 'next/image';

export default function Services({ services }) {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
      {services.map((service) => (
        <article
          key={service.id}
          className="relative group bg-white text-gray-800 border rounded-lg p-6 flex-1 shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-700"
          aria-labelledby={`service-${service.id}`}
        >
          {/* Top-left frame */}
          <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-b from-gray-900 to-gray-700 group-hover:bg-white transition duration-500 flex items-center justify-center shadow-md">
            <Image
              src={service.icon}
              alt={service.title}
              width={28}
              height={28}
            />
          </div>
          {/* Content */}
          <h3
            id={`service-${service.id}`}
            className="text-xl font-semibold mb-2 mt-12 group-hover:text-white transition duration-500"
          >
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-300 transition duration-500">
            {service.description}
          </p>
          <a
            href={service.link}
            className="text-blue-500 flex items-center gap-1 group-hover:text-blue-300 transition duration-500"
          >
            Learn more &rarr;
          </a>
        </article>
      ))}
    </div>
  );
}
