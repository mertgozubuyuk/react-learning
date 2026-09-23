import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About</h2>
      <hr />
      <Link className="link-employee" to="employee">
        Employee About
      </Link>
      <Link className="link-company" to="company">
        Company About
      </Link>

      <Outlet />
    </div>
  );
}

export default About;
