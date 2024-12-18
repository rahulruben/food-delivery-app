import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../../mocks/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

/**
 * Body Component
 * Contains the main content of the page, including the search bar and the restaurant cards.
 *
 * @returns {JSX.Element} A div that represents the main body content of the app.
 */
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const filterHighRatedRestuarant = () => setHighRatedRestaurants();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "";
    if (url) {
      const data = await fetch();

      const json = await data.json();
      if (json) {
        setListOfRestaurants(json);
      }
    } else {
      setTimeout(() => {
        // Mocking a delay to render
        setListOfRestaurants(Restaurants);
      }, 1000);
    }
  };

  const setHighRatedRestaurants = () => {
    setListOfRestaurants({
      data: listOfRestaurants.data?.filter(
        (rest) => rest.name > "Pasta Paradise"
      ),
    });
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search"></div>
      <button className="filter-btn" onClick={filterHighRatedRestuarant}>
        Top Rated Restaurant
      </button>
      <div className="restaurant-container">
        {listOfRestaurants.data?.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
