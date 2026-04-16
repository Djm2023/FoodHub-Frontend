import React, { useState } from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = () => {
    // call API here
    navigate("/auth/verify-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-orange-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-xl font-bold text-center mb-2">Forgot Password 🔐</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to receive OTP
        </p>

        <div className="flex items-center border rounded-lg px-3 py-2">
          <Mail size={16} className="text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="ml-2 w-full outline-none text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          onClick={handleSendOTP}
          type="button"
          className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
