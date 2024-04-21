import React from "react";
import logo from "../../Assets/logo.svg";
import "./success.css";

function Success({ order }) {
  return (
    <div className="mainss">
      <div className="headerss"></div>
      <div className="success-container">
        <img className="teknolojikyemekler" src={logo} alt="" />
        <div className="dividiv">
          <p>
            <span id="yolda">lezzetin yolda</span> <br />
            <span id="alindi">SİPARİŞ ALINDI</span>
          </p>
          <hr />
          <span id="paap">Position Absolute Acı Pizza</span>{" "}
        </div>
        <div className="main-info">
          <div className="infos">
            <p>Boyut:{order.size}</p>
            <p>Hamur:{order.hamur}</p>
            <p>
              Ek Malzemeler:{" "}
              {Array.isArray(order.malzeme) ? order.malzeme.join(", ") : "N/A"}
            </p>
          </div>
        </div>

        <div className="price-card">
          <p>Sipariş Toplamı</p>
          <div id="secim">
            <p>Seçimler</p>
            <p>{order.toplamTutar - order.adet * 85.5} TL</p>
          </div>

          <div id="tutar">
            <p>Seçimler</p>
            <p>{order.toplamTutar} TL</p>
          </div>
        </div>
      </div>
      <div className="footerss"></div>
    </div>
  );
}

export default Success;
