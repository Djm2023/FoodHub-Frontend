import React, { useState } from "react";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import { useNavigate } from "react-router";
import { CloseIcon, StarIcon, PlusIcon, MinusIcon } from "../../Utils/Icons";

const RestaurantMenu = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { restaurantMenuData, loading, error } = useRestaurantMenu();

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!restaurantMenuData) return <p className="p-6">No data found</p>;

  const { name, image, cuisines, rating, deliveryTime, costForTwo, categories } =
    restaurantMenuData;

  const addToCart = (item) => {
    const existing = cart.find((c) => c._id === item._id);
    if (existing) {
      setCart(cart.map((c) => (c._id === item._id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id
            ? { ...item, qty: type === "inc" ? item.qty + 1 : item.qty - 1 }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCartView = () => {
    navigate("/cart");
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen px-3 md:px-8 py-4">
      <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <div className="h-44 md:h-60">
              <img src={image} className="w-full h-full object-cover" />
            </div>

            <div className="p-4 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
              <p className="text-gray-400 text-sm mt-1">{cuisines.join(" • ")}</p>

              <div className="flex gap-3 mt-3 text-xs text-gray-500 items-center">
                <span className="flex items-center gap-1">
                  <StarIcon /> {rating}
                </span>
                <span>{deliveryTime}</span>
                <span>{costForTwo}</span>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="space-y-6 mt-4">
            {categories.map((category) => (
              <div key={category._id}>
                <h2 className="text-lg font-semibold mb-3">{category.name}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item._id}
                      className="bg-white p-3 rounded-xl border flex gap-3"
                    >
                      <img
                        src={item.image}
                        className="w-20 h-20 rounded-md object-cover"
                      />

                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                          <span className="font-medium">₹{item.price}</span>

                          <button
                            onClick={() => addToCart(item)}
                            className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full"
                          >
                            <PlusIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP CART */}
        <div className="hidden lg:block w-80 bg-white p-5 rounded-2xl border shadow-sm sticky top-6 h-fit">
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-lg">Your Order</h2>
            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
              {cart.length} items
            </span>
          </div>

          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">₹{item.price}</p>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
                  <button
                    onClick={() => updateQty(item._id, "dec")}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <MinusIcon />
                  </button>

                  <span className="text-sm">{item.qty}</span>

                  <button
                    onClick={() => updateQty(item._id, "inc")}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCartView}
            className="w-full mt-4 bg-orange-500 text-white py-2 rounded-xl"
          >
            View Cart
          </button>
        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between z-50">
        <div>
          <p className="text-xs">{cart.length} items</p>
          <p className="font-semibold">₹{total.toFixed(2)}</p>
        </div>

        <button
          onClick={() => {
            setIsCartOpen(true);
            handleCartView();
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          View Cart
        </button>
      </div>

      {/* OVERLAY */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-50 max-h-[80vh] overflow-y-auto transition-transform duration-300 ${
          isCartOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-semibold">Your Order</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">₹{item.price}</p>
              </div>

              <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
                <button
                  onClick={() => updateQty(item._id, "dec")}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <MinusIcon />
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => updateQty(item._id, "inc")}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
