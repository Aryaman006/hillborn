import { useEffect, useState, useCallback } from "react";
import InputField from "./InputField";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "@/redux/action";

export default function AuthForm({ isRegister, toggleForm }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
const [profile, setProfile] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleGoogleLogin = useCallback(() => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`;
  }, []);

  useEffect(() => {
    console.log("enter");
  
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
  
    // If the status query param exists
    if (status) {
      // Immediately update the history to remove 'status' param
      params.delete("status");
      window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
  
      // Now handle the login status
      if (status === "success") {
        dispatch(setLoginStatus(true));
        toast.success("Login successful");
      } else {
        toast.error("Login failed");
      }
    }
  }, [dispatch]);  // Runs once on component mount and whenever `dispatch` changes
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchProfile = async () => {
console.log("enter")
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/profile`, {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to fetch profile");
      
      const data = await response.json();
     console.log("data",data)
      dispatch(setLoginStatus(true, data.roles));
      setProfile(data);
      setUserRole(data.roles || null);
    } catch (error) {
      console.error(error.message);
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isRegister) {
      formData.name = `${formData.firstName} ${formData.lastName}`;
      delete formData.firstName;
      delete formData.lastName;
    }

    try {
      const endpoint = isRegister
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Something went wrong");

      dispatch(setLoginStatus(true));
      toast.success(isRegister ? "Account created successfully!" : "Logged in successfully!");
      await fetchProfile();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isRegister ? (
        <div>
          <h2 className="text-2xl font-semibold text-center mb-2">Sign Up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName || ""}
              onChange={handleInputChange}
              required
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName || ""}
              onChange={handleInputChange}
              required
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email || ""}
              onChange={handleInputChange}
              required
            />
            <InputField
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone || ""}
              onChange={handleInputChange}
              required
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password || ""}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {loading ? "Processing..." : "Join Us"}
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              {loading ? "Processing..." : "Sign Up with Google"}
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4 cursor-pointer" onClick={toggleForm}>
            Already have an account? Log In
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold text-center mb-2">Log In</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email || ""}
              onChange={handleInputChange}
              required
            />
            <InputField
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone || ""}
              onChange={handleInputChange}
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password || ""}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {loading ? "Processing..." : "Log In"}
            </button>
          </form>

          <div className="text-center mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              {loading ? "Processing..." : "Log In with Google"}
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4 cursor-pointer" onClick={toggleForm}>
            Don't have an account? Sign Up
          </p>
        </div>
      )}
    </div>
  );
}
