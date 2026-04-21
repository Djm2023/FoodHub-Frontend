import React, { useState } from "react";
import { useNavigate } from "react-router";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const navigate = useNavigate();

  const cartItems = [
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

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = 3.35;
  const delivery = 2.99;
  const total = subtotal + tax + delivery;

  const handleOrderConfirmation = () => {
    navigate("/order/confirm");
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen px-4 md:px-8 py-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-xl font-semibold tracking-tight">CHECKOUT</h1>

          {/* DELIVERY DETAILS */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm animate-slideUp">
            <h2 className="text-sm font-semibold mb-6">DELIVERY DETAILS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="form-label">First name</label>
                <input className="form-input" placeholder="First Name" />
              </div>

              <div>
                <label className="form-label">Last name</label>
                <input className="form-input" placeholder="Last Name" />
              </div>

              <div className="md:col-span-2">
                <label className="form-label">Email address</label>
                <input className="form-input" placeholder="Email address" />
              </div>

              <div className="flex gap-3 md:col-span-2">
                <div className="w-24">
                  <label className="form-label">Code</label>
                  <input className="form-input" defaultValue="+91" />
                </div>

                <div className="flex-1">
                  <label className="form-label">Phone number</label>
                  <input className="form-input" placeholder="Phone Number" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="form-label">Address</label>
                <input className="form-input" placeholder="Address" />
              </div>

              <div>
                <label className="form-label">Pincode</label>
                <input className="form-input" placeholder="Pincode" />
              </div>

              <div>
                <label className="form-label">City</label>
                <input className="form-input" placeholder="City" />
              </div>

              <div className="md:col-span-2">
                <label className="form-label">Delivery instructions (optional)</label>
                <input
                  className="form-input"
                  placeholder="e.g. Leave at the front door, ring bell twice"
                />
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-6 rounded-2xl border shadow-sm animate-slideUp">
            <h2 className="text-sm font-semibold mb-4">PAYMENT METHOD</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {["card", "paypal", "apple", "cod"].map((method) => (
                <div
                  key={method}
                  onClick={() => setSelectedPayment(method)}
                  className={`cursor-pointer border rounded-xl p-4 flex items-center justify-between transition ${
                    selectedPayment === method
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium capitalize">
                    {method === "card" && "Credit / Debit Card"}
                    {method === "paypal" && "PayPal"}
                    {method === "apple" && "Apple Pay"}
                    {method === "cod" && "Cash on Delivery"}
                  </span>

                  <div
                    className={`w-4 h-4 rounded-full border ${
                      selectedPayment === method
                        ? "bg-orange-500 border-orange-500"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT (DESKTOP) */}
        <div className="hidden lg:block w-96 bg-white p-6 rounded-2xl border shadow-sm sticky top-6 h-fit animate-slideUp">
          <h2 className="text-sm font-semibold mb-4">ORDER SUMMARY</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex gap-3">
                  <img src={item.image} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-400">${item.price}</p>
                  </div>
                </div>

                <span className="text-sm font-medium">x{item.qty}</span>
              </div>
            ))}
          </div>

          <div className="flex mt-4 gap-2">
            <input className="form-input flex-1" defaultValue="CRAVE20" />
            <button className="bg-orange-100 text-orange-600 px-3 rounded-lg text-sm">
              Apply
            </button>
          </div>

          <div className="border-t mt-4 pt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${delivery}</span>
            </div>

            <div className="flex justify-between text-red-500">
              <span>Taxes & Fees</span>
              <span>${tax}</span>
            </div>

            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleOrderConfirmation}
            className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition"
          >
            Place Order →
          </button>
        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between z-50">
        <div>
          <p className="text-xs text-gray-500">Total</p>
          <p className="font-semibold">${total.toFixed(2)}</p>
        </div>

        <button
          onClick={handleOrderConfirmation}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
