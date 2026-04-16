import { Link } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b pb-10">
        {/* Logo + Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* Logo */}
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-orange-500">FoodHub</h2>
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FoodHub Limited
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
            <li>FoodHub One</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h3 className="font-semibold mb-3">Available In</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Kolkata</li>
            <li>Durgapur</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Bangalore</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Social Links</h3>
          <div className="flex gap-5 text-gray-500">
            {/* Website / Link */}
            <a href="#">
              <svg
                className="w-5 h-5 hover:text-orange-500 hover:scale-150 transition cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
                <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#">
              <svg
                className="w-5 h-5 hover:text-orange-500 hover:scale-150 transition cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3v-3h2.3V9.4c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 3h-2v7A10 10 0 0 0 22 12" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#">
              <svg
                className="w-5 h-5 hover:text-orange-500 hover:scale-150 transition cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.9a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#">
              <svg
                className="w-5 h-5 hover:text-orange-500 hover:scale-150 transition cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.6 1A4 4 0 0 0 12 8.3c0 .3 0 .6.1.9A11.3 11.3 0 0 1 3 4.8a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.3.1-.7.2-1 .2-.2 0-.5 0-.7-.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 19.5a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.3-6 11.3-11.3v-.5A8 8 0 0 0 22 5.9z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#">
              <svg
                className="w-5 h-5 hover:text-orange-500 hover:scale-150 transition cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6">
        <p className="text-gray-600 text-sm text-center md:text-left">
          For better experience, download the FoodHub app now
        </p>

        <div className="flex gap-3">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-10 cursor-pointer"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
