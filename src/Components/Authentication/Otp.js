import React, { useState } from "react";
import { useNavigate } from "react-router";

const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    // verify OTP API
    navigate("/restaurants");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-orange-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-2">Verify OTP 📩</h2>
        <p className="text-gray-500 text-sm mb-6">Enter the OTP sent to your email</p>

        <input
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 text-center text-lg tracking-widest outline-none"
        />

        <button
          onClick={handleVerify}
          className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OTPPage;
