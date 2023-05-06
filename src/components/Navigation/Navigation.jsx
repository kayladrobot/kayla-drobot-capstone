import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import styles
import CreativeModal from "../CreativeModal/CreativeModal";
import "./Navigation.scss";
import logo from "../../assets/logo/Lookbook.svg";
import menu from "../../assets/icons/menu-white.svg";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  if(isMobile) {
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
          <Link to="/creative" className="nav__item-wrapper">
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
            <button className="nav__btn--secondary" onClick={handleOpen} >Take the Quiz</button>
            {open && (
            <CreativeModal
              open={open}
              handleClose={handleClose}
            />
          )}
          <button className="nav__btn--primary" onClick={handleOpen} >Make a Match</button>
            {open && (
            <CreativeModal
              open={open}
              handleClose={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}
return (
  <div className="nav">
    <div className="nav__wrapper">
      <div className="nav__header-wrapper">
        <Link to="/" className="nav__logo-container">
          <img src={logo} alt="lookbook logo" className="nav__logo" />
        </Link>
        <Link to="/" className="nav__menu-container">
          <img src={menu} alt="menu icon" className="nav__menu-icon" />
        </Link>
      </div>
    </div>

    <div className={`nav__container`}>
      <nav className="nav__content">
        <Link to="/creative" className="nav__item-wrapper">
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
            <button className="nav__btn--secondary" onClick={handleOpen} >Take the Quiz</button>
            {open && (
            <CreativeModal
              open={open}
              handleClose={handleClose}
            />
          )}
          <button className="nav__btn--primary" onClick={handleOpen} >Make a Match</button>
            {open && (
            <CreativeModal
              open={open}
              handleClose={handleClose}
            />
          )}
        </div>
    </div>
  </div>
);

}


export default Navigation;
