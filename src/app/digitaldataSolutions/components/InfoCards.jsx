const InfoCard = ({ number, title, content, list, gradient }) => {
  return (
    <div className="relative p-6 sm:p-8 lg:p-10 mb-10">
      {/* Circular Gradient Background behind the card */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className={`w-2/3 h-1/2 sm:w-3/4 sm:h-2/3 lg:w-full lg:h-3/4 mt-10 rounded-full blur-2xl opacity-50 ${gradient}`}
        ></div>
      </div>

      {/* Glass Effect Card */}
      <div className="relative backdrop-blur-md bg-white bg-opacity-10 rounded-xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-lg">
        {/* Numbering */}
        <div className="absolute top-4 right-4 bg-black text-white rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-xs sm:text-sm">
          {number}
        </div>
        {/* Heading */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
          {title}
        </h2>
        {/* Content */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {content}
        </p>
        {/* List (Optional) */}
        {list && (
          <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-2 sm:space-y-4 mt-4">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
