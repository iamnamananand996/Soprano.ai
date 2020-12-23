import React from "react";
import "./SectionTwo.css";
import tablechair from "./image/tablechair.svg";
import wifi from "./image/wifi.svg";
import user from "./image/user.svg";
import box from "./image/box.svg";

export default function SectionTwo() {
  return (
    <div className="sectiontwo">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingTop: "100px" }}></div>
          <div className="col-1"></div>
          <div className="col-6 pr-0">
            <div className="row">
              <div className="col-12">
                <h3>
                  Some good place to where can build your startup business
                </h3>
                <br />
                <p style={{ fontSize: "15px" }}>
                  Coworking offers beautifully crafted workspaces where people
                  can create, connect, and grow their businesses at prime
                  locations in multiple cities.
                </p>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <img src={box} alt="" srcSet="" />
                    <br />
                    <br />
                    <h6>1000 ft2</h6>
                    <p style={{ fontSize: "12px" }}>
                      you will get 1000ft square space facility here.
                    </p>
                  </div>
                  <div className="col-4">
                    <img src={user} alt="" srcSet="" />
                    <br />
                    <br />
                    <h6>80 Members</h6>
                    <p style={{ fontSize: "12px" }}>
                      you will get advantage to live 80+ member here.
                    </p>
                  </div>
                  <div className="col-4">
                    <img src={wifi} alt="" srcSet="" />
                    <br />
                    <br />
                    <h6>100 mbps</h6>
                    <p style={{ fontSize: "12px" }}>
                      Internet speed is much better thjan others.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <br />
                <button
                  className="btn"
                  style={{
                    background: "#E85252",
                    color: "#fff",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="col-4 pl-0">
            <img
              src={tablechair}
              alt=""
              srcSet=""
              style={{ height: "500px" }}
            />
          </div>
          <div className="col-1"></div>
          <div className="col-12" style={{ paddingTop: "100px" }}></div>
        </div>
      </div>
    </div>
  );
}
