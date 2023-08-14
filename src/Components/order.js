import "./order.css";
import "./style.css";
import React from "react";

function Order(props) {
  return (
    <div className="order-container">
      <div className="overlay"></div>
      <div className="order-menu-container">
        <form className="order-menu">
          {props.closeButton}
          <h2>Register</h2>
          <input type="text" name="fName" placeholder="First Name" required />
          <input type="text" name="lName" placeholder="Last Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" name="submit" />
        </form>
      </div>
    </div>
  );
}

export default Order;
