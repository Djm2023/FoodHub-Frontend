// hooks/useRestaurantFilter.js

import { useMemo } from "react";

export const useRestaurantFilter = ({ data, searchText, activeFilter }) => {
  const filteredData = useMemo(() => {
    let result = [...data];

    // 🔍 Search
    if (searchText) {
      const text = searchText.toLowerCase();
      result = result.filter(
        (item) =>
          item.name?.toLowerCase().includes(text) ||
          item.cuisine?.toLowerCase().includes(text),
      );
    }

    // 🎯 Filters
    if (activeFilter === "4.5+ Rating") {
      result = result.filter((item) => item.rating >= 4.5);
    } else if (activeFilter === "Veg") {
      result = result.filter((item) => item.isVeg);
    } else if (activeFilter === "Non-Veg") {
      result = result.filter((item) => !item.isVeg);
    } else if (activeFilter === "Under 300") {
      result = result.filter((item) => {
        const price = Number(item.costForTwo.replace("₹", ""));
        return price <= 300;
      });
    } else if (activeFilter === "Under 30 min") {
      result = result.filter((item) => {
        const minTime = Number(item.deliveryTime.match(/\d+/)[0]);
        return minTime <= 30;
      });
    }

    return result;
  }, [data, searchText, activeFilter]);

  return filteredData;
};
