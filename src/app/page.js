"use client"
import AboutUsSection from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/NewsLetter";
import FutureProducts from "@/components/Products";
import Services from "@/components/Services";
import TeamMembers from "@/components/Team";
import EndlessScrollDown from "@/components/test";
import EndlessScroll from "@/components/test";
import EndlessScrollUp from "@/components/test2";
import WebsiteTypeSelector from "@/components/website";
import Image from "next/image";
import ContactForm from "./digitaldataSolutions/components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "@/redux/action";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
  console.log("hello");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
   useEffect(() => {
      console.log("hello");
    
      const params = new URLSearchParams(window.location.search);
      const status = params.get("status");
    
      // If the status query param exists
      if (status) {
        // Immediately update the history to remove 'status' param
        // params.delete("status");
        // window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
    
        // Now handle the login status
        if (status === "success") {
          dispatch(setLoginStatus(true));
          toast.success("Login successful");
        } else {
          toast.error("Login failed");
        }
        params.delete("status");
        window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // window.location.reload();
      }
    }, [dispatch]);
  // const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
  // console.log("cookie",document.cookie)
  return (
    <div className="text-gray-800 bg-gray-100">
      <div id="hero">
  <Hero />
</div>
<div id="services">
  <Services />
</div>
<div id="about">
  <AboutUsSection />
</div>
<div id="contact">
  <ContactForm/>
  {/* Contact Us Section */}
</div>

<FutureProducts/>
      {/* <Hero/>
      <Services/>
      <AboutUsSection/> */}
      <TeamMembers/>
      {/* <Newsletter/> */}
      {/* <WebsiteTypeSelector/> */}
    </div>
  );
}
