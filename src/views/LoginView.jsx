import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogInUser, getError } from "redux/authorization";
import "./viewsStyle.scss";

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };
    dispatch(fetchLogInUser(user));
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
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

  return (
    <div className="form-user">
      <form onSubmit={handleSubmit}>
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
          enter
        </button>
      </form>
      {error && <p className="form-user__error">{error}</p>}
    </div>
  );
};
