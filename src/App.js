import React from "react";
import ReactDOM from "react-dom/client";
import { Body, Header } from "./components";
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
