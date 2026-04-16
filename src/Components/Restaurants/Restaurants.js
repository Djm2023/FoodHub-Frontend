import React, { useState } from "react";
import useListOfRestaurants from "../../hooks/useListOfRestaurants";
import RestaurantCard from "./RestaurantCard";
import Banner from "./Banner";
import Categories from "./Categories";
import { filters } from "../../Utils/CategoryFilter";
import FilterBar from "../../UIComponents/Slider";

const Restaurants = () => {
  const [filteredItem, setFilteredItem] = useState([]);
  const { listOfRestaurants, banners, categories } = useListOfRestaurants();

  const handleFilter = (item) => {
    const filteredData =
      item === "4.5+ Rating"
        ? listOfRestaurants.filter((item) => item.rating > 4.5)
        : listOfRestaurants;

    setFilteredItem(filteredData);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
      {/* 🔍 SEARCH BAR */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-full shadow-sm max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search for restaurants, cuisines, or dishes..."
          className="flex-1 outline-none px-3 text-sm"
        />
        <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm">
          Search
        </button>
      </div>

      {/* FILTERS  */}

      <FilterBar CategoryFilters={filters} handleFilter={handleFilter} />

      {/* 🎯 BANNERS */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {banners?.map((banner) => (
          <Banner key={banner._id} bannerData={banner} />
        ))}
      </div>

      {/* 🍔 CATEGORY */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Food Category</h2>
          <span className="text-orange-500 text-sm cursor-pointer hover:underline">
            See All
          </span>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-2">
          {categories?.map((cat) => (
            <Categories key={cat?._id} categoryData={cat} />
          ))}
        </div>
      </div>

      {/* 🍕 RESTAURANTS */}
      <div className="mt-8">
        <h2 className="font-bold mb-4 text-xl">Featured Restaurants</h2>

        <div className="grid md:grid-cols-4 gap-6 cursor-pointer">
          {listOfRestaurants?.map((res) => (
            <RestaurantCard key={res._id} resInfo={res} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
