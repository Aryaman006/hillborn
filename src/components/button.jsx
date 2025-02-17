"use client";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
