import React from "react";
import ReactDOM from "react-dom/client";

const Container = () => <div id="container">This is a container</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
