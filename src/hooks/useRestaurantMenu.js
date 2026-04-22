import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useRestaurantMenu = () => {
  const [restaurantMenuData, setRestaurantMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  console.log(id, "SSSSSSSSSSSSS");

  const fetchRestaurantMenu = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/restaurants/${id}`);
      // const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch restaurant menu");
      }

      const json = await res.json();

      // ✅ SAFE ACCESS
      const restaurant = json?.data?.[0];

      if (!restaurant) {
        throw new Error("Invalid API response");
      }

      setRestaurantMenuData(restaurant);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  return { restaurantMenuData, loading, error };
};

export default useRestaurantMenu;
