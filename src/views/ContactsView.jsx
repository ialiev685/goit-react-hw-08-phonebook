import React from "react";
import "./viewsStyle.scss";
import ContactForm from "components/ContactForm";
import ContactsList from "components/ContactsList";
import Filter from "components/Filter";

const ContactsView = () => {
  return (
    <div className="contacts">
      <h1 className="caption">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />

      <ContactsList />
    </div>
  );
};

export default ContactsView;
