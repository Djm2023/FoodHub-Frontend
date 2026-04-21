import React from "react";
import { useNavigate } from "react-router";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      name: "Classic Double Smash",
      price: 14.99,
      image: "https://source.unsplash.com/100x100/?burger",
      qty: 1,
    },
    {
      id: 2,
      name: "Loaded Bacon Fries",
      price: 8.5,
      image: "https://source.unsplash.com/100x100/?fries",
      qty: 1,
    },
  ];

  const handleViewRestaurants = () => {
    navigate("/restaurants");
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen px-4 md:px-8 py-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* TOP SUCCESS CARD */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm border animate-slideUp">
          {/* ICON */}
          <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full border border-orange-500">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-xl font-semibold">Order Confirmed!</h1>
          <p className="text-sm text-gray-500 mt-1">
            Thank you, John. Your order <span className="font-medium">#CRV-9284</span> is
            being processed.
          </p>

          <div className="flex justify-center gap-3 mt-5 flex-wrap">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition">
              Track Order →
            </button>

            <button
              onClick={handleViewRestaurants}
              className="border border-gray-200 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Browse More Restaurants
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* ORDER ITEMS */}
            <div className="bg-white rounded-2xl p-5 border shadow-sm animate-slideUp">
              <h2 className="text-sm font-semibold mb-4">Order Items</h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <img
                        src={item.image}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500">
                      Qty: {item.qty}{" "}
                      <span className="ml-3 font-medium text-black">${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PAYMENT SUMMARY */}
            <div className="bg-white rounded-2xl p-5 border shadow-sm animate-slideUp">
              <h2 className="text-sm font-semibold mb-4">Payment Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$23.49</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>$2.99</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>$3.15</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* DELIVERY CARD */}
            <div className="rounded-2xl p-5 text-white bg-gradient-to-r from-[#1f1f1f] to-[#3a2a24] shadow-sm animate-slideUp">
              <p className="text-xs text-gray-300">ESTIMATED DELIVERY</p>
              <h2 className="text-xl font-semibold mt-1">45 - 55 min</h2>

              {/* PROGRESS */}
              <div className="mt-4">
                <div className="h-1 bg-gray-600 rounded-full relative">
                  <div className="absolute left-0 top-0 h-1 w-1/2 bg-orange-500 rounded-full"></div>
                </div>

                <div className="flex justify-between text-[10px] text-gray-300 mt-2">
                  <span>PREPARING</span>
                  <span>ON THE WAY</span>
                  <span>DELIVERED</span>
                </div>
              </div>

              <p className="text-xs text-gray-300 mt-4">
                The restaurant is preparing your order. We'll notify you when it's on the
                way.
              </p>
            </div>

            {/* DELIVERY INFO */}
            <div className="bg-white rounded-2xl p-5 border shadow-sm animate-slideUp">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-semibold">Delivery Info</h2>
                <button className="text-xs text-orange-500 font-medium">Edit</button>
              </div>

              <div className="w-full h-32 rounded-xl overflow-hidden mb-3">
                <img
                  src="https://source.unsplash.com/600x300/?map"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-medium">John Hammond</p>
              <p className="text-xs text-gray-500">123 Broadway St, Apt 4B, New York</p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE FIXED ACTION */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex gap-3 z-50">
        <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium">
          Track Order
        </button>

        <button className="flex-1 border border-gray-200 py-2 rounded-lg text-sm font-medium">
          Browse
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
