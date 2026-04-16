import React from "react";

const Categories = ({ categoryData }) => {
  const { name, image, _id } = categoryData;
  return (
    <div
      key={_id}
      className="bg-white rounded-xl px-5 py-4 text-center shadow-sm min-w-[100px]
                   hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
    >
      <img src={image} alt={name} className="w-10 h-10 mx-auto mb-2" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
};

export default Categories;
