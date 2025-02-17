"use client"
const ResultsInNumbers = () => {
    const stats = [
      { value: "99", label: "Customer satisfaction", sign: "%" },
      { value: "32", label: "Active users", sign: "M" },
      { value: "125", label: "Team members", sign: "+" },
      { value: "240", label: "Company growth", sign: "%" },
    ];
  
    return (
      <section className="py-16 px-4 lg:px-20 bg-white">
        <div className="flex max-w-screen-xl flex-col lg:flex-row items-center lg:gap-60">
          {/* Left Section */}
          <div className="flex flex-col md:ml-20 max-w-md items-start mb-8 lg:mb-0">
            <div className="w-20 h-20 mb-4 flex items-center justify-center bg-black rounded-2xl">
              <img
                src="/images/icon.png" // Replace with your icon path
                alt="Results Icon"
                className="w-10 h-10"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Our results in numbers
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit eget
              quamumto.
            </p>
          </div>
  
          {/* Right Section */}
          <div className="relative w-full md:w-1/3 grid grid-cols-2 gap-y-6">
            {/* Horizontal Line */}
            <div className="absolute inset-x-0 top-1/2  h-px bg-gray-700"></div>
            {/* Vertical Line */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-gray-700"></div>
  
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col m-4 md:m-8 items-start ${
                  index % 2 === 1 ? "pl-8" : "pr-8"
                }`}
              >
                <div className="flex items-center">
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <div className="text-3xl font-bold text-gray-700">{stat.sign}</div>
                </div>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ResultsInNumbers;
  