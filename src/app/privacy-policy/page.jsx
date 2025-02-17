import Header5 from '@/components/Header5';
import React from 'react';
const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container bg-gray-100 min-h-screen ">
      <Header5
        heading="Privacy Policy"
        subheading="Your privacy is important to us. Please read this policy to understand how we handle your data."
      />

      <div className="privacy-policy-content max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Data Aggregation</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Collabline Solutions collects information with elements for business and consumers alike. All information is acquired from reliable sources and quality control measures are taken to ensure the accuracy of the database.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Where Do We Collect Prospect Data?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
            {[
              "Web-based Registrations and offers",
              "Government records",
              "Transactional data",
              "Newsletter Subscription Offers",
              "Business tradeshow attendee lists",
              "Public Record Information",
              "Business trade magazine subscription offers",
              "Sign-up data from email Campaigns",
              "B2B Directories",
              "Annual Reports, SEC Filings",
              "Phone surveys with every business",
              "Registration process for subscription sites",
              "Community postings",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Community postings</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Collabline Solutions gathers information by prioritizing its quality. We do not collect or engage genetic email address entered by individuals. Collabline Solutions collects Personal Information (name and email address) through contact forms on our site because it helps us contact individuals likely to become our paying customer. We may also acquire information from our affiliates and co-branded sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Sharing Of Information And Disclosure</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Collabline Solutions does not share any collected Personal Information with third party affiliates or its partners.We value the privacy of information filled by users, and no information shall be used in any manner than disclosed in this Privacy Policy.Collabline Solutions may roll out promotional offers to help its clients discover value.Hence, any Personal Information of the subscriber shall only be disclosed to the third party where: (i) Collabline Solutions is confident about the benefits that favor its customers. (ii) The recipients acknowledge receiving communications. (iii) Law enforcers and judicial authority urge to furnish information.Should you wish to stop receiving any marketing communications from Collabline Solutions, unsubscribe by following the link provided at the footer of our promotional emails.We shall remove unsubscribed users from the mailing database to cease future marketing communications from reaching their mailbox.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Privacy And Security</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Collabline Solutions carries its positive reputation for taking utmost care in managing Personal Information collected from the site visitors and customers.We may share your contact information with our affiliates if only some offerings are relevant to your interest.Your Personal Information helps us serve better and improve the user experience on our site.We also use the information to identify legitimate users.It is part of our efforts to ensure safe utilization of our resources.We identify the site visitors by tracking information such as domain name, IP address, and other information that distinctively identifies one user from another.We also collect the information obtained through surveys, fill outs, and tracking pages visited by users.The purpose of tapping such information is to provide seamless delivery of customized promotions such as email alerts, e - newsletters, promotional emails, and product information.Collabline Data Solutions may also use the information to build our internal database of interest - based users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">The Policy Of Data Usage</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The Personal Information that we collect is primarily used for our B2B transactions.However, we may also use the same for notifying updates and validating sales transactions We do not share your information with third party marketers who may have an interest in communicating with you.If you no longer wish to receive marketing communication from Collabline Solutions, follow the link to unsubscribe provided at the footer of every email.Collabline Solutions will remove your information from our mailing database preventing any future communications from reaching your mailbox.When you access an external link from our site, your information may be collected by third party sites to identify you personally.Collabline Data Solutions is not liable to mediate any disputes or cover for damages that users endure by visiting an external site.Collabline Solutions requests its users to refrain from divulging any personal information on our site.Information such as account details and passwords are sensitive data that are vulnerable to misuse and loss.Despite the exhaustive measures taken by our security experts to safeguard your data, you will be solely held responsible for any data acquired from us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">How Collabline Solutions Protects User Information ?</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our in-house Security experts deploy advanced digital tactics to secure every database.Some of the latest strategies are used to prevent mismanagement and unauthorized access to sensitive data.Collabline Solutions does not furnish Personal Information to its affiliates and partners without prior consent from individuals.Since Collabline Solutions is a technologically driven brand, we take stringent measures to protect the data integrity.Our updated data security mechanism checks the pulse of every database and Personal Information to prevent unauthorized access and misuse.Collabline Data Solutions is readily compliant to policies that dictate the ethical use of Personal Data.However, in the wake of technological evolution, it is impossible to assure a 100 % safety of any digital data.Hence, Collabline Solutions does not guarantee a 100 % safety of any client information.By using our services, you acknowledge the passive risks of sharing digital data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">What Information Do We Collect ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Personal Information
          </p>
          <p className='text-gray-700 leading-relaxed text-justify'>
            Personal Information such as email, name, and address offered to us through fill outs and forms by users interested in our services.Should you choose not to submit a complete information, you may not enjoy full benefits offered by us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Tracking Information</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Collabline Solutions may collect your IP address to identify the users personally.It is part of our effort to encourage effective interaction with legitimate users alone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Collabline Solutions uses cookies to track the fundamental interactions made by users on our site.It helps us to improve the user experience.You reserve the right to accept or decline our cookies.Note: Any third party links leading away from our website may use cookies to collect track the visitors, and the use of such is not covered under this Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Protection Of Information</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The user behavior information such as cookies, click through, opened acknowledgments, and email conversations collected from users will not be shared with any third party in any manner than otherwise indicated in this Privacy Policy. Collabline Data Solutions collaborates with the third-party source for closure of the sales transaction. We take extraordinary measures to prevent retaining or storing the transaction details and are a subject matter of solicitation.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Marketing Emails</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            It is felonious to use Collabline Solutions resources for illicit reasons, and we advise users to remain compliant with respective laws (state, federal, or international) while using our service features. Collabline Data Solutions presents this Privacy Policy to promulgate the ethical use of digital data and to brief users how we handle the information submitted to us. Your information and feedback help us enhance the quality of service and the security of digital data. When you are using the features of our services, you are agreeing to the terms of this Policy and acknowledge the data handling ethics.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Marketing Content</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            At Collabline Solutions, we take particular care to ensure that subscribers receive relevant content fully compliant with the laws.Our content algorithm is capable of service the right content based on the Personal Information submitted by individuals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Unsubscribe</h2>
          <p className="text-gray-700 leading-relaxed">
            Every email that we send has a unsubscribe link prominently displayed in the footer of emails.If you choose not be contacted, click the link and you will be automatically removed from all our future email campaigns, newsletters, and promotions.We are bound to respect the interest of our valuable clients and will commit to abide by rules of the industry.Note: When recipients unsubscribe from our marketing campaigns he or she may stop receiving any future communications.However, some residual information may remain in our database, which could be due to data being deleted multiple times.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Modification Of Personal Information</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            If you wish to update the Personal Information submitted to us, reach us at sales @collablinesolutions.com or call +91 9353690229. We shall get back to you in 24 hours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Emendation Of Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Collabline Solutions may modify this Privacy Policy without pre - intimation.To stay updated on recent revisions on data usage, please refer this Policy periodically.Alternatively, you may receive email communication from us when changes are amended to this policy.Nevertheless, by using our site or services you acknowledge to the terms of this Privacy Policy unconditionally.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Users may visit any external links within our website at their own risk.Collabline Solutions is not liable for any information submitted by visitors on third party links.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Queries And Concerns</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            If you have doubts regarding the use of our services, reach us now!</p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">Reach Us Now!!!</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have doubts regarding the use of our services, reach us now!
            <br />
            <strong>Email:</strong> info@hillbornsolutions.com
            <br />
            <strong>Phone:</strong> +91 9353690229
            <br />
            <strong>Address:</strong> 1955, H V HALL RR NAGARA , BENGALURU, Karnataka, India - 560098.

          </p>
        </section>
      </div>
    </div>

  );
};

export default PrivacyPolicy;





