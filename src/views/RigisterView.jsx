import React from "react";
import "./viewsStyle.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRegisterUser } from "redux/authorization";

export const RigisterView = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };

    dispatch(fetchRegisterUser(user));
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <label className="registration__input">
          Name
          <input
            autoComplete="off"
            className="registration__field"
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label className="registration__input">
          Email
          <input
            autoComplete="off"
            className="registration__field"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
        </label>

        <label className="registration__input">
          Password
          <input
            autoComplete="off"
            className="registration__field"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="registration__button">
          register
        </button>
      </form>
    </div>
  );
};
