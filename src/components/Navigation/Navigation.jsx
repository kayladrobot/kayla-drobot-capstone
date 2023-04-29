import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import styles
import "./Navigation.scss";
import logo from "../../assets/logo/Lookbook.svg";
import menu from "../../assets/icons/menu.svg";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="nav__wrapper">
        <div className="nav__header-wrapper">
          <Link to="/" className="nav__logo-container">
            <img src={logo} alt="lookbook logo" className="nav__logo" />
          </Link>
          <Link to="/" className="nav__menu-container" onClick={toggleMenu}>
            <img src={menu} alt="menu icon" className="nav__menu-icon" />
          </Link>
        </div>
      </div>

      <div className={`nav__container ${!isOpen ? "nav__container--closed" : "nav__container--open"}`}>
        <nav className="nav__content">
          <Link to="/" className="nav__item-wrapper">
            <h5 className="nav__item">Creatives</h5>
          </Link>
          <Link to="/" className="nav__item-wrapper">
            <h5 className="nav__item">Jobs</h5>
          </Link>
          <Link to="/" className="nav__item-wrapper">
            <h5 className="nav__item">Discover</h5>
          </Link>
        </nav>
        <div className="nav__btn-wrapper">
          <Link to="/" className="nav__btn-container">
            <button className="nav__btn--secondary">Take the Quiz</button>
          </Link>
          <Link to="/" className="nav__btn-container">
            <button className="nav__btn--primary">Make a Match</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
