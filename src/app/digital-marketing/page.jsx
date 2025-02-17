import ProjectsCarousel from "@/components/carousel";
import WhyChooseUs from "./components/hero3";
import Header2 from "../digitalSolutions/components/Header2";
import Services3 from "./components/Services3";
import FeaturesSection from "./components/future-section";
import Testimonials from "../digitalSolutions/components/Testimonials";
import Steps from "./components/working";
import ContactForm from "../digitalSolutions/components/ContactForm";

export default function DigitalSolutions () {
    const featuresData = [
        {
          title: "Data-Driven Strategies",
          description:
            "Our marketing campaigns are meticulously crafted using advanced analytics and insights.",
        },
        {
          title: "Expert Team",
          description:
            "Our team comprises seasoned industry professionals with years of experience in executing successful campaigns.",
        },
        {
          title: "Customized Solutions",
          description:
            "We understand that every business is unique. That’s why we create personalized strategies tailored to your needs.",
        },
        {
          title: "Full Transparency",
          description:
            "We believe in maintaining clear communication and providing detailed reporting at every stage.",
        },
        {
          title: "Scalable Results",
          description:
            "Whether you’re a small business or a growing enterprise, our strategies are designed to scale with your needs.",
        },
      ];

      const stepsData = [
        {
            heading: " Consultation",
          description: "Understand your business goals, challenges, target audience, and growth opportunities.",
        },
        {
            heading: " Strategy",
          description: "Develop a customized marketing plan tailored for measurable success and scalability.",
        },
        {
            heading: "Execution",
          description: " Implement and optimize campaigns using cutting-edge marketing tools and techniques.",
        },
      ];

      const services = [
        {
          id: 1,
          title: "SEO Service",
          description:
          "Optimize your website to rank higher in search engines and attract organic traffic.Services include keyword research, on-page optimization.",
          icon: "/images/i6.png",
          link: "/digital-marketing/seo-service",
        },
        {
          id: 2,
          title: "Social Media Marketing",
          description:
          "Build your brand and engage your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter.",
          icon: "/images/image5.png",
          link: "/digital-marketing/social-media-marketing",
        },
        {
          id: 3,
          title: "Content Marketing",
          description:
            "Remove duplicates, outdated entries, and incorrect information from your database to ensure data accuracy for better decision-making.",
          icon: "/images/i7.png",
          link:"/digital-marketing/content-marketing",
        },
      //   {
      //     id: 4,
      //     title: "Data Licensing",
      //     description:
      //       "Gain access to high-quality, pre-verified datasets under secure licensing agreements for targeted marketing and business.",
      //     icon: "/images/i4.png",
      //     link: "/digitalSolutions/data-licensing-service",
      //   },
      //   {
      //     id: 5,
      //     title: "Phone Appending",
      //     description:
      //       "Add or update phone numbers in your existing database to improve customer engagement and ensure effective communication.",
      //     icon: "/images/i5.png",
      //     link: "/digitalSolutions/phone-appending-service",
      //   },
      ];
      
    return(
        <div className="bg-gray-100">
            <Header2 heading={"Accelerate Your Growth with Digital Marketing Expertise"} subheading={"Innovative strategies to amplify your online presence and drive measurable results."}/>
            <Services3 services={services}/>
            <FeaturesSection features={featuresData}/>
            <Testimonials/>
            <Steps steps={stepsData}/>
            <ContactForm/>
        </div>
    )
}