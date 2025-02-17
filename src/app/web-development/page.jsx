import Hero2 from "@/components/Hero2";
import PricingPlans from "@/components/PricingPlans";
import HowItWorks from "@/components/Steps";
import WebsiteSelector from "@/components/website";


export default function WebDevelopmentPage () {
    return(
        <div className="bg-gray-100">
            <Hero2/>
            <WebsiteSelector/>
            <HowItWorks/>
            <PricingPlans/>
        </div>
    )
}