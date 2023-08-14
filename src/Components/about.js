import "./about.css";
import Order from "./order.js";
import React, { useState } from "react";

function About() {
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
      <section id="about">
        <div className="container-5">
          <div className="text">
            <div className="title">Chicken Gril</div>
            <p className="body_text_5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
              tempore! Nobis nihil, ullam ipsam cum iste tenetur dolore sapiente
              nesciunt ab quasi aspernatur recusandae unde sint rerum?
              Assumenda, sit consectetur.
            </p>
            <button className="order-btn" onClick={handleClick}>
              ORDER NOW
            </button>
          </div>
          <img
            src={require("./images/product3-about.png")}
            alt="meatballs"
            className="chicken-gril-image"
          />
        </div>
        <div className="container_6">
          <div className="blur"></div>
          <div className="text_6">
            <p className="body_text_6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
              atque aperiam iste cum suscipit sit nihil esse, debitis dolore,
              minus dolorum, tempora est molestias beatae. Placeat deserunt
              voluptas nobis reprehenderit?
            </p>
            <h1 className="title_6">Senwa Fields</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
