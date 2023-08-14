import "./stats.css";
import "./style.css";
import React, { useState } from "react";
import Order from "./order";

function Stats() {
  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    console.log(btnState);
    setBtnState((prevState) => !prevState);
    console.log(btnState);
  }
  let closeButton = (
    <button className="close-button" onClick={handleClick}>
      X
    </button>
  );
  return (
    <div>
      {btnState ? <Order closeButton={closeButton} /> : null}
      <div className="stats-container">
        <section className="first">
          <img
            className="shawarma"
            src={require("./images/product-shawarma.png")}
            alt="shawarma"
          />

          <div className="text-one">
            <h2>Oriental Taste</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Vivamus lacinia odio vitae ves-
              <br />
              tibulum vestibulum.
            </p>

            <button className="order-btn" onClick={handleClick}>
              ORDER NOW
            </button>
          </div>
          <div className="background-first"></div>
        </section>
        <section className="second " id="stats">
          <div className="text-two">
            <h2>Statistics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              <br />
              lacinia odio vitae vestibulum vestibulum.
            </p>
          </div>

          <div className="circles">
            <div className="circle">
              <span className="number">123</span>
              <br />
              <span className="text">OUTLETS</span>
            </div>
            <div className="circle">
              <span className="number">100</span>
              <br />
              <span className="text">CHEF</span>
            </div>
            <div className="circle">
              <span className="number">300</span>
              <br />
              <span className="text">MENU</span>
            </div>
            <div className="circle">
              <span className="number">30</span>
              <br />
              <span className="text">COUNTRY</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Stats;
