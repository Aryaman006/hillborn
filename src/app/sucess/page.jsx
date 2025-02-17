"use client"
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

const PaymentSuccess = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const hasVerified = useRef(false); // Prevent multiple calls

  useEffect(() => {
    const verifyPayment = async () => {
      if (hasVerified.current) return; // Prevent second call
      hasVerified.current = true;

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/verify`,
          {},
          { withCredentials: true }
        );

        if (response.data.success) {
          console.log(response.data);
          setPaymentStatus("success");
          toast.success("Payment verified successfully 🎉");
          setTimeout(() => router.push("/"), 3000);
        } else {
          setPaymentStatus("failed");
          toast.error("Payment verification failed ❌");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        setPaymentStatus("failed");
        toast.error("Something went wrong during payment verification ❌");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, []); // ✅ Empty dependency array ensures it runs only once

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl text-center w-96">
        {loading ? (
          <>
            <Loader2 className="animate-spin h-10 w-10 mx-auto text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-700 mt-4">Verifying Your Payment...</h2>
            <p className="text-gray-500 mt-2">Please wait while we confirm your transaction.</p>
          </>
        ) : paymentStatus === "success" ? (
          <>
            <CheckCircle className="h-14 w-14 mx-auto text-green-500" />
            <h2 className="text-2xl font-bold text-green-600 mt-4">Payment Successful! ✅</h2>
            <p className="text-gray-500 mt-2">Redirecting to the home page...</p>
          </>
        ) : (
          <>
            <XCircle className="h-14 w-14 mx-auto text-red-500" />
            <h2 className="text-2xl font-bold text-red-600 mt-4">Payment Failed ❌</h2>
            <p className="text-gray-500 mt-2">Please try again or contact support.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
