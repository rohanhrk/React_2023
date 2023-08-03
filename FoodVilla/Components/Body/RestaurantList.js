import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({
  filteredRestaurant,
}) => {
  
  return (
    <div className="restaurant-list">
      {filteredRestaurant?.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        );
      })}
    </div>
  );
};

export default RestaurantList;
