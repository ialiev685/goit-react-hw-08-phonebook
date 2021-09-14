import React from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";

const App = () => {
  return (
    <Section>
      <h1 className="caption">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />

      <ContactsList />
    </Section>
  );
};

export default App;
