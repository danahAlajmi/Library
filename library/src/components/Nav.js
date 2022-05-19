import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/members">Members</NavLink>
    </div>
  );
}

export default Nav;
