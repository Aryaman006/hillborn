import Header2 from "@/app/digitaldataSolutions/components/Header2";
import WhyChooseUs from "../components/hero3";
import Services3 from "../components/Services3";
import FeaturesSection from "../components/future-section";
import ProjectsCarousel from "@/components/carousel";
import Steps from "../components/working";
import ContactForm from "@/app/digitaldataSolutions/components/ContactForm";


const Seo = () => {
    const whyChooseUsContent = {
        title: 'Why Choose Hillborn for SEO?',
        listItems: [
          {
            heading: 'Tailored SEO Strategies:',
            description:
              'Every business is unique, and so is our approach. We craft customized SEO plans to meet your specific goals.',
          },
          {
            heading: 'Proven Expertise:',
            description:
              'Our team of experienced SEO specialists has a track record of driving measurable results across industries.',
          },
          {
            heading: 'Comprehensive Services:',
            description:
              'From keyword research to content optimization, we provide end-to-end SEO solutions.',
          },
          {
            heading: 'Bengaluru-Centric Solutions:',
            description:
              'We understand the local market and target audience, helping your business thrive in the city.',
          },
        ],
      };
      const stepsData = [
        {
            heading: "Analyze & Strategize",
          description: "Understand your business goals and conduct a comprehensive website audit to identify the oppurtinity.",
        },
        {
            heading: "Implement & Optimize",
          description: "Execute targeted on-page, off-page, and technical SEO strategies to boost visibility and performance.",
        },
        {
            heading: "Monitor & Grow",
          description: "Track key metrics, analyze performance, and refine strategies.",
        },
      ];
      const services = [
        {
          id: 1,
          title: " On-Page SEO",
          description: "Optimize every element of your website, from meta tags and headings to internal linking and image alt texts, ensuring it aligns with search engine algorithms.",
          icon: "/images/i6.png",
          link: "/digital-marketing/seo-service",
        },
        {
          id: 2,
          title: "Off-Page SEO",
          description: "Build authority for your website through quality backlinks, guest blogging, and effective link-building strategies.",
          icon: "/images/i8.png",
          link: "/digital-marketing/social-media-marketing",
        },
        {
          id: 3,
          title: "Local SEO",
          description: "Enhance your visibility in Bengaluru by optimizing for location-based searches and managing Google My Business profiles.",
          icon: "/images/image5.png",
          link:"/digital-marketing/content-marketing",
        },
        {
          id: 4,
          title: "Technical SEO",
          description: "Improve site speed, mobile responsiveness, crawlability, and indexability to ensure seamless user experiences and better rankings.",
          icon: "/images/i7.png",
          link: "/digitalSolutions/data-licensing-service",
        },
        {
          id: 5,
          title: "Keyword Research",
          description: "Identify high-performing keywords and optimize your content to attract and retain the right audience.Track your website’s performance with detailed reports, insights",
          icon: "/images/i5.png",
          link: "/digitalSolutions/phone-appending-service",
        },
      ];
      const featuresData = [
        {
          title: "Increased Traffic",
          description: "Drive more organic visitors to your website",
        },
        {
          title: "Higher ROI",
          description: "Get better returns on your investment with targeted SEO strategies.",
        },
        {
          title: "Brand Authority",
          description: "Build a credible online presence that establishes trust with your audience.",
        },
        {
          title: "Sustained Growth",
          description: "Enjoy long-term benefits through consistent and ethical SEO practices.                  ",
        },
        {
          title: "Scalable Results",
          description: "Whether you’re a small business or a growing enterprise, our strategies are designed to scale with your needs.",
        },
      ];
    return(
        <div className="bg-gray-100">
            <Header2 heading={"Maximize Your Online Visibility with Hillborn Technology"} subheading={"Innovative strategies to amplify your online presence and drive measurable results."}/>
            <WhyChooseUs content={whyChooseUsContent}/>
            <Services3 services={services}/>
            <FeaturesSection features={featuresData}/>
            <ProjectsCarousel/>
            <Steps steps={stepsData}/>
            <ContactForm/>
            </div>
    )
};

export default Seo
