import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "B2B Email Appending",
    description:
      "Enhance your business database by adding accurate and verified email addresses to improve marketing outreach and communication.",
    icon: "/images/i1.png",
    link: "/digitaldataSolutions/email-appending-service",
  },
  {
    id: 2,
    title: "Data Appending",
    description:
      "Update and complete existing records with missing details like emails, phone numbers, and addresses to ensure comprehensive.",
    icon: "/images/i2.png",
    link: "/digitaldataSolutions/data-appending-service",
  },
  {
    id: 3,
    title: "Data Cleansing",
    description:
      "Remove duplicates, outdated entries, and incorrect information from your database to ensure data accuracy for better decision-making.",
    icon: "/images/i3.png",
    link:"/digitaldataSolutions/data-cleaning-service",
  },
  {
    id: 4,
    title: "Data Licensing",
    description:
      "Gain access to high-quality, pre-verified datasets under secure licensing agreements for targeted marketing and business.",
    icon: "/images/i4.png",
    link: "/digitaldataSolutions/data-licensing-service",
  },
  // {
  //   id: 5,
  //   title: "Phone Appending",
  //   description:
  //     "Add or update phone numbers in your existing database to improve customer engagement and ensure effective communication.",
  //   icon: "/images/i5.png",
  //   link: "/digitaldataSolutions/phone-appending-service",
  // },
];

const Services2 = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Browse our set of services
        </h2>
        <p className="text-gray-600 leading-7 max-w-xl mx-auto">
          We offer digital solutions, web development, and digital marketing to enhance your online presence and growth.
        </p>
      </div>

      {/* Cards Section */}
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* First Row: Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* First Row */}
  {services.slice(0, 3).map((service) => (
    <Link
      key={service.id}
      href={service.link}
      className="relative group bg-white text-gray-800 border rounded-lg p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-700"
      aria-labelledby={`service-${service.id}`}
    >
      <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-b from-gray-900 to-gray-700 group-hover:bg-white transition duration-500 flex items-center justify-center shadow-md">
        <Image
          src={service.icon}
          alt={service.title}
          width={28}
          height={28}
        />
      </div>
      <h3
        id={`service-${service.id}`}
        className="text-lg md:text-xl font-semibold mb-2 mt-12 group-hover:text-white transition duration-500"
      >
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base mb-4 group-hover:text-gray-300 transition duration-500">
        {service.description}
      </p>
      <span className="text-blue-500 flex items-center gap-1 group-hover:text-blue-300 transition duration-500">
        Learn more &rarr;
      </span>
    </Link>
  ))}

  {/* Second Row */}
  <div className="flex flex-col md:flex-row md:justify-center md:col-span-3 gap-6">
    {services.slice(3).map((service) => (
      <Link
        key={service.id}
        href={service.link}
        className="relative md:w-96 group bg-white text-gray-800 border rounded-lg p-6 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-700"
        aria-labelledby={`service-${service.id}`}
      >
        <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-b from-gray-900 to-gray-700 group-hover:bg-white transition duration-500 flex items-center justify-center shadow-md">
          <Image
            src={service.icon}
            alt={service.title}
            width={28}
            height={28}
          />
        </div>
        <h3
          id={`service-${service.id}`}
          className="text-lg md:text-xl font-semibold mb-2 mt-12 group-hover:text-white transition duration-500"
        >
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base mb-4 group-hover:text-gray-300 transition duration-500">
          {service.description}
        </p>
        <span className="text-blue-500 flex items-center gap-1 group-hover:text-blue-300 transition duration-500">
          Learn more &rarr;
        </span>
      </Link>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Services2;
