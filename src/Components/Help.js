import React, { useState } from "react";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Where is my order?",
      a: "You can track your order in real-time from the Order Tracking page.",
    },
    {
      q: "Can I cancel my order?",
      a: "Yes, you can cancel before the restaurant starts preparing your order.",
    },
    {
      q: "How do I get a refund?",
      a: "Refunds are processed within 3-5 business days after approval.",
    },
    {
      q: "Payment failed but money deducted?",
      a: "The amount will be automatically refunded within 5-7 working days.",
    },
  ];

  return (
    <div className="bg-[#f6f6f6] min-h-screen px-4 md:px-8 py-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm animate-slideUp">
          <h1 className="text-xl font-semibold">Help & Support</h1>
          <p className="text-sm text-gray-500 mt-1">How can we help you today?</p>
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Track Order",
              desc: "Check your live order status",
            },
            {
              title: "Report an Issue",
              desc: "Problem with your order",
            },
            {
              title: "Payment Help",
              desc: "Issues with payments/refunds",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border shadow-sm cursor-pointer hover:shadow-md transition animate-slideUp"
            >
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white p-5 rounded-2xl border shadow-sm animate-slideUp">
          <h2 className="text-sm font-semibold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium"
                >
                  {faq.q}

                  <svg
                    className={`w-4 h-4 transition ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {activeIndex === index && (
                  <div className="px-4 pb-3 text-xs text-gray-500 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT SUPPORT */}
        <div className="bg-white p-5 rounded-2xl border shadow-sm animate-slideUp">
          <h2 className="text-sm font-semibold mb-3">Still need help?</h2>

          <div className="flex flex-col md:flex-row gap-3">
            <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition">
              Chat with Support
            </button>

            <button className="flex-1 border border-gray-200 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              Call Support
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY ACTION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex gap-3 z-50">
        <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium">
          Chat Support
        </button>

        <button className="flex-1 border border-gray-200 py-2 rounded-lg text-sm font-medium">
          Call
        </button>
      </div>
    </div>
  );
};

export default Help;
