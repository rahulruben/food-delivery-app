import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Logo Component
 * Displays the logo image for the app.
 * 
 * @returns {JSX.Element} A logo element wrapped in a div.
 */
const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqFrCVksYvoEmXEuleFofdLdIYias2JsSETf5bafjd0WRUZ34MsmqUxPsNNtzGIKwLmA&usqp=CAU"
        alt="Food delivery App"
      />
    </div>
  );
};

/**
 * NavContainer Component
 * Renders the navigation items such as Home, About Us, Contact Us, and Cart.
 * 
 * @returns {JSX.Element} A div containing an unordered list of navigation items.
 */
const NavContainer = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

/**
 * RestaurantCard Component
 * Displays a card with restaurant details, including an image and description.
 * 
 * @returns {JSX.Element} A div representing a restaurant card.
 */
const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-image"
        src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50"
        alt="Restaurant"
      />
      <h3>Kimchy</h3>
      <h5>Chinese, Asian</h5>
    </div>
  );
};

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
        <RestaurantCard />
      </div>
    </div>
  );
};

/**
 * Header Component
 * Displays the logo and navigation items at the top of the app.
 * 
 * @returns {JSX.Element} A div that contains both the Logo and NavContainer components.
 */
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavContainer />
    </div>
  );
};

/**
 * AppContainer Component
 * The main app container that holds the Header and Body components.
 * 
 * @returns {JSX.Element} The root component containing Header and Body.
 */
const AppContainer = () => (
  <div id="app">
    <Header />
    <Body />
  </div>
);

/**
 * Root Rendering
 * Renders the AppContainer component into the DOM element with the ID of "root".
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
