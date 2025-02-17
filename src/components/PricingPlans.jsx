"use client";

import { useState } from "react";

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState("growth");
  const [isMonthly, setIsMonthly] = useState(true);
  const [currency, setCurrency] = useState("INR"); // Default currency is INR

  // Exchange rates for INR, USD, and EUR
  const exchangeRates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
  };

  // Pricing details in INR (base currency)
  const pricing = {
    starter: { monthly: 5999, yearly: 59999 },
    growth: { monthly: 9999, yearly: 99999 },
    premium: { monthly: 14999, yearly: 149999 },
  };

  // Format currency
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price * exchangeRates[currency]);

  const togglePlanType = () => setIsMonthly(!isMonthly);

  const handleCurrencyChange = (e) => setCurrency(e.target.value);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Affordable Pricing Plans
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the best plan to grow your business with premium features and
          services.
        </p>

        {/* Currency Selector */}
        <div className="mt-4">
          <label className="mr-2 text-gray-700 font-medium" htmlFor="currency">
            Currency:
          </label>
          <select
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
          </select>
        </div>

        {/* Toggle for Monthly and Annual Plans */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-4 py-2 font-medium ${
              isMonthly ? "text-gray-900 bg-gray-200" : "text-gray-500 bg-gray-100"
            } rounded-l-lg focus:ring-2 focus:ring-gray-400`}
            onClick={togglePlanType}
          >
            Monthly Plan
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              !isMonthly ? "text-gray-900 bg-gray-200" : "text-gray-500 bg-gray-100"
            } border-l border-gray-300 rounded-r-lg`}
            onClick={togglePlanType}
          >
            Annual Plan
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 mt-12">
          {Object.entries(pricing).map(([plan, prices]) => (
            <div
              key={plan}
              className={`${
                selectedPlan === plan
                  ? "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
                  : "bg-white text-gray-900"
              } p-6 sm:p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 cursor-pointer`}
              onMouseEnter={() => setSelectedPlan(plan)}
            >
              <h3 className="text-xl font-semibold text-center capitalize">
                {plan}
              </h3>
              <p className="text-4xl font-bold mt-4 text-center sm:text-3xl">
                {formatPrice(isMonthly ? prices.monthly : prices.yearly)}
                <span className="text-lg font-normal">
                  /{isMonthly ? "month" : "year"}
                </span>
              </p>
              <p className="text-gray-500 mt-2">
                {plan === "starter"
                  ? "Get started with essential features for your online presence."
                  : plan === "growth"
                  ? "Everything in Starter Plan plus additional features."
                  : "Unlock unlimited features for a complete digital experience."}
              </p>
              <ul className="mt-6 space-y-2 text-left">
                {plan === "starter" && (
                  <>
                    <li>✅ Instant responsive website with up to 5 pages</li>
                    <li>✅ Basic SEO optimization</li>
                    <li>✅ Standard templates</li>
                    <li>✅ Email support</li>
                    <li>✅ Free logo design (worth ₹2,500)</li>
                    <li>✅ Social media integration (1 platform)</li>
                    <li>✅ Basic lead generation CRM</li>
                    <li>✅ WhatsApp integration</li>
                  </>
                )}
                {plan === "growth" && (
                  <>
                    <li>✅ Everything in Starter Plan</li>
                    <li>✅ Up to 10 pages</li>
                    <li>✅ Customizable templates</li>
                    <li>✅ Advanced SEO optimization</li>
                    <li>✅ Social media management (2 platforms, 15 posts/month)</li>
                    <li>✅ Paid promotions worth ₹5,000/month</li>
                    <li>✅ Priority email support</li>
                    <li>✅ Yearly festival posters for 30 festivals</li>
                    <li>✅ Lead generation CRM with analytics</li>
                    <li>✅ Enhanced WhatsApp integration for campaigns</li>
                  </>
                )}
                {plan === "premium" && (
                  <>
                    <li>✅ Everything in Growth Plan</li>
                    <li>✅ Unlimited pages</li>
                    <li>✅ E-commerce functionality</li>
                    <li>✅ Custom domain integration</li>
                    <li>✅ Comprehensive SEO and analytics</li>
                    <li>✅ 24/7 priority support</li>
                    <li>✅ Social media management (3 platforms, 20 posts/month)</li>
                    <li>✅ Paid promotions worth ₹10,000/month</li>
                    <li>✅ Lead generation CRM with advanced automation</li>
                    <li>✅ WhatsApp integration with chatbot functionality</li>
                    <li>✅ 2 months of free social media promotion (worth ₹25,000)</li>
                    <li>✅ Dedicated account manager for personalized support</li>
                  </>
                )}
              </ul>
              <button
                className={`${
                  selectedPlan === plan
                    ? "bg-white text-gray-900"
                    : "bg-gradient-to-r from-gray-700 to-gray-900 text-white"
                } mt-6 w-full py-2 font-medium rounded-lg`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
