import "./product.css";
import "./style.css";
import React from "react";

function Product() {
  return (
    <section id="product">
      <div className="products-description">
        <h2>Best Seller</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="products">
        <div className="product">
          <img src={require("./images/product1.png")} alt="fried chicken" />
          <h3>Title Here</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, neque.
          </p>
        </div>
        <div className="product">
          <img
            src={require("./images/product2.png")}
            alt="shrimp fried noodles"
          />
          <h3>Title Here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            molestiae?
          </p>
        </div>
        <div className="product">
          <img src={require("./images/product3.png")} alt="meatballs" />
          <h3>Title Here</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            veniam!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Product;
