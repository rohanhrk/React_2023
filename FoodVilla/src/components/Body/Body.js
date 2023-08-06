import Search from "./Search";
import RestaurantList from "./RestaurantList";
import ShimerUI from "../ShimmerUI/ShimmerUI";
import useRestaurant from "../../utils/customHooks/useRestaurant";

const Body = () => {
  const [allRestaurant, setAllRestaurant, filteredRestaurant, setFilteredRestaurant] = useRestaurant();  

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
