import ContactForm from "../components/ContactForm";
import Header2 from "../components/Header2";
import InfoCard from "../components/InfoCards";

const DataCleaning = () => {
  return (
    <div className="bg-gray-100">
      <Header2 heading={"Data Cleansing Services"} subheading={"Having a list of accurate and clean data will streamline your multi-channel marketing campaigns, sales outreach, and newsletters. At Hillborn Solutions, we brought a whole new way of updating and cleansing your email addresses with our best-in-class data cleansing services. It provides you a competitive edge over your marketers with an updated, accurate, and validated marketing database. This service allows you to upload bulk lists of the email addresses to check for bounces, wrong addresses, and duplicates which results in a clean and up-to-date list that is ready for use."}/>
      <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Data Cleansing Services
        </h1>

        {/* Info Cards */}
        <InfoCard
          number="1"
          title="What is Data Cleansing?"
          content="Simply put, data cleansing is the process of eliminating, upgrading, and editing information within a database in order to maintain top-notch data quality. This data analysis processing gives access to segmented and accurate data, which helps organizations to streamline their CRM productivity while focusing on multi-channel marketing initiatives and business operations."
          gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        <InfoCard
          number="2"
          title="How Do We Do Data Cleansing ?"
          content="At Hillborn Solutions, our data cleaning experts deliver error-free customer lists to streamline business operations and ensure accurate contact information without compromising quality."
          list={[
            "Data Collection & Analysis: Identify inconsistencies and anomalies in client databases.",
  "Segment Data Fields: Separate inaccurate records, erase irrelevant fields, and fill gaps.",
  "Eliminate Duplicates: Remove duplicate and redundant entries for a clean database.",
  "Standardize Data: Format data for seamless CRM integration and marketing use.",
  "Integrity Checks: Perform audits and rigorous checks to ensure actionable, high-quality data.",
  "The cleansed database is then delivered in the client's preferred format."
          ]}
          gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        <InfoCard
          number="3"
          title="WHY CHOOSE Hillborn Solutions' DATA CLEANSING SERVICE? "
          content="As one of the leading data cleansing companies, we can efficiently handle all data clean up services and ensure that your data is up-to-date and error-free. With our data standardization and validation services, you can add considerable value to your data. At Hillborn Solutions, we understand and are capable of deducting, scrubbing, and cleaning data from any context and any source. Once the initial cleansing task has been accomplished, we then standardize your data to perform effectively with all of your data management systems and software. Furthermore, our data services can make your data actionable with completely accurate and fresh records."
          gradient="bg-gradient-to-r from-blue-300 via-green-300 to-pink-300"
        />
      </div>
    </div>
    <ContactForm/>
    </div>
  );
};

export default DataCleaning;
