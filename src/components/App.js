import React from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { HomeView } from "views";

const App = () => {
  return (
    <Section>
      <Switch>
        <Route patch="/">
          <HomeView />
        </Route>

        <Route patch="/contacts">
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
