import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import images from "../../Assets/logo.svg";

function Homepage() {
  return (
    <div class="home">
      <div class="test">
        <div>
          <img src={images} alt=""></img>
          <h1>
            KOD ACIKTIRIR
            <br />
            PIZZA, DOYURUR
          </h1>
          <Link id="order-pizza" to="/pizza">
            <button id="aciktim">ACIKTIM</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
