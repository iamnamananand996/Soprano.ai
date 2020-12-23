import React from "react";
import "./SectionOne.css";
import bag from "./image/bag.svg";
import king from "./image/king.svg";

export default function SectionOne() {
  return (
    <div className="sectionone">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingTop: "100px" }}></div>

          <div className="col-12">
            <div className="row">
              <div className="col-1"></div>
              <div className="col-5">
                <div
                  className="p-5 mb-5"
                  style={{
                    boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
                    borderRadius: "0px",
                  }}
                >
                  <h4>How much can you make with Soprano</h4>
                  <div className="row">
                    <div className="col-12">
                      <div className="row">
                        <div className="col-4">
                          <input
                            type="radio"
                            id="huey"
                            name="drone"
                            value="huey"
                          />
                          &nbsp;&nbsp; Annual
                        </div>

                        <div className="col-8">
                          <input
                            type="radio"
                            id="huey"
                            name="drone"
                            value="huey"
                            checked
                            onChange={() => {
                              console.log("e");
                            }}
                          />
                          &nbsp; &nbsp;Every Month
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <br />
                      <p>Monthly Price</p>

                      <div className="row ">
                        <div className="col-3 text-center">
                          <div
                            style={{
                              border: "1px solid #DCE5EA",
                              //   color: "DCE5EA",
                              height: "30px",
                              width: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            $5
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            style={{
                              background: "#FEDADA",
                              border: "1px solid #ED0F0F",
                              color: "#ED0F0F",
                              height: "30px",
                              width: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            $20
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            style={{
                              border: "1px solid #DCE5EA",
                              //   color: "DCE5EA",
                              height: "30px",
                              width: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            $25
                          </div>
                        </div>
                        <div className="col-3">
                          <div
                            style={{
                              border: "1px solid #DCE5EA",
                              //   color: "DCE5EA",
                              height: "30px",
                              width: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            $45
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <br />
                      <input
                        type="text"
                        name=""
                        id="1"
                        className="form-control"
                        placeholder="Other Amount"
                        style={{ padding: "10px" }}
                      />
                      <br />
                      <input
                        type="text"
                        name=""
                        id="2"
                        className="form-control"
                        placeholder="Number of Subscribers"
                        style={{ padding: "10px" }}
                      />
                      <br />
                      <button
                        className="btn"
                        style={{
                          width: "100%",
                          color: "#fff",
                          background: "#EB5757",
                          padding: "10px",
                        }}
                      >
                        Calculate
                      </button>
                      <br />
                      <br />
                      <input
                        type="text"
                        name=""
                        id="3"
                        className="form-control"
                        placeholder="$101,573.99"
                        style={{ padding: "10px" }}
                      />
                      <br />
                    </div>
                    <p>After Stripe’s fee and Soprano’s fees</p>
                  </div>
                </div>
              </div>

              <div className="col-5 p-5">
                <div className="row">
                  <div className="col-12">
                    <h5>Bunchle Wit</h5>
                    <br />
                    <p>
                      Build an incredible workplace and grow your business with
                      Gusto’s all-in-one platform with amazing contents.
                    </p>
                    <br />
                    <br />
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2">
                        <img src={bag} alt="" srcSet="" />
                      </div>

                      <div className="col-10">
                        <h6>Smart Features</h6>
                        <p>
                          Get your blood tests delivered at let home collect
                          sample from the victory of the managments your blood
                          tests.
                        </p>
                      </div>
                    </div>
                    <br />
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2">
                        <img src={king} alt="" srcSet="" />
                      </div>

                      <div className="col-10">
                        <h6>Secure Contents</h6>
                        <p>
                          Get your blood tests delivered at let home collect
                          sample from the victory of the managments.your blood
                          tests.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-1"></div>

                  <div className="col-12 text-right">
                    <button
                      className="btn"
                      style={{
                        background: "#EB5757",
                        padding: "10px",
                        color: "#fff",
                        width: "30%",
                      }}
                    >
                      Get
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12" style={{ paddingTop: "100px" }}></div>
        </div>
      </div>
    </div>
  );
}
