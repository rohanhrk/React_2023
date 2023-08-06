import { swiggy_api_url } from "../constant/Constant";
import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(swiggy_api_url);
    const jsonData = await data.json();

    setAllRestaurant(
      jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return [
    allRestaurant,
    setAllRestaurant,
    filteredRestaurant,
    setFilteredRestaurant,
  ];
};

export default useRestaurant;
