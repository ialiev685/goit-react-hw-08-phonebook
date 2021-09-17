import React from "react";
import avatar from "./avatar.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "redux/authorization";
import { fetchLogOut } from "redux/authorization";
import "./UserMenu.scss";

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className="user-menu">
      <span>Hi, {userName}</span>
      <div className="user-menu__box">
        <img className="user-menu__avatar" src={avatar} alt="Аватарка" />
      </div>
      <button type="button" onClick={() => dispatch(fetchLogOut())}>
        exit
      </button>
    </div>
  );
};
