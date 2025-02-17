import Header5 from '@/components/Header5';
import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="">
      <Header5
        heading="Refund Policy"
        subheading="At Hillborn Technologies Private Limited, we strive to ensure customer satisfaction. Please review our Refund Policy below:"
      />
      <div className="privacy-policy-content max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-md">
        <div className="container mx-auto py-12 px-6">
          <section className="mb-8">
            <h2 className="text-black font-bold mb-4">1. Eligibility for Refunds</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              1.1 Refunds are applicable only under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>The payment was made in error (e.g., duplicate transactions).</li>
              <li>The service/product was not delivered as promised.</li>
              <li>Cancellation of services within the specified time frame (if applicable).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-justify">
              1.2 Refund requests must be submitted within 7 days of the transaction date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-black font-bold mb-4">2. Non-Refundable Transactions</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              2.1 Certain services/products are non-refundable. These include:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom software development projects after the commencement of work.</li>
              <li>Subscription-based services after the service period has started.</li>
              <li>Services explicitly marked as non-refundable.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-black font-bold mb-4">3. Refund Process</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              3.1 To initiate a refund, please contact our support team at{' '}
              <a href="mailto:info@hillbornsolutions.com" className="text-blue-500">
                info@hillbornsolutions.com
              </a>{' '}
              or +91 9353690229.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              3.2 Provide the following details:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Transaction ID or receipt</li>
              <li>Reason for the refund request</li>
              <li>Any supporting documents (if applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-justify">
              3.3 Once your request is reviewed and approved, the refund will be processed within 7-10 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-black font-bold mb-4">4. Mode of Refund</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              4.1 Refunds will be issued to the original payment method used during the transaction.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              4.2 Hillborn Technologies Private Limited is not responsible for delays caused by your financial institution or third-party payment processors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-black font-bold mb-4">5. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              5.1 If you are not satisfied with the refund outcome, you may escalate the issue to{' '}
              <a href="mailto:info@hillbornsolutions.com" className="text-blue-500">
                info@hillbornsolutions.com
              </a>{' '}
              or +91 9353690229.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              5.2 Disputes will be resolved in accordance with applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-black font-bold mb-4">6. Changes to Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              6.1 Hillborn Technologies Private Limited reserves the right to modify this Refund Policy at any time. Updated policies will be posted on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-black font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              For any inquiries or support, please contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Email:{' '}
                <a href="mailto:info@hillbornsolutions.com" className="text-blue-500">
                  info@hillbornsolutions.com
                </a>
              </li>
              <li>Phone: +91 9353690229</li>
              <li>1955, H V HALL RR NAGARA , BENGALURU, Karnataka, India - 560098.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;