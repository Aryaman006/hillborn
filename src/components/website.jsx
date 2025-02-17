"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WebsiteSelector() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/templates`,
          {
            withCredentials: true, // Send cookies (if authentication is required)
            headers: {
              Accept: "application/json", // Set Accept header for JSON response
            },
          }
        );
        // console.log(response.data.data);
        setTemplates(response.data.data);
      } catch (error) {
        console.error("Error fetching templates", error);
        toast.error("Failed to load templates");
      }
    };
    fetchTemplates();
  }, []);

  const filteredWebsites = templates.filter((site) =>
    site.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExploreMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleBuyNow = async (template) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/create`,
        { templateId: template._id, amount: template.price },
        { withCredentials: true }
      );
  
      console.log("Payment Response:", response.data);
      
  
      // Extract the correct URL path
      const paymentUrl = response.data.paymentResponse?.data?.instrumentResponse?.redirectInfo?.url;
  
      if (response.data.success && paymentUrl) {
        toast.success("Redirecting to payment...");
        window.location.href = paymentUrl; 

        

        // await verifyPayment();

        // Redirect user to the payment page
      } else {
        toast.error("Failed to initiate payment. No redirect URL found.");
      }
    } catch (error) {
      console.error("Payment initiation failed", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  // const verifyPayment = async () => {
  //   try {
  //     const verificationResponse = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/verify`,
  //       // { orderId, transactionId },
  //       { withCredentials: true }
  //     );
  
  //     if (verificationResponse.data.success) {
  //       toast.success("Payment verified successfully");
  //     } else {
  //       toast.error("Payment verification failed");
  //     }
  //   } catch (error) {
  //     console.error("Error verifying payment:", error);
  //     toast.error("Something went wrong during payment verification");
  //   }
  // };
  
  
  const handlePreview = (url) => {
    window.open(url, "_blank");
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
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Eg: Collabline"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-72 lg:w-96 px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredWebsites.slice(0, visibleCount).map((site) => (
          <div
            key={site._id}
            onMouseEnter={() => setHoveredCard(site._id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`h-auto shadow-md flex flex-col md:flex-row transition-all duration-300 transform hover:shadow-xl ${
              hoveredCard === site._id
                ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white"
                : "bg-white text-gray-900"
            } rounded-3xl`}
          >
            <div className="w-full md:w-1/3 h-52 md:h-auto">
              {/* Display the image directly from base64 */}
              <img
  src={
    site.image.startsWith("data:image/jpeg;base64,")
      ? site.image // If already base64-encoded, use it directly
      : `data:image/jpeg;base64,${site.image}` // If not, prepend the base64 prefix
  }
  alt={site.name}
  className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-t-none"
/>

            </div>
            <div className="flex flex-col justify-center p-6 text-center sm:text-left md:w-1/2">
              <h2 className="text-2xl leading-relaxed font-bold">{site.name}</h2>
              <p className="text-base leading-7 max-w-md flex-wrap mb-4">{site.description}</p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-end p-6 md:w-1/4">
              <p className="text-sm mb-2">Price:</p>
              <p className="text-3xl leading-relaxed font-semibold mb-6">₹{site.price}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handlePreview(site.previewUrl)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                >
                  Preview
                </button>
                <button
  onClick={() => handleBuyNow(site)}
  className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-md hover:bg-white hover:text-gray-900 transition-all"
>
  Buy Now
</button>

              </div>
            </div>
          </div>
        ))}
        {filteredWebsites.length === 0 && (
          <div className="text-center text-gray-500">No templates found</div>
        )}
      </div>

      <div className="text-center mt-12">
        {visibleCount < filteredWebsites.length && (
          <button
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            onClick={handleExploreMore}
          >
            Explore More
          </button>
        )}
      </div>
    </div>
  );
}
