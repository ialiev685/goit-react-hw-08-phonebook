import React from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { HomeView, RigisterView } from "views";
import { Navigation } from "./Navigation";

const App = () => {
  return (
    <Section>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/register">
          <RigisterView />
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
