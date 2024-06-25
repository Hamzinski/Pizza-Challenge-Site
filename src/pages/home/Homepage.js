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
  { icon: int2, text: "teknoPizza" },
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
          <img className="teknolojikyemekler" src={images} alt="" />
          <h1 className="teknolojikyemekler">
            <span id="firsatikacirma">fırsatı kaçırma</span> <br />
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
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
      <div className="cardbody">
        <div className="secondcardbody">
          <div className="cart1">
            <div>
              <h1 className="teknolojikyemekler">Özel Lezzetus</h1>
              <p className="teknolojikyemekler">Position:Absolute Acı Burger</p>
              <Link id="siparis-ver-button" to="/pizza">
                <button id="siparis-ver-button">SİPARİŞ VER</button>
              </Link>
            </div>
          </div>
          <div className="thirdcardbody">
            <div className="cart2">
              {" "}
              <div>
                <p>Hackathlon Burger Menü</p>
                <Link id="siparis-ver-button" to="/pizza">
                  <button id="siparis-ver-button">SİPARİŞ VER</button>
                </Link>
              </div>
            </div>
            <div className="cart3">
              <div>
                <p>
                  <span>Çoooook</span> hızlı npm gibi kurye
                </p>{" "}
                <Link id="siparis-ver-button" to="/pizza">
                  <button id="siparis-ver-button">SİPARİŞ VER</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
