import React from "react";
import { Heart } from "lucide-react";

const RestaurantCard = ({ resInfo }) => {
  const { _id, name, image, rating, deliveryTime, cuisines, costForTwo, isOpen } =
    resInfo;

  return (
    <div
      className={`bg-white rounded-xl shadow-sm overflow-hidden transition ${
        isOpen ? "hover:shadow-lg cursor-pointer" : "opacity-70 cursor-not-allowed"
      }`}
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className={`w-full h-44 object-cover ${!isOpen ? "blur-[1px] grayscale" : ""}`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* CLOSED OVERLAY */}
        {!isOpen && (
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded-md font-semibold">
              CLOSED
            </span>
          </div>
        )}

        {/* OPEN BADGE */}
        {isOpen && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Open
          </span>
        )}

        {/* HEART */}
        <div className="absolute top-3 right-3 bg-white p-1 rounded-full shadow">
          <Heart size={16} className="text-gray-500" />
        </div>

        {/* DELIVERY TIME (ONLY IF OPEN) */}
        {isOpen && (
          <span className="absolute bottom-3 right-3 bg-white text-xs px-2 py-1 rounded-md shadow flex items-center gap-1">
            {/* Clock SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {deliveryTime}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* NAME + RATING */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">{name}</h3>

          <span
            className={`flex items-center gap-1 text-sm font-medium ${
              rating >= 4.5 ? "text-green-600" : "text-orange-500"
            }`}
          >
            {/* Star SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.897l-7.336 3.869 1.402-8.168L.132 9.211l8.2-1.193z" />
            </svg>
            {rating}
          </span>
        </div>

        {/* CUISINES */}
        <p className="text-gray-500 text-xs mt-1 truncate">{cuisines?.join(" • ")}</p>

        {/* BOTTOM */}
        <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            {/* Truck SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="1" y="3" width="15" height="13" />
              <path d="M16 8h4l3 3v5h-7z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            Free
          </span>

          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
