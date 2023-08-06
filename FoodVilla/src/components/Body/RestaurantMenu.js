import { useParams } from "react-router-dom";
import ShimerUI from "../ShimmerUI/ShimmerUI";
import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";
import RestaurantMenuHeader from "./RestaunrentMenuHeader";
import RestaunrentMenuContent from "./RestaurantMenuContent";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantItems, filteredRestaurantItems] = useRestaurantMenu(id);

  if (filteredRestaurantItems.length == 0) return;

  const restaurant_name_details = filteredRestaurantItems[0]?.card?.card?.info;
  const restaurant_menu_items =
    filteredRestaurantItems[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      ?.card.card.itemCards;

  return restaurantItems.length === 0 ? (
    <ShimerUI />
  ) : (
    <div className="restaurant-menu">
      <RestaurantMenuHeader restaurant_name_details={restaurant_name_details} />
      <RestaunrentMenuContent restaurant_menu_items={restaurant_menu_items} />
    </div>
  );
};

export default RestaurantMenu;
