import React, { useState, useEffect } from "react";

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchRestaurantList = async () => {
    const data = await fetch("/api/restaurants");
    // const data = await fetch("http://localhost:5000/api/restaurants");
    const resData = await data?.json();

    setListOfRestaurants(resData?.data);
    setBanners(resData?.banners);
    setCategories(resData?.categories);
  };
  useEffect(() => {
    fetchRestaurantList();
  }, []);
  return { listOfRestaurants, banners, categories };
};

export default useListOfRestaurants;
