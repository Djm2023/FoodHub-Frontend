import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex flex-col items-center justify-center px-4">
      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-gray-100">
        {/* Icon */}
        <div className="w-12 h-12 mx-auto mb-4 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>

        {/* Subtitle */}
        <p className="text-gray-500 mb-6">
          Looks like this page went out for delivery and never came back 🚚
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-medium transition shadow-sm hover:shadow-md"
          >
            Go to Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium transition"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-400 text-sm mt-6">Error Code: 404</p>
    </div>
  );
};

export default ErrorPage;
