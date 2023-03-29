import React from "react";
import Joel from "./JoelHilton.jpg";
import "../App.css";
function Home() {
  return (
    <div className="App">
      <h1>Joel Hiltons Movie List</h1>
      <p>This is a website dedicated to Joel Hiltons Movies</p>
      <img src={Joel} alt="Joel Hilton" />
    </div>
  );
}

export default Home;
