import "./home.css";
import "./style.css";
import Order from "./order.js";
import React, { useState } from "react";

function Home() {
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
      {btnState ? (
        <div>
          <Order closeButton={closeButton} />
        </div>
      ) : null}
      <section id="home">
        <div className="home-foreground">
          <img
            src={require("./images/home-decoration.png")}
            alt="decorative background with drawings of vegetables on top"
          />
          <article className="home-text">
            <h1>Title Here</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              porro!
            </p>
            <button className="order-btn" onClick={handleClick}>
              ORDER NOW
            </button>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
