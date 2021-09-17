import React from "react";

import Section from "./Section";
import { ContactsView } from "views";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { HomeView, RigisterView, LoginView } from "views";
import { Navigation } from "./Navigation";
import { fetchCurrentUser } from "redux/authorization";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Section>
      <Navigation />
      <Switch>
        <Route path="/register">
          <RigisterView />
        </Route>

        <Route path="/login">
          <LoginView />
        </Route>

        <Route path="/contacts">
          <ContactsView />
        </Route>

        <Route exact path="/">
          <HomeView />
        </Route>
      </Switch>
    </Section>
  );
};

export default App;
