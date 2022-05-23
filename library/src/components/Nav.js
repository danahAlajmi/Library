import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div className="body">
      <div className="nav">
        <NavLink to="/">
          <a className="a">Home</a>
        </NavLink>
        <NavLink to="/books">
          <a className="a">Books</a>
        </NavLink>
        <NavLink to="/members">
          <a className="a">Members</a>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
