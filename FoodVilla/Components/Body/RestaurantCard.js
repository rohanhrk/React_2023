const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
  } = props.restaurant.info;
  return (
    <div className="card">
      <img
        className="food-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h2 className="name">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <div className="inline-div">
        <h4>{avgRating} star</h4>
        <h4>{sla.lastMileTravelString}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;