import React from "react";
import "./viewsStyle.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegisterUser, getError } from "redux/authorization";

export const RigisterView = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const error = useSelector(getError);

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
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-user">
      <form onSubmit={handleSubmit}>
        <label className="form-user__input">
          Name
          <input
            autoComplete="off"
            className="form-user__field"
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-user__input">
          Email
          <input
            autoComplete="off"
            className="form-user__field"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-user__input">
          Password
          <input
            autoComplete="off"
            className="form-user__field"
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="form-user__button">
          register
        </button>
      </form>
      {error && <p className="form-user__error">{error}</p>}
    </div>
  );
};
