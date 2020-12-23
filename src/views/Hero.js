import React from "react";
import hero2 from "./image/hero-2.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingTop: "80px" }}></div>
          <div className="col-2"></div>

          <div className="col-8 text-center">
            <div className="row">
              <div className="col-12">
                <h1>Your Own Streaming Platform. Exclusively For Your Fans.</h1>
              </div>

              <div className="col-12">
                <br />
                <br />
                <br />
                <br />
              </div>

              <div className="col-12">
                <img src={hero2} alt="" srcset="" height="350px" />
              </div>
            </div>
          </div>

          <div className="col-2"></div>

          <div className="col-12" style={{ paddingTop: "150px" }}></div>
        </div>
      </div>
    </div>
  );
}
