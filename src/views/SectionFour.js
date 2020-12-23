import React from "react";

import image1 from "./image/1.svg";
import image2 from "./image/2.svg";
import image3 from "./image/3.svg";
import image4 from "./image/4.svg";
import image5 from "./image/5.svg";
import image6 from "./image/6.svg";
import image7 from "./image/7.svg";
import image8 from "./image/8.svg";
import image9 from "./image/bg-6.svg";
import "./SectionFour.css";

export default function SectionFour() {
  return (
    <div className="section4">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingTop: "150px" }}></div>
          <div className="col-1"></div>

          <div className="col-10">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2 pr-0">
                        <img src={image1} alt="" srcSet="" />
                        {/* <hr /> */}
                      </div>
                      <div className="col-2">
                        <img src={image2} alt="" srcSet="" />
                        {/* <hr /> */}
                      </div>
                      <div className="col-1 text-center">
                        <img src={image3} alt="" srcSet="" />
                      </div>
                      <div className="col-2 text-center">
                        <img src={image4} alt="" srcSet="" />
                      </div>
                      <div className="col-1 p-0">
                        <img src={image5} alt="" srcSet="" />
                      </div>
                      <div className="col-2">
                        <img src={image6} alt="" srcSet="" />
                      </div>
                      <div className="col-1 pl-0">
                        <img src={image7} alt="" srcSet="" />
                      </div>
                      <div className="col-1">
                        <img src={image8} alt="" srcSet="" />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <hr
                      style={{
                        borderTop: "2px solid rgba(0,0,0,.1)",
                      }}
                    />
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-2 pr-0">
                        <p style={{ color: "#ce66ef" }}>Video Streaming App</p>
                      </div>
                      <div className="col-2">
                        <p>Audio Streaming App</p>
                      </div>
                      <div className="col-1 text-center">
                        <p>Courses App</p>
                      </div>
                      <div className="col-2 text-center">
                        <p>E- Commerce</p>
                      </div>
                      <div className="col-1 p-0">
                        <p>Live Stream Event App</p>
                      </div>
                      <div className="col-2">
                        <p>Landing Page</p>
                      </div>
                      <div className="col-1 pl-0">
                        <p>Course Creator</p>
                      </div>
                      <div className="col-1">
                        <p>All In One</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <br />
                <br />
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="col-5">
                    <div className="row">
                      <div className="col-12">
                        <h4>
                          Introduce quality feature that boost your website rank
                          and performance
                        </h4>
                        <br />
                        <p style={{ fontSize: "12px" }}>
                          Build an incredible workplace and grow your business
                          with Gusto’s all-in-one platform with amazing
                          contents. Get your tests delivered at let home collect
                          sample from the victory of the supplies design system.
                        </p>
                        <br />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn"
                          style={{
                            color: "#fff",
                            background: "#E85252",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                          }}
                        >
                          More Details
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-7">
                    <img
                      src={image9}
                      alt=""
                      srcSet=""
                      style={{ height: "400px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1"></div>

          {/* <div className="col-12" style={{ paddingTop: "150px" }}></div> */}
        </div>
      </div>
    </div>
  );
}
