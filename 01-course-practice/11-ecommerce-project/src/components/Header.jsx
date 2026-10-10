import React from "react";
import "../css/Header.css";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Header({ isDarkTheme, onThemeChange }) {
  const nagitive = useNavigate();
  return (
    <div className="main-header">
      <div className="container">
        <img
          onClick={() => nagitive("/")}
          className="images-logo"
          src="src/images/mg-logo.jpg"
          alt="logo"
        />
        <h2 className="header">MG Company</h2>
      </div>

      <div className="container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for something.."
        />

        <div className="icon-container">
          {isDarkTheme ? (
            <GoSun onClick={onThemeChange} />
          ) : (
            <FaMoon onClick={onThemeChange} />
          )}
          <CiShoppingBasket />
        </div>
      </div>
    </div>
  );
}

export default Header;
