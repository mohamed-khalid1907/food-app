import "./header.css";
import "./style.css";
import React, { useState } from "react";

function Header() {
  const [btnState, setBtnState] = useState(false);
  function handleBurgerMenu() {
    btnState ? setBtnState(false) : setBtnState(true);
    console.log(btnState);
  }
  let hiddenClass = !btnState ? " hidden-complete" : "";
  return (
    <div>
      <div className={"overlay npm fixed" + hiddenClass}></div>
      <header>
        <button className="nav-btn burger-menu-btn" onClick={handleBurgerMenu}>
          <img src={require("./images/burger-menu.png")} alt="menu button" />
        </button>
        <div className="site-logo">
          <a href="index.html">
            <img src={require("./images/site-logo.png")} alt="site logo" />
          </a>
        </div>
        <nav className="pc-nav">
          <button className="nav-btn">
            <a href="#home">Home</a>
          </button>
          <button className="nav-btn">
            <a href="#product">Product</a>
          </button>
          <button className="nav-btn">
            <a href="#stats">Statistics</a>
          </button>
          <button className="nav-btn">
            <a href="#about">About</a>
          </button>
          <button className="nav-btn">
            <a href="#footer">Contact</a>
          </button>
          <button className="nav-btn search-btn">
            <img src={require("./images/search-icon.png")} alt="search icon" />
          </button>
        </nav>
        <button className="nav-btn search-btn">
          <img src={require("./images/search-icon.png")} alt="search icon" />
        </button>
      </header>
      <nav className={"mobile-nav" + hiddenClass}>
        <button className="nav-btn burger-menu-btn" onClick={handleBurgerMenu}>
          <img src={require("./images/burger-menu.png")} alt="menu button" />
        </button>
        <div></div>
        <button className="nav-btn">
          <a href="#home">Home</a>
        </button>
        <div></div>
        <button className="nav-btn">
          <a href="#product">Product</a>
        </button>
        <button className="nav-btn">
          <a href="#stats">Statistics</a>
        </button>
        <button className="nav-btn">
          <a href="#about">About</a>
        </button>
        <div></div>
        <button className="nav-btn">
          <a href="#footer">Contact</a>
        </button>
      </nav>
    </div>
  );
}

export default Header;
