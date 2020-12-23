import React from "react";
import arrow from "./image/arrow.svg";
import background4 from "./image/bgneed.png";
// import "./SectionOne.css";

export default function SectionThree() {
  return (
    <div style={{ background: "#f9fafc" }}>
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingTop: "150px" }}></div>
          <div className="col-1"></div>

          <div className="col-10">
            <div className="row" style={{ minHeight: "400px" }}>
              <div
                className="col-6"
                style={{
                  backgroundImage: `url(${background4})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="row">
                  <div className="col-2"></div>

                  <div
                    className=""
                    style={{
                      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                      borderRadius: "10px",
                      background: "#c4c4c4",
                      height: "300px",
                      width: "200px",
                    }}
                  ></div>

                  <div className="col-2"></div>
                </div>
              </div>

              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <h4>Streaming Services Could Never...</h4>

                    <p>
                      Streaming companies charge their users $10-15 a month and
                      pay you pennies per stream.
                    </p>
                  </div>
                  <div
                    className="col-12 p-3"
                    style={{
                      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    <h6>Organize your project content</h6>
                    <p>
                      Get your website ads tests delivered at let collect sample
                      from the victory of the managments that supplies best
                      design system which guidelines ever with multiple
                      features.
                    </p>
                  </div>

                  <div className="col-12">
                    <br />
                  </div>

                  <div
                    className="col-12 pt-3 pl-3 pr-3 pb-1"
                    style={{
                      background: "#E9ECF0",
                      boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="row">
                      <div className="col-10">
                        <p>Collaborate your multiple team support easily</p>
                      </div>

                      <div className="col-2">
                        <img src={arrow} alt="" srcSet="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1"></div>
          <div className="col-12" style={{ paddingTop: "150px" }}></div>
        </div>
      </div>
    </div>
  );
}
