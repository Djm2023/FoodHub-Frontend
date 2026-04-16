import React, { useState, useEffect } from "react";

const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchRestaurantList = async () => {
    const data = await fetch(process.env.BACKEND_URL + "/restaurants");
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
