import React, { useEffect, useState } from "react";
import useListOfRestaurants from "../../hooks/useListOfRestaurants";
import RestaurantCard from "./RestaurantCard";
import Banner from "./Banner";
import Categories from "./Categories";
import { filters } from "../../Utils/CategoryFilter";
import FilterBar from "../../UIComponents/Slider";
import { Link } from "react-router";
import Shimmer from "../Shimmer";
import { useDebounce } from "../../hooks/useDebounce";
import { useRestaurantFilter } from "../../hooks/useRestaurantFilter";

const Restaurants = () => {
  const { listOfRestaurants, banners, categories } = useListOfRestaurants();
  // const [allRestaurantList, setAllRestaurantList] = useState([]);
  // const [filteredItem, setFilteredItem] = useState([]);

  // useEffect(() => {
  //   if (listOfRestaurants.length > 0) {
  //     setAllRestaurantList(listOfRestaurants);
  //     setFilteredItem(listOfRestaurants);
  //     console.log(listOfRestaurants, "listOfRestaurants");
  //   }
  // }, [listOfRestaurants]);

  // const handleFilter = (filterName) => {
  //   let filteredData = [...allRestaurantList];

  //   if (filterName === "4.5+ Rating") {
  //     filteredData = filteredData.filter((item) => item.rating >= 4.5);
  //   } else if (filterName === "Veg") {
  //     filteredData = filteredData.filter((item) => item.isVeg);
  //   } else if (filterName === "Non-Veg") {
  //     filteredData = filteredData.filter((item) => !item.isVeg);
  //   } else if (filterName === "Under 300") {
  //     filteredData = filteredData.filter((item) => {
  //       const price = Number(item.costForTwo.replace("₹", ""));
  //       return price <= 300;
  //     });
  //   } else if (filterName === "Under 30 min") {
  //     filteredData = filteredData.filter((item) => {
  //       const timeStr = item.deliveryTime;
  //       const minTime = Number(timeStr.match(/\d+/)[0]);
  //       return minTime <= 30;
  //     });
  //   } else {
  //     filteredData = allRestaurantList;
  //   }

  //   setFilteredItem(filteredData);
  // };

  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);

  const debouncedSearch = useDebounce(searchText, 500);

  const filteredRestaurants = useRestaurantFilter({
    data: listOfRestaurants,
    searchText: debouncedSearch,
    activeFilter,
  });

  const handleFilter = (filterName) => {
    setActiveFilter(filterName);
  };

  if (listOfRestaurants?.length === 0) return <Shimmer />;

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
      {/* 🔍 SEARCH BAR */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-full shadow-sm max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search for restaurants, cuisines, or dishes..."
          className="flex-1 outline-none px-3 text-sm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm">
          Search
        </button> */}
      </div>

      {/* FILTERS  */}

      <FilterBar CategoryFilters={filters} handleFilter={handleFilter} />

      {/*  BANNERS */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {banners?.map((banner) => (
          <Banner key={banner._id} bannerData={banner} />
        ))}
      </div>

      {/*  CATEGORY */}
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

      {/*  RESTAURANTS */}
      <div className="mt-8">
        <h2 className="font-bold mb-4 text-xl">Featured Restaurants</h2>

        <div className="grid md:grid-cols-4 gap-6 cursor-pointer">
          {filteredRestaurants?.map((res) => (
            <Link key={res._id} to={`/restaurant/${res._id}`}>
              <RestaurantCard key={res._id} resInfo={res} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
