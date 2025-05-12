"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Slider from "react-slick";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

const WebsiteSelector = () => {
  const [templates, setTemplates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/templates`,
          {
            withCredentials: true,
            headers: { Accept: "application/json" },
          }
        );
        setTemplates(response.data.data);
      } catch (error) {
        console.error("Error fetching templates", error);
        toast.error("Failed to load templates.");
      }
    };
    fetchTemplates();
  }, []);

  const filteredTemplates = templates.filter((site) =>
    site.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedTemplates = filteredTemplates.reduce((acc, template) => {
    acc[template.industry] = acc[template.industry] || [];
    acc[template.industry].push(template);
    return acc;
  }, {});

  const handlePreview = (url) => window.open(url, "_blank");

  const handleBuyNow = (template) => {
    setSelectedTemplate(template);
    setEmailModalOpen(true);
  };

  const handleConfirmPurchase = async () => {
    if (!userEmail) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/create`,
        {
          templateId: selectedTemplate._id,
          amount: selectedTemplate.price,
          email: userEmail,
        },
        { withCredentials: true }
      );

      const paymentUrl =
        response.data.paymentResponse?.data?.instrumentResponse?.redirectInfo?.url;

      if (response.data.success && paymentUrl) {
        toast.success("Redirecting to payment...");
        window.location.href = paymentUrl;
      } else {
        toast.error("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setEmailModalOpen(false);
      setUserEmail("");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8 py-10 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Choose Your Website Type
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mb-6">
          Perfect for showcasing your services and growing your brand
        </p>
        <input
          type="text"
          placeholder="Eg: Collabline"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-72 lg:w-96 px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {Object.keys(groupedTemplates).length > 0 ? (
        Object.keys(groupedTemplates).map((industry) => (
          <div key={industry} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
              {industry}
            </h2>
            <Slider {...settings}>
              {groupedTemplates[industry].map((template) => (
                <div key={template._id} className="px-2">
                  <div className="border border-gray-200 rounded-2xl shadow-md bg-white p-4 transition-transform transform hover:scale-105">
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={template.image}
                        alt={template.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mt-4 text-gray-900">
                      {template.name}
                    </h3>

                    <div className="flex items-center text-yellow-500 mb-2">
                      {"⭐".repeat(Math.round(template.rating || 4))}
                    </div>

                    <p className="text-lg font-medium mb-2">
                      ₹{template.price}
                    </p>

                    <div className="flex space-x-3">
                      <button
                        className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => handlePreview(template.previewUrl)}
                      >
                        Preview
                      </button>
                      <button
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
                        onClick={() => handleBuyNow(template)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No templates found</div>
      )}

      {/* Modal (placed outside the map!) */}
      {emailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Enter your email to proceed</h3>
            <input
              type="email"
              placeholder="example@email.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                onClick={() => {
                  setEmailModalOpen(false);
                  setUserEmail("");
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900"
                onClick={handleConfirmPurchase}
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteSelector;
