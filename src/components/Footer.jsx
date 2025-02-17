import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  console.log(process.env.MONGODB_URI);
  
  return (
    <footer className="bg-white border-t border-gray-200 p-6 md:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Copyright Section */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">
              Copyright © 2024 All Rights Reserved
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full md:w-auto">
            {/* Product */}
            {/* <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
                Product
              </h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Case studies', 'Reviews', 'Updates'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {['About', 'Contact us', 'Careers', 'Culture', 'Blog'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
                Support
              </h4>
              <ul className="space-y-2">
                {[
                  'Getting started',
                  'Help center',
                  'Server status',
                  'Report a bug',
                  'Chat support',
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
                Follow Us
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Facebook', icon: FaFacebookF, color: 'text-blue-600', link: 'https://www.facebook.com/profile.php?id=61556896286817&mibextid=ZbWKwL' },
                  { name: 'Twitter', icon: FaTwitter, color: 'text-blue-400', link: 'https://x.com/Hillborntech' },
                  { name: 'Instagram', icon: FaInstagram, color: 'text-pink-500', link: 'https://www.instagram.com/hillborn_technologies?igsh=MWxnY3MyMjU1aHV0OA==' },
                  // { name: 'LinkedIn', icon: FaLinkedinIn, color: 'text-blue-700' },
                  // { name: 'YouTube', icon: FaYoutube, color: 'text-red-600' },
                ].map(({ name, icon: Icon, color, link }) => (
                  <li key={name}>
                    <a
                      href={link}
                      className="text-gray-500 hover:text-gray-700 text-sm flex items-center space-x-2 transition-colors duration-200"
                    >
                      <Icon className={color} />
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
                Policies
              </h4>
              <ul className="space-y-2">
                {[
                  { name: 'Privacy Policy', link: '/privacy-policy' },
                  { name: 'Refund Policy', link: '/refund-policy' },
                  { name: 'Terms and Conditions', link: '/tandc' },
                ].map(({ name, link }) => (
                  <li key={name}>
                    <a
                      href={link}
                      className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
