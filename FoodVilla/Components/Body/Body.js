import Search from "./Search";
import RestaurantList from "./RestaurantList";
import ShimerUI from "../ShimmerUI/ShimmerUI";
import { swiggy_api_url } from "../../Constant/Constant";
import { useState, useEffect } from "react";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(swiggy_api_url);
    const jsonData = await data.json();
    console.log(jsonData);

    setAllRestaurant(
      jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

//   if()
  return (
    <div className="body-container">
      <Search
        allRestaurant={allRestaurant}
        setAllRestaurant={setAllRestaurant}
        filteredRestaurant={filteredRestaurant}
        setFilteredRestaurant={setFilteredRestaurant}
      />

      {allRestaurant?.length === 0 ? (
        <ShimerUI />
      ) : (
        <RestaurantList
          filteredRestaurant={filteredRestaurant}
        />
      )}
    </div>
  );
};

export default Body;
