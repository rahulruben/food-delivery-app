import React from "react";
import ReactDOM from "react-dom/client";

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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-card-image"
        src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50"
      />
      <h3>Kimchy</h3>
      <h5>Chinese, Asian</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">

      </div>
      


      <div className="restaurant-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <NavContainer />
    </div>
  );
};

const AppContainer = () => (
  <div id="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
