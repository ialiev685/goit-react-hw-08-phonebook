import React from "react";
import { NavLink } from "react-router-dom";
import { Authorization } from "components/Authorization";
import { useSelector } from "react-redux";
import { getIsLogged } from "redux/authorization";
import { UserMenu } from "components/UserMenu";
import "./Navigation.scss";

export const Navigation = () => {
  const isLogged = useSelector(getIsLogged);

  return (
    <nav className="navigation">
      <NavLink
        className="link navigation__link"
        activeClassName="active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="link navigation__link"
        activeClassName="active"
        to="/contacts"
      >
        Contacts
      </NavLink>

      <div className="navigation__authorization">
        {isLogged ? <UserMenu /> : <Authorization />}
      </div>
    </nav>
  );
};
