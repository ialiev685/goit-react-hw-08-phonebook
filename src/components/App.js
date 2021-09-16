import React from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { HomeView, RigisterView, LoginView } from "views";
import { Navigation } from "./Navigation";

const App = () => {
  return (
    <Section>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/register">
          <RigisterView />
        </Route>
        <Route exact path="/login">
          <LoginView />
        </Route>

        <Route path="/contacts">
          <h1 className="caption">Phonebook</h1>
          <ContactForm />

          <h2 className="title">Contacts</h2>
          <Filter />

          <ContactsList />
        </Route>
      </Switch>
    </Section>
  );
};

export default App;
