import React, { useState } from "react";
import { useNavigate } from "react-router";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Classic Double Smash",
      price: 14.99,
      image: "https://i.pravatar.cc/100?img=12",
      qty: 1,
    },
    {
      id: 2,
      name: "Loaded Bacon Fries",
      price: 8.5,
      image: "https://i.pravatar.cc/100?img=22",
      qty: 2,
    },
  ]);

  const navigate = useNavigate();

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: type === "inc" ? item.qty + 1 : item.qty - 1,
              }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = 2.99;
  const tax = 3.2;
  const total = subtotal + delivery + tax;

  const handleProceedCheckout = () => {
    navigate("/restaurant/checkout");
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen px-4 md:px-8 py-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl text-center border shadow-sm">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT - ITEMS */}
            <div className="flex-1 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-2xl border shadow-sm flex gap-4 items-center animate-slideUp"
                >
                  <img src={item.image} className="w-20 h-20 rounded-lg object-cover" />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">₹{item.price}</p>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-2 mt-3 bg-gray-100 w-fit px-2 py-1 rounded-full">
                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="w-6 h-6 flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14" />
                        </svg>
                      </button>

                      <span className="text-sm">{item.qty}</span>

                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="w-6 h-6 flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4"
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <p className="font-medium text-sm">
                    ₹{(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT - SUMMARY (DESKTOP) */}
            <div className="hidden lg:block w-96 bg-white p-6 rounded-2xl border shadow-sm sticky top-6 h-fit animate-slideUp">
              <h2 className="text-sm font-semibold mb-4">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>₹{delivery}</span>
                </div>

                <div className="flex justify-between text-red-500">
                  <span>Taxes</span>
                  <span>₹{tax}</span>
                </div>

                <div className="flex justify-between font-semibold text-base border-t pt-3 mt-3">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleProceedCheckout}
                className="w-full mt-5 bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition"
              >
                Proceed to Checkout →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE STICKY BAR */}
      {cart.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center z-50">
          <div>
            <p className="text-xs text-gray-500">Total</p>
            <p className="font-semibold">₹{total.toFixed(2)}</p>
          </div>

          <button
            onClick={handleProceedCheckout}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
