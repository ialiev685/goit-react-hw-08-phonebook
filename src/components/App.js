import React from "react";

import Section from "./Section";
import { ContactsView } from "views";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Switch } from "react-router-dom";
import { HomeView, RigisterView, LoginView } from "views";
import { Navigation } from "./Navigation";
import { fetchCurrentUser, getIsFetchingCurrent } from "redux/authorization";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Spinner } from "./Spinner";

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const murkup = (
    <>
      <Navigation />
      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <RigisterView />
        </PublicRoute>

        <PublicRoute path="/login" redirect="/contacts" restricted>
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirect="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </>
  );

  return <Section>{isFetchingCurrentUser ? <Spinner /> : murkup}</Section>;
};

export default App;
