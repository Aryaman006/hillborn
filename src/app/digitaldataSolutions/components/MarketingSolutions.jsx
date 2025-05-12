import Image from "next/image";

const MarketingSolutions = () => {
  const cards = [
    {
      title: "Healthcare",
      description:
        "Healthcare industry is growing at a tremendous rate, and the global healthcare spending is expected to reach $8.7 trillion.",
      image: "/images/healthcare.png", // Replace with your image path
    },
    {
      title: "Technology",
      description:
        "Information Technology consumption is burgeoning at an astonishing rate. Concurrently, the number of IT solutions.",
      image: "/images/technology.png", // Replace with your image path
    },
    {
      title: "International",
      description:
        "You need to be absolutely certain that you are well-connected and have strategically placed data partners across the world.",
      image: "/images/international.png", // Replace with your image path
    },
    {
      title: "Industry",
      description:
        "Financial Services, Aerospace/Aviation Industry, Construction, Educational (govt and private), Manufacturing, Chemical.",
      image: "/images/industry.png", // Replace with your image path
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Transform Your Business with End-to-End Marketing Solutions
        </h2>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <Image
              src={card.image}
              alt={card.title}
              layout="responsive"
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingSolutions;
