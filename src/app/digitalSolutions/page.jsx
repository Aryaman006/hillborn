import Services2 from "./components/Cards";
import ContactForm from "./components/ContactForm";
import Header2 from "./components/Header2";
import MarketingSolutions from "./components/MarketingSolutions";
import ResultsInNumbers from "./components/Result";
import Testimonials from "./components/Testimonials";


export default function DigitalSolutions () {
    return(
        <div className="bg-gray-100">
            <Header2 heading={"Empower Your Business with Comprehensive Digital Solutions"} subheading={"Tailored strategies and tools to elevate your business in the digital landscape"}/>
            <Services2/>
            <MarketingSolutions/>
            <Testimonials/>
            <ResultsInNumbers/>
            <ContactForm/>
        </div>
    )
}