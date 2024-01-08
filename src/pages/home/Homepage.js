import React from 'react'
import {Link} from 'react-router-dom';
import "./home.css"
import images from "../../Assets/logo.svg";

function Homepage() {
  return (
    <div class="home">
      <div class="test">
      <img src={images}></img>
      <h1>KOD ACIKTIRIR<br/>PIZZA, DOYURUR</h1>
      <Link id="order-pizza" to="/order">
      <button id="aciktim">ACIKTIM</button>
      </Link>
      </div>
      
    </div>

  )
}

export default Homepage 