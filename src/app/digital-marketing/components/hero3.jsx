export default function WhyChooseUs({ content }) {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/images/digital-marketing.png"
            alt="Digital Marketing"
            className="w-full max-w-md md:max-w-lg h-[500px]"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {content.title}
          </h2>
          <ul className="space-y-6">
            {content.listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-4"
              >
                <span className="text-red-500 text-2xl">📌</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.heading}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
