"use client";
import { useState, useEffect } from "react";
import { User, ShoppingBag } from "lucide-react";
import Button from "@/components/button";
import { Card, CardContent } from "@/components/card";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 hidden md:block">
        <h2 className="text-2xl font-semibold mb-6">User Dashboard</h2>
        <nav>
          <Button
            className={`w-full mb-4 flex items-center gap-3 py-2 rounded-lg text-lg ${
              activeTab === "profile" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <User size={20} /> Profile
          </Button>
          <Button
            className={`w-full flex items-center gap-3 py-2 rounded-lg text-lg ${
              activeTab === "orders" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            <ShoppingBag size={20} /> Orders
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        {activeTab === "profile" && <UserProfile />}
        {activeTab === "orders" && <UserOrders />}
      </main>
    </div>
  );
};

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/profile`, {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <Card>
      <CardContent className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <div className="space-y-3">
          <p className="text-gray-700"><strong>Name:</strong> {profile.name}</p>
          <p className="text-gray-700"><strong>Email:</strong> {profile.email}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {profile.phone}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/templates`, {
          credentials: "include",
          // withCredentials: true,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data.templates);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDownload = async (templateId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/templates/${templateId}/download`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to download template");
      }
      console.log(response);

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `template_${templateId}.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <Card>
      <CardContent className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>
        {orders.length === 0 ? (
          <p>No recent templates found.</p>
        ) : (
          <ul className="space-y-6">
            {orders.map((order) => {
              const imageSrc = order.image && order.image.data
                ? `data:image/jpeg;base64,${Buffer.from(order.image.data).toString("base64")}`
                : null;

              return (
                <li key={order._id} className="flex items-center justify-between space-x-4 border-b pb-4">
                  <div className="flex items-center space-x-4">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={`Image for ${order.name}`}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
                        No image
                      </div>
                    )}
                    <div>
                      <p className="text-lg font-medium">{order.name}</p>
                      <div className="mt-2 flex space-x-4">
                        <button
                          onClick={() => window.open(order.previewUrl, "_blank")}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                        >
                          Preview
                        </button>
                        <button
                          onClick={() => handleDownload(order._id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default Dashboard;
