import { useState } from "react";
import { handleFilterData } from "../../utils/helper/helpers";

const Search = ({
  allRestaurant,
  setAllRestaurant,
  filteredRestaurant,
  setFilteredRestaurant,
}) => {
  const [searchTextInput, setsearchTextInput] = useState("");

  function handleSearchTextChange(text) {
    setsearchTextInput(text);
  }

  function handleSearchData(searchTextInput, allRestaurant) {
    const filteredRestautantData = handleFilterData(searchTextInput, allRestaurant);
    setFilteredRestaurant(filteredRestautantData);
  }
  
  return (
    <div className="search-container">
      <input
        placeholder="search for restaurants and food"
        value={searchTextInput}
        className="search-bar"
        onChange={(e) => {
          handleSearchTextChange(e.target.value);
        }}
      ></input>
      <button
        className="button-tab"
        onClick={() => {
          handleSearchData(searchTextInput, allRestaurant);
        }}
      >
        <span className="material-symbols-rounded">search</span>
      </button>
    </div>
  );
};

export default Search;
