import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink
        activeClassName="active"
        className="link navigation__link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="active"
        className="link navigation__link "
        to="/contacts"
      >
        Contacts
      </NavLink>
      <div className="navigation__authorization">
        <NavLink
          activeClassName="active"
          className="link navigation__link"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          activeClassName="active"
          className="link navigation__link"
          to="/register"
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
};
