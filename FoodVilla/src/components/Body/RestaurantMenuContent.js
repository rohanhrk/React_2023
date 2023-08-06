import { FOOD_IMG_URL } from "../../utils/constant/Constant";

const RestaunrentMenuContent = ({ restaurant_menu_items }) => {
  return (
    <div className="restaurant-menu-content">
      <div className="menu-items-list">
        {restaurant_menu_items.map((item) => (
          <div className="menu-item" key={item["card"]?.info?.id}>
            <div className="menu-item-details">
              <h3 className="item-title">{item["card"]?.info?.name}</h3>
              <p className="item-cost">
                {item["card"]?.info?.price > 0
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(item["card"]?.info?.price / 100)
                  : " "}
              </p>
              <p className="item-desc">{item["card"]?.info?.description}</p>
            </div>
            <div className="menu-img-wrapper">
              {item["card"]?.info?.imageId && (
                <img
                  className="menu-item-img"
                  src={FOOD_IMG_URL + item["card"]?.info?.imageId}
                  alt={item["card"]?.info?.name}
                />
              )}
              <button className="add-btn"> ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaunrentMenuContent;
