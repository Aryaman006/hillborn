import { FaGoogle, FaEnvelope } from "react-icons/fa";

export default function Login() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-2xl font-semibold text-center mb-2">Sign up</h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Welcome Back! Please Enter Your Details
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Join us
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        <div className="space-y-3">
         
        </div>
      </div>
    </div>
  );
}
