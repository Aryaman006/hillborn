const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Carter",
      role: "Designer",
      feedback: "An amazing service",
      details:
        "Lorem ipsum dolor sit ametolii col consectetur adipiscing lectus a nunc mauris scelerisque sed.",
      image: "/images/john-carter.png", // Replace with your image path
      bgColor: "bg-gray-900 text-white",
    },
    {
      id: 2,
      name: "Sophie Moore",
      role: "Head",
      feedback: "One of a kind service",
      details:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      image: "/images/sophie-moore.png", // Replace with your image path
      bgColor: "bg-white text-gray-900",
    },
    {
      id: 3,
      name: "Andy Smith",
      role: "Manager",
      feedback: "The best service",
      details:
        "Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant.",
      image: "/images/andy-smith.png", // Replace with your image path
      bgColor: "bg-white text-gray-900",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What our clients say
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          elementum tempus hac tellus libero accumsan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`p-6 rounded-xl shadow-lg ${testimonial.bgColor}`}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
            </div>
            <blockquote className="mb-4 text-lg md:text-xl font-semibold">
              &ldquo;{testimonial.feedback}&rdquo;
            </blockquote>
            <p className="text-sm md:text-base leading-relaxed">
              {testimonial.details}
            </p>
            <div className="mt-5">
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
