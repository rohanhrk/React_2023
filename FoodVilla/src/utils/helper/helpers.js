export function handleFilterData(searchTextInput, allRestaurant) {
  const data = allRestaurant.filter((restaurant) => {
    return restaurant?.info?.name
      .toLowerCase()
      .includes(searchTextInput.toLowerCase());
  });

  return data;
}
