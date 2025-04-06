"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import AuthForm from "./registerForm";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setLoginStatus } from "@/redux/action";

export default function Header() {
  const dispatch = useDispatch();
  console.log("hello");
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthFormOpen, setAuthFormOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const { isLoggedIn, role } = useSelector((state) => ({
    isLoggedIn: state.isLoggedIn,
    role: state.role,
  }));

  const toggleForm = () => setIsRegister((prev) => !prev);

  const closeAuthForm = () => {
    setAuthFormOpen(false);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/logout`,
        { method: "POST" }
      );
      if (response.ok) {
        dispatch(setLoginStatus(false, null));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToSection = (id) => {
    // Check if already on the homepage, else navigate to it first
    if (window.location.pathname !== "/") {
      router.push("/").then(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      });
    } else {
      // If already on homepage, directly scroll to the section
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  // const navigateToSection = (id) => {
  //   document.getElementById(id)?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  //   setMobileMenuOpen(false); // Close menu if on mobile
  // };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="HILLBORN Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button
            className="text-gray-600 hover:text-black transition-colors duration-200"
            onClick={() => navigateToSection("hero")}
          >
            Home
          </button>
          <button
            className="text-gray-600 hover:text-black transition-colors duration-200"
            onClick={() => navigateToSection("services")}
          >
            Service
          </button>
          <button
            className="text-gray-600 hover:text-black transition-colors duration-200"
            onClick={() => navigateToSection("about")}
          >
            About Us
          </button>
          <button
            className="text-gray-600 hover:text-black transition-colors duration-200"
            onClick={() => navigateToSection("contact")}
          >
            Contact Us
          </button>
        </nav>

        {/* Call to Action Buttons / Account Section */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <FaUserCircle
                size={24}
                className="text-gray-600 hover:text-black cursor-pointer"
                onClick={() => {
                  if (role === "admin") {
                    router.push("/admin");
                  } else {
                    router.push("/account");
                  }
                }}
              />

              <button
                className="border px-4 py-2 rounded-lg text-black hover:bg-gray-200 transition-colors duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="border px-4 py-2 rounded-lg text-black hover:bg-gray-200 transition-colors duration-200"
                onClick={() => {
                  setAuthFormOpen(true);
                  setIsRegister(false);
                }}
              >
                Login
              </button>
              <button
                className="border px-4 py-2 rounded-lg text-black hover:bg-gray-200 transition-colors duration-200"
                onClick={() => {
                  setAuthFormOpen(true);
                  setIsRegister(true);
                }}
              >
                Create Free Account
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-md z-50">
          <button
            className="absolute top-4 right-6 text-2xl text-gray-600"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center space-y-6 py-4">
            <button
              className="text-gray-600 text-xl hover:text-black transition-colors duration-200"
              onClick={() => navigateToSection("hero")}
            >
              Home
            </button>
            <button
              className="text-gray-600 text-xl hover:text-black transition-colors duration-200"
              onClick={() => navigateToSection("services")}
            >
              Service
            </button>
            <button
              className="text-gray-600 text-xl hover:text-black transition-colors duration-200"
              onClick={() => navigateToSection("about")}
            >
              About Us
            </button>
            <button
              className="text-gray-600 text-xl hover:text-black transition-colors duration-200"
              onClick={() => navigateToSection("contact")}
            >
              Contact Us
            </button>
            {isLoggedIn ? (
              <>
                <FaUserCircle
                  size={24}
                  className="text-gray-600 hover:text-black cursor-pointer"
                  onClick={() => {
                    if (role === "admin") {
                      router.push("/admin");
                    } else {
                      router.push("/account");
                      setMobileMenuOpen(false);
                    }
                  }}
                />

                <button
                  className="border px-6 py-3 rounded-lg text-black hover:bg-gray-200 transition-colors duration-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="border px-6 py-3 rounded-lg text-black hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthFormOpen(true);
                    setIsRegister(false);
                  }}
                >
                  Login
                </button>
                <button
                  className="border px-6 py-3 rounded-lg text-black hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthFormOpen(true);
                    setIsRegister(true);
                  }}
                >
                  Create Free Account
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* AuthForm Modal */}
      {isAuthFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={closeAuthForm}
            >
              <FaTimes size={20} />
            </button>
            <AuthForm
              isRegister={isRegister}
              closeAuthForm={closeAuthForm}
              toggleForm={toggleForm}
            />
          </div>
        </div>
      )}
    </header>
  );
}
