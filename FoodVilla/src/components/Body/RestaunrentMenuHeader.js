import { FOOD_IMG_URL } from "../../utils/constant/Constant";

const RestaurantMenuHeader = ({ restaurant_name_details }) => {
  return (
    <div className="restaurant-summary">
      <img
        className="restaurant-img"
        src={FOOD_IMG_URL + restaurant_name_details?.cloudinaryImageId}
        alt={restaurant_name_details?.name}
      />

      <div className="rest-details">
        <p className="rest-name">{restaurant_name_details.name}</p>
        <p className="rest-address">
          {restaurant_name_details.locality +
            ", " +
            restaurant_name_details.city}
        </p>
        <p className="rest-rating">
          {restaurant_name_details.avgRating +
            ", " +
            restaurant_name_details.totalRatingsString}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenuHeader;
