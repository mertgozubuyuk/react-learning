import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/content">
          Content
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
      </div>
    </div>
  );
}

export default Header;
