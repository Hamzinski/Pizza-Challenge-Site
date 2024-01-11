import React from "react";
import logo from "../../Assets/logo.svg";
import "./success.css";

function Success({ order }) {
  return (
    <div className="success-container">
      <div>
        <img src={logo} />
      </div>
      <div  className="dividiv">
        <p>
          <span id="yolda">lezzetin yolda</span> <br />
          <span id="alindi">SİPARİŞ ALINDI</span>
          <hr />
          <br /> <span id="paap">Position Absolute Acı Pizza</span>{" "}
        </p>
      </div>
      <div className="infos">
        <p>Boyut:{order.size}</p>
        <p>Hamur:{order.hamur}</p>
        <p>Ek Malzemeler:{order.malzeme}</p>
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
  );
}

export default Success;
