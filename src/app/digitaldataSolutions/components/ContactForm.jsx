import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-center p-6 md:p-10 min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-start px-4 sm:px-8">
        <h2 className="text-sm md:text-base font-bold leading-5 mb-4 text-gray-800">CONTACT US</h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Get in touch today
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
        </p>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center">
            <FaEnvelope className="mr-2 text-gray-800" />
            <span className="font-bold text-gray-800">Email:</span>  info@hillbornsolutions.com
          </li>
          <li className="flex items-center">
            <FaPhoneAlt className="mr-2 text-gray-800" />
            <span className="font-bold text-gray-800">Phone:</span> +91 9353690229
          </li>
          <li className="flex items-center">
            <FaLocationArrow className="mr-2 text-gray-800" />
            <span className="font-bold text-gray-800">Address: </span> 1955, H V HALL RR NAGARA , BENGALURU, Karnataka, India - 560098.

          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-gray-950 to-gray-600 text-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col">
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="p-3 rounded-full bg-white text-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="p-3 rounded-full bg-white text-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm mb-2">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Your Phone Number"
                className="p-3 rounded-full bg-white text-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm mb-2">Company</label>
              <input
                type="text"
                id="company"
                placeholder="Your Company"
                className="p-3 rounded-full bg-white text-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Please type your message here..."
              rows="4"
              className="w-full p-3 rounded-md bg-white text-gray-800 border border-gray-600 focus:outline-none focus:border-gray-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-3 bg-black text-white rounded hover:bg-gray-900 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
