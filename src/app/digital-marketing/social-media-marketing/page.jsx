import Header2 from "@/app/digitaldataSolutions/components/Header2";
import WhyChooseUs from "../components/hero3";
import Services3 from "../components/Services3";
import FeaturesSection from "../components/future-section";
import ProjectsCarousel from "@/components/carousel";
import Steps from "../components/working";
import ContactForm from "@/app/digitaldataSolutions/components/ContactForm";


const SocialMedia = () => {
  const whyChooseUsContent = {
    title: 'Why Choose Hillborn for Social Media Marketing?',
    listItems: [
      {
        heading: 'Customized Strategies:',
        description: ' Every business is unique, and so are our marketing plans. We tailor solutions to your specific goals and industry needs.',
      },
      {
        heading: 'Experienced Professionals:',
        description: ' Our team of digital marketing experts brings a wealth of knowledge and proven results across various industries.',
      },
      {
        heading: 'Transparent Reporting:',
        description: ' Stay informed with regular updates and in-depth performance reports',
      },
      {
        heading: 'Local Expertise:',
        description: " We understand Bengaluru's market dynamics, ensuring your campaigns resonate with the local audience.",
      },
    ],
  };
  const stepsData = [
    {
        heading: "Discovery and Planning",
      description: "Understand your business, audience, and goals to create a tailored strategy.",
    },
    {
        heading: "Campaign Design:",
      description: "Develop and launch impactful content and advertising campaigns.",
    },
    {
        heading: "Monitoring",
      description: " Actively engage with your audience and monitor campaign performance for ongoing optimization.",
    },
  ];
  const featuresData = [
    {
      title: "Increased Awarness",
      description: "Reach a broader audience and create a memorable online presence.",
    },
    {
      title: "Customer Engagement:",
      description: "Build meaningful relationships with your audience.",
    },
    {
      title: "Higher Conversions",
      description: "Turn followers into loyal customers through strategic campaigns.",
    },
    {
      title: "Improved ROI",
      description: "Maximize returns on your marketing budget with targeted efforts.",
    },
    {
      title: "Scalable Growth",
      description: "Achieve sustainable results that grow with your business. ",
    },
  ];
    const services = [
        {
          id: 1,
          title: "Campaigns",
          description: "Launch platform-specific campaigns on Facebook, Instagram, LinkedIn, and Twitter to effectively target and engage your ideal audience demographics.",
          icon: "/images/i6.png",
          link: "/digital-marketing/seo-service",
        },
        {
          id: 2,
          title: "Advertising",
          description: "Design and implement ROI-driven paid advertising campaigns that reach precise audiences, increase visibility, and drive measurable business results effortlessly.",
          icon: "/images/i8.png",
          link: "/digital-marketing/social-media-marketing",
        },
        {
          id: 3,
          title: "Engagement",
          description: "Foster community connections by actively responding to comments, managing interactions, and building strong relationships with your online audience.",
          icon: "/images/image5.png",
          link:"/digital-marketing/content-marketing",
        },
        {
          id: 4,
          title: "Analytics",
          description: "Analyze performance data with actionable insights to refine strategies, ensuring consistent optimization and continuous campaign success over time.",
          icon: "/images/i7.png",
          link: "/digitalSolutions/data-licensing-service",
        },
        {
          id: 5,
          title: "Content",
          description: "Create and manage engaging visuals, videos, and posts that captivate audiences, enhance your brand's voice, and foster meaningful connections.     ",
          icon: "/images/i5.png",
          link: "/digitalSolutions/phone-appending-service",
        },
      ];
    return(
        <div className="bg-gray-100">
          <Header2 heading={"Elevate Your Business with Hillborn Technology’s Digital Marketing Expertise"} subheading={"Elevate Your Business with Hillborn Technology’s Digital Marketing Expertise"}/>
          <WhyChooseUs content={whyChooseUsContent}/>
          <Services3 services={services}/>
          <FeaturesSection features={featuresData}/>
          <ProjectsCarousel/>
          <Steps steps={stepsData}/>
          <ContactForm/>
        </div>
    )
};

export default SocialMedia
