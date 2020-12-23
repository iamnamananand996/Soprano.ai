import React from "react";
import "./BlueForm.css";

export default function BlueForm() {
  return (
    <div className="blue-grid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <br />
            <br />
          </div>
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row">
              <div className="col-12 text-center">
                <br />
                <br />
                <h1 style={{ color: "#fff" }}>Apply To Be a Creator</h1>
                <p style={{ color: "#FFFFFF" }}>
                  By subscribing with your mail, you will accept our privacy
                  policy
                </p>
                <br />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your name"
                  className="form-control"
                  style={{ padding: "20px" }}
                />
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your company"
                  className="form-control"
                  style={{ padding: "20px" }}
                />
                <br />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-8">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your email"
                      className="form-control"
                      style={{ padding: "20px" }}
                    />
                  </div>

                  <div className="col-4 text-center">
                    <button
                      className="btn"
                      style={{
                        padding: "20px",
                        background: "#E85252",
                        color: "#fff",
                        borderRadius: "30px",
                        width: "100%",
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-12">
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
