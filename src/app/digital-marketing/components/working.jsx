export default function Steps({ steps }) {
  return (
    <div className="bg-gradient-to-r font-sans from-gray-600 via-gray-800 to-gray-950 text-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-20">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">How It Works?</h2>
        <p className="text-gray-300 mt-2 text-lg">
          Your Path to Digital Success
        </p>

        {/* Steps Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white max-w-xs mx-auto p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg text-lg font-bold">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-950">{step.heading}</h3>
              </div>
              {/* Step Description */}
              <p className="text-gray-700 text-base text-left leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
