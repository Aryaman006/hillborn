import Header5 from '@/components/Header5';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="">
        <Header5
        heading="Terms and Conditions"
        subheading='Welcome to Hillborn Technologies Private Limited. By using our services and making payments through our payment gateway, you agree to abide by the terms and conditions outlined below. Please read these carefully before proceeding..'
      />
      <div className="privacy-policy-content max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-md">
      <div className="container mx-auto py-12 px-6">

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">1. General</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            1.1 These Terms and Conditions govern your use of the payment gateway services provided by Hillborn Technologies Private Limited.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            1.2 By accessing or using the payment gateway, you acknowledge and agree to these Terms and Conditions. If you do not agree, please refrain from using our payment services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">2. Payment Processing</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            2.1 We use secure third-party payment processors to handle transactions. By making a payment, you consent to the processing of your payment information by our payment partners.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            2.2 All payments must be made in the currency and method specified at the time of checkout.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            2.3 Any additional fees, such as taxes, currency conversion charges, or processing fees, will be displayed before confirming the payment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            3.1 You are responsible for ensuring that the payment details you provide are accurate and complete.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            3.2 It is your responsibility to ensure sufficient funds or credit availability for the transaction.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            3.3 Any fraudulent use of the payment gateway will result in immediate termination of services and may involve legal action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">4. Data Privacy</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            4.1 We adhere to strict data privacy guidelines to protect your payment and personal information.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            4.2 Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">5. Transaction Confirmation</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            5.1 Upon successful payment, you will receive a confirmation receipt via email.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            5.2 If you do not receive a confirmation email, please contact our support team immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">6. Refunds and Cancellations</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            6.1 Our Refund Policy outlines the conditions under which refunds are processed. Please refer to the Refund Policy section below.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            6.2 Cancellations and refunds may be subject to additional fees as applicable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">7. Liability</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            7.1 Hillborn Technologies Private Limited is not responsible for any delays, errors, or failures in payment processing due to technical issues or third-party service interruptions.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            7.2 In case of payment disputes, please reach out to our support team at <a href="mailto:info@hillbornsolutions.com" className="text-blue-500">info@hillbornsolutions.com</a> or +91 9353690229.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">8. Modifications</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            8.1 Hillborn Technologies Private Limited reserves the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-black font-bold mb-4">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            9.1 These Terms and Conditions are governed by the laws of India. Any disputes will be resolved under the jurisdiction of the courts in Bengaluru, Karnataka.
          </p>
        </section>
      </div>
    </div>
      {/* <Footer /> */}
    </div>
  );
};

export default TermsAndConditions;