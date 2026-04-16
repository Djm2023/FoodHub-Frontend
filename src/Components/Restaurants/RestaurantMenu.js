import React, { useState } from "react";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const [cart, setCart] = useState([]);
  const { restaurantMenuData, loading, error } = useRestaurantMenu();

  // ✅ Proper state handling
  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!restaurantMenuData) return <p className="p-6">No data found</p>;

  const { name, image, cuisines, rating, deliveryTime, costForTwo, categories } =
    restaurantMenuData;

  // ✅ SVG Icon
  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-4 h-4 text-orange-500"
    >
      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.416 8.264L12 19.771l-7.416 4.089L6 15.596 0 9.748l8.332-1.73z" />
    </svg>
  );

  // ✅ Cart Logic
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
            ? {
                ...item,
                qty: type === "inc" ? item.qty + 1 : item.qty - 1,
              }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT SECTION */}
        <div className="flex-1">
          {/* HERO HEADER */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="h-40 md:h-56 w-full">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>

            <div className="p-4 md:p-6">
              <h1 className="text-xl md:text-2xl font-bold">{name}</h1>

              <p className="text-gray-500 text-sm mt-1">{cuisines.join(" • ")}</p>

              <div className="flex items-center gap-4 mt-3 text-xs md:text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <StarIcon />
                  {rating}
                </span>

                <span>{deliveryTime}</span>
                <span>{costForTwo}</span>
              </div>
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="flex gap-3 mt-4 md:mt-6 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat._id}
                className="px-4 py-1 whitespace-nowrap rounded-full bg-white shadow text-sm hover:bg-orange-500 hover:text-white"
              >
                {cat.name}
              </button>
            ))}
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
                      className="bg-white p-4 rounded-xl shadow flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />

                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <h3 className="font-semibold text-sm md:text-base">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>

                        <div className="flex justify-between items-center mt-2">
                          <span className="font-semibold">₹{item.price}</span>

                          <button
                            onClick={() => addToCart(item)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full"
                          >
                            +
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

        {/* RIGHT CART */}
        <div className="w-full lg:w-80 bg-white p-5 rounded-2xl shadow sticky top-6 h-fit">
          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Your Order</h2>
            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
              {cart.length} items
            </span>
          </div>

          {/* ITEMS */}
          <div className="space-y-4">
            {cart.length === 0 && <p className="text-gray-400 text-sm">Cart is empty</p>}

            {cart.map((item) => (
              <div key={item._id} className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">₹{item.price}</p>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded">
                  <button onClick={() => updateQty(item._id, "dec")}>-</button>
                  <span className="text-sm">{item.qty}</span>
                  <button onClick={() => updateQty(item._id, "inc")}>+</button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="border-t mt-4 pt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* BUTTON */}
          <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl">
            View Cart →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
