import RestaurantCard from "./RestaurantCard";
import { Restaurants } from "../../mocks/data";

/**
 * Body Component
 * Contains the main content of the page, including the search bar and the restaurant cards.
 *
 * @returns {JSX.Element} A div that represents the main body content of the app.
 */
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <label>
          <input type="text" placeholder="Type to search..." />
        </label>
      </div>
      <div className="restaurant-container">
        {Restaurants.data.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
