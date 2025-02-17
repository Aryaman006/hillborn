import ContactForm from "../components/ContactForm"
import Header2 from "../components/Header2"
import InfoCard from "../components/InfoCards"


const DataLisensing = () =>{
    return(
        <div className="bg-gray-100">
            <Header2 heading={"Data Licensing Services"} subheading={"Data Licensing Services have become a crucial element for companies and businesses of all sizes. We recognise that, data is the way forward in today’s marketing industry. With the tremendous rise in technology leading to increased competition, marketers are embracing the need for true data that is not only clean, accurate, and verified, but secure and authorised as well. As a trusted data partner, Collabline Solutions ensures data of the highest quality to aid your brand building process. "}/>
            <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Data Licensing Services
        </h1>
        <InfoCard
        number={"1"}
        title={"Give Practical Insights to Your Data with Our Data Licensing."}
        content={"The premium B2B Data Licensing service from Collabline Solutions provides safe access to the most accurate data. Our Data Licensing opens the possibilities of reselling, adds verification processes while reducing data acquisition and retention expenses. As a data licensor, we address issues related to data maintenance, control, security policy, protocols and practices, especially where data is confidential, personal, financial, technical, or other information."}
        gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        <InfoCard
        number={"2"}
        title={"Benefits of Our Data Licensing Service"}
        content={"Check out how our data licensing service benefits b2b marketers in different possible ways:"}
        list={[
            "Maximize the value of your B2B databases.",
  "Navigate and identify target markets through secure access.",
  "Flexibility in database management.",
  "Customizable data sets that suit your unique requirements.",
  "Renew or upgrade your license easily with a few steps.",
  "Frequent quality checks provided by our team of data experts.",
  "Reach out to your customers on a large scale through data purchase option."
]}
        gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        </div>
        </div>
        <ContactForm/>
        </div>
    )
}

export default DataLisensing;
