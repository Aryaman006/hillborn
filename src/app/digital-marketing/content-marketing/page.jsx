import Header2 from "@/app/digitalSolutions/components/Header2";
import WhyChooseUs from "../components/hero3";
import Services3 from "../components/Services3";
import FeaturesSection from "../components/future-section";
import ProjectsCarousel from "@/components/carousel";
import Steps from "../components/working";
import ContactForm from "@/app/digitalSolutions/components/ContactForm";


const ContentMarketing = () => {
  const stepsData = [
    {
        heading: "Planning and Research",
      description: "Understand your audience, industry, and objectives to create a customized content strategy.",
    },
    {
        heading: "Creation &Distribution",
      description: "Develop engaging content and share it across the right platforms for maximum impact.",
    },
    {
        heading: "Optimization",
      description: "Monitor performance and refine strategies to consistently achieve better results.",
    },
  ];
  const featuresData = [
    {
      title: "Enhanced Brand ",
      description: "Position your business as an industry leader with high-value content.",
    },
    {
      title: "Increased Traffic",
      description: "Attract and retain more visitors through strategic, engaging content.",
    },
    {
      title: "Higher Conversions",
      description: "Convert leads into customers with content tailored to their journey. ",
    },
    {
      title: "Audience Engagement",
      description: "Foster meaningful interactions and build lasting relationships with your audience.",
    },
    {
      title: "Scalable Growth",
      description: "Achieve sustainable results that grow with your business.",
    },
  ];
    const services = [
        {
          id: 1,
          title: "Content Strategy",
          description: "Develop a focused roadmap that aligns content with your brand’s voice, target audience, and business goals for measurable success.",
          icon: "/images/i6.png",
          link: "/digital-marketing/seo-service",
        },
        {
          id: 2,
          title: "Blog and Article",
          description: "Design and implement ROI-driven paid advertising campaigns that reach precise audiences, increase visibility, and drive measurable business results effortlessly.",
          icon: "/images/i8.png",
          link: "/digital-marketing/social-media-marketing",
        },
        {
          id: 3,
          title: "Video Content",
          description: "Produce high-quality, visually compelling videos that effectively convey your brand’s story and captivate your audience’s attention.",
          icon: "/images/image5.png",
          link:"/digital-marketing/content-marketing",
        },
        {
          id: 4,
          title: "Social Media",
          description: "Design eye-catching, shareable social media content that drives engagement, grows your audience, and builds lasting brand connections.",
          icon: "/images/i7.png",
          link: "/digitalSolutions/data-licensing-service",
        },
        {
          id: 5,
          title: "Whitepapers & Ebooks",
          description: "Develop authoritative, in-depth content assets showcasing expertise, establishing trust, and positioning your brand as an industry leader.",
          icon: "/images/i5.png",
          link: "/digitalSolutions/phone-appending-service",
        },
      ];
      const whyChooseUsContent = {
        title: 'Why Choose Hillborn for Content Marketing?',
        listItems: [
          {
            heading: 'Strategic Approach:',
            description: ' We align content strategies with your business objectives to deliver impactful results.',
          },
          {
            heading: 'Expert Team:',
            description: ' Our skilled writers and content strategists craft engaging, high-quality content for diverse industries.',
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
    return(
        <div className="bg-gray-100">
          <Header2 heading={"Empower Your Brand with Hillborn Technology"} subheading={"Innovative strategies to amplify your online presence and drive measurable results."}/>
          <WhyChooseUs content={whyChooseUsContent}/>
          <Services3 services={services}/>
          <FeaturesSection features={featuresData}/>
          <ProjectsCarousel/>
          <Steps steps={stepsData}/>
          <ContactForm/>
        </div>
    )
};

export default ContentMarketing
