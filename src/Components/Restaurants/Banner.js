import React from "react";

const Banner = ({ bannerData }) => {
  const { _id, image, title, subtitle, tag } = bannerData;
  return (
    <div key={_id} className="relative h-40 rounded-xl overflow-hidden cursor-pointer">
      {/* IMAGE */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-0 p-5 text-white">
        <span className="text-xs bg-orange-500 px-2 py-1 rounded">{tag}</span>

        <h2 className="text-xl font-bold mt-2">{title}</h2>

        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
