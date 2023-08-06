import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantList = ({ filteredRestaurant }) => {
  return (
    <div className="restaurant-list">
      {filteredRestaurant?.map((restaurant) => {
        return (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="linkText"
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantList;
