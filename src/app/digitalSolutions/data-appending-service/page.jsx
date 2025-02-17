import ContactForm from "../components/ContactForm";
import Header2 from "../components/Header2";
import InfoCard from "../components/InfoCards";

const DataAppending = () => {
  return (
    <div className="bg-gray-100">
      <Header2 heading={"Data Appending Services"} subheading={"Ensure you’re reaching the right customers on every channel with our best data appending services. Being the most effective data append company, we provide industry-leading B2B services that can fill the gaps in your existing prospect lists. In general, an appended database enables you to reach your potential as well as target customers at the right time. Suppose, you’ve got a name and a mailing address, but you may need business phone numbers and email addresses, then you can add those details with our data service."}/>
      <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Data Appending Services
        </h1>

        {/* Info Cards */}
        <InfoCard
          number="1"
          title="What is Data Appending?"
          content="Data appending is the process of adding missing or rectifying incorrect information such as e-mail IDs, phone numbers, addresses, job titles, home value, lifestyle information, and demographic data of your target audience. These services can enhance the scope of your current customer database and thereby help your business grow exponentially as well as your revenue.Data append processes can help you hold control over your business prospects, customer acquisition, product marketing, conversion rates, lead generation, and more. Simply put, data appending is all about turning your business into a wholesome data-driven experience."
          gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        <InfoCard
          number="2"
          title="How Do We Do Data Appending?"
          content="As one of the leading data append companies, we at Collabline Solutions append your database with relevant contact information as per your business requirements."
          list={[
            "Send the database you want to be appended to.",
            "Then our data experts will match them against our highly robust and reliable internal databases.",
            " From there, we will add specific contact details to your current database(s) based on your request.",
            "You will receive a database that is ready to use after the data append is rich with accurate information and actionable data of your targeted customers."
          ]}
          gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        <InfoCard
          number="3"
          title="Benefits of Data Appending"
          content="
At Hillborn Solutions, we deliver the best database appending services to help businesses acquire, manage, and retain their clients with accurate customer records.
Make the most out of this opportunity and enhance your brand’s market presence and grow your business to its full potential. With our data enrichment, you can:"
const list = {[
    "Reach the right leads at the right time",
    "Level up your engagement with leads",
    "Increase the value of your data quality",
    "Get accurate and updated data for better responses",
    "Achieve greater customer insights for targeted campaigning",
    "Find more potential customers with similar profiles",
    "Gain more transparency in your marketing efforts"
  ]}
  
          gradient="bg-gradient-to-r from-blue-300 via-green-300 to-pink-300"
        />
      </div>
    </div>
    <ContactForm/>
    </div>
  );
};

export default DataAppending;
