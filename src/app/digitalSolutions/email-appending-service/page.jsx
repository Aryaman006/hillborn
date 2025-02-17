import ContactForm from "../components/ContactForm";
import Header2 from "../components/Header2";
import InfoCard from "../components/InfoCards";

const EmailAppending = () => {
  return (
    <div className="bg-gray-100">
      <Header2 heading={"B2B Email Appending Services"} subheading={"Enhance your email marketing reach by up to 95% and engage with your targeted customers with our best-in-class B2B Email Appending services. We at Hillborn Solutions, can help you fill the missing gaps in your database with our email address appending services. With massive in-house data records of millions of executives all over the globe, our email appending services offer high match rates and provides email information of multiple titles from SMBs to leading companies. So, if you are still using an outdated mailing list of customers, we are here to help you with our B2B Email Appending Services."}/>
      <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-12">
          B2B Email Appending
        </h1>

        {/* Info Cards */}
        <InfoCard
          number="1"
          title="What is Email Appending?"
          content="Email Appending is one of the on-demand marketing practices which involves taking prospects’ data such as name, postal address, phone number, or other social media information and matching it against our repository to obtain the right deliverable email addresses. To keep it simple, it is the process of appending the email addresses of the existing customers which have been missing from your current prospect list. This email list appending helps B2B organizations in revamping their marketing efforts by providing the most actionable data and qualified leads. This, in turn, helps you in acquiring quality email lists as well as higher ROI."
          gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        <InfoCard
          number="2"
          title="How Do We Do Email Appending?"
          content="In order to have a successful email marketing campaign, you need an accurate email database. At Hillborn Solutions, we turn your existing marketing database into a powerful marketing tool by adding updated & verified business and consumer email addresses. Here’s how we do:"
          list={[
            "Submit your existing customers’ list to us which you want to append email addresses to.",
            "Later, our team of data experts matches your entire customer list against our global pool of data.",
            "Then we identify and remove the incorrect and invalid email addresses which are not in use.",
            "After that, we add up-to-date, opt-in, correct email addresses of clients to your existing customer list.",
            "To ensure you receive accurate information, we use only trusted sources and software.",
            "Eventually, your data is reviewed, verified, and delivered. You only pay for validated records.",
          ]}
          gradient="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        />
        <InfoCard
          number="3"
          title="Benefits of Email Appending"
          content="At Hillborn Solutions, we understand the importance of a deliverable and responsive email data. Thus, we strive hard to provide the best email appending services and thereby ensure that your datasets are appended with the most accurate data. To ensure high deliverability and minimal bounce rates for your emails, we verify each and every append email addresses twice before sending. With our data append services, we help get your email marketing messages delivered to the right audience. By scrubbing all appended emails through the multi-step verification process, we will remove all the invalid email addresses from your prospect lists. Hence, you can ensure the highest deliverability rate for your marketing campaigns with our data append services.
You can choose our email append service for the following reasons"
          list={[
            "Our B2B email appending offers over a 65% match rate.",
            "The industry-leading database comprises more than 75 million records.",
            "Our email appended database is updated every 90 days to ensure valid data.",
            "With our email appends, you can generate quality leads with a higher return on investment.",
            "Our email append services are highly specific to the priority of timeliness.",
            "With our email append services, businesses can network efficiently with sellers, dealers, and mutual"
          ]}
          gradient="bg-gradient-to-r from-blue-300 via-green-300 to-pink-300"
        />
      </div>
    </div>
    <ContactForm/>
    </div>
  );
};

export default EmailAppending;
