import React from "react";
import logo from "../../Assets/logo.svg";
import "./success.css";

function Success() {
  return (
    <div className="success-container">
      <div>
        <img src={logo} />
      </div>
      <div id="alindi">
        <p>
          TEBRİKLER!
          <br />
          SİPARİŞİNİZ ALINDI!
        </p>
      </div>
    </div>
  );
}

export default Success;
