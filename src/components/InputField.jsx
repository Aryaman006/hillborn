export default function InputField({ type, placeholder, ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        {...props}
      />
    );
  }
  