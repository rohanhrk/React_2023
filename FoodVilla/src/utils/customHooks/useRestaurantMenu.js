import { useEffect, useState } from "react";
import { restaurant_menu_url } from "../constant/Constant";

const useRestaurantMenu = (id) => {
  const [restaurantItems, setRestaurantItems] = useState([]);
  const [filteredRestaurantItems, setFilteredRestaurantItems] = useState([]);

  useEffect(() => {
    getResataurantMenu(id);
  }, []);

  async function getResataurantMenu() {
    const data = await fetch(
      restaurant_menu_url + id + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setRestaurantItems(json?.data?.cards);
    setFilteredRestaurantItems(json?.data?.cards);
  }

  return [restaurantItems, filteredRestaurantItems];
};

export default useRestaurantMenu;
