import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import images from "../../Assets/logo.svg";
import int1 from "../../Assets/adv-aseets/icons/1.svg";
import int2 from "../../Assets/adv-aseets/icons/2.svg";
import int3 from "../../Assets/adv-aseets/icons/3.svg";
import int4 from "../../Assets/adv-aseets/icons/4.svg";
import int5 from "../../Assets/adv-aseets/icons/5.svg";
import int6 from "../../Assets/adv-aseets/icons/6.svg";
const categories = [
  { icon: int1, text: "YENİ! Kore" },
  { icon: int2, text: "Pizza" },
  { icon: int3, text: "Burger" },
  { icon: int4, text: "Kızartmalar" },
  { icon: int5, text: "Fast Food" },
  { icon: int6, text: "Gazlı İçecek" },
];
function Homepage() {
  return (
    <div className="home">
      <div className="headerbody">
        <div className="test">
          <img src={images} alt="" />
          <h1>
            <span id="firsatikacirma">fırsatı kaçırma</span> <br />
            KOD ACIKTIRIR
            <br />
            PIZZA, DOYURUR
          </h1>
          <Link id="order-pizza" to="/pizza">
            <button id="aciktim">ACIKTIM</button>
          </Link>
        </div>
      </div>
      <div className="homebody">
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="categories-options">
              <Link to="/pizza">
                <button>
                  <img src={category.icon} alt="" />
                </button>
              </Link>
              <p>{category.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
