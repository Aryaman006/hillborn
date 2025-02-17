export default function FeaturesSection({ features }) {
    return (
      <div className="bg-gradient-to-br from-gray-700 to-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2 className="text-white text-3xl font-bold mb-4">Features Section</h2>
          <p className="text-gray-400 mb-12">
            Why Choose Hillborn for Digital Marketing?
          </p>
  
          {/* Features Pyramid */}
          <div className="flex flex-col items-center space-y-8">
            {/* First Row (3 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 w-72"
                >
                  <div className="text-4xl font-bold text-gray-500 mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
  
            {/* Second Row (2 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.slice(3, 5).map((feature, index) => (
                <div
                  key={index + 3}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 w-72"
                >
                  <div className="text-4xl font-bold text-gray-500 mb-4">
                    {String(index + 4).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
  
            {/* Third Row (1 Card) */}
            <div className="grid grid-cols-1">
              {features.slice(5, 6).map((feature, index) => (
                <div
                  key={index + 5}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 w-72"
                >
                  <div className="text-4xl font-bold text-gray-500 mb-4">
                    {String(index + 6).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  