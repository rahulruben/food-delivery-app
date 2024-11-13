import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../../mocks/data";
import { useState } from "react";

/**
 * Body Component
 * Contains the main content of the page, including the search bar and the restaurant cards.
 *
 * @returns {JSX.Element} A div that represents the main body content of the app.
 */
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(Restaurants);

  const filterHighRatedRestuarant = () => {
    setListOfRestaurants({
      data: listOfRestaurants.data?.filter((rest) => rest.name > "Pasta Paradise"),
    });
  };
  return (
    <div className="body">
      <div className="search"></div>
      <button className="filter-btn" onClick={filterHighRatedRestuarant}>
        Top Rated Restaurant
      </button>
      <div className="restaurant-container">
        {listOfRestaurants.data.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
