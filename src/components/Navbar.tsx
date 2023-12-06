import { useState, useEffect } from "react";
import "../Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="application-header" className={scrolled ? "scrolled" : ""}>
      <div className="logo-container">
        <img src={logo} alt="Explorify Logo" className="logo" />
      </div>
      <nav className="navigation-bar">
        <ul className="navigation-list">
          <li>Hotels</li>
          <li>Destinations</li>
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </nav>
      <Link to="/authentication">
        <div className="login-register-buttons">
          <button className="login-button">
            <span className="login-register-text">Login</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
