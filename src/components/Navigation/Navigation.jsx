import React from "react";
import { NavLink } from "react-router-dom";
import { Authorization } from "components/Authorization";
import { useSelector } from "react-redux";
import { getIsLogged } from "redux/authorization";
import "./Navigation.scss";

export const Navigation = () => {
  const isLogged = useSelector(getIsLogged);
  console.log(isLogged);
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
        {isLogged ? "залогился" : <Authorization />}
        {/* <NavLink
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
        </NavLink> */}
      </div>
    </nav>
  );
};
