"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import Slider from "react-slick";
const WebsiteSelector = () => {
  const [templates, setTemplates] = useState([]);

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
        toast.error("Failed to load templates");
      }
    };
    fetchTemplates();
  }, []);

  const groupedTemplates = templates.reduce((acc, template) => {
    acc[template.industry] = acc[template.industry] || [];
    acc[template.industry].push(template);
    return acc;
  }, {});

  const handleBuyNow = async (template) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/create`,
        { templateId: template._id, amount: template.price },
        { withCredentials: true }
      );

      const paymentUrl =
        response.data.paymentResponse?.data?.instrumentResponse?.redirectInfo
          ?.url;

      if (response.data.success && paymentUrl) {
        toast.success("Redirecting to payment...");
        window.location.href = paymentUrl;
      } else {
        toast.error("Failed to initiate payment. No redirect URL found.");
      }
    } catch (error) {
      console.error("Payment initiation failed", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePreview = (url) => window.open(url, "_blank");

  return (
    <div className="container mx-auto px-6 py-12">
      {Object.keys(groupedTemplates).map((industry) => (
        <div key={industry} className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-3">
            {industry}
          </h2>
          <Slider {...settings}>
            {groupedTemplates[industry].map((template) => (
              <div key={template._id} className="px-2">
                <div className="h-[400px] border border-gray-200 rounded-2xl shadow-md bg-white overflow-hidden transition-transform transform hover:scale-105">
                  <div className="h-3/5 relative">
                    <Image
                      src={template.image}
                      alt={template.name}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="h-2/5 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {template.name}
                      </h3>
                      <p className="text-lg text-gray-700 font-medium">
                        ₹{template.price}
                      </p>
                    </div>
                    <div className="flex mt-3 space-x-4">
                      <button
                        className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => handlePreview(template.previewUrl)}
                      >
                        Preview
                      </button>
                      <button
                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                        onClick={() => handleBuyNow(template)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default WebsiteSelector;
