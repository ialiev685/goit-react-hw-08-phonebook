import { useState } from "react";
import "./ContactForm.scss";

import { useSelector, useDispatch } from "react-redux";
import { getFilterContacts, fetchCreateContact } from "redux/phonebook";
import { v4 as uuidv4 } from "uuid";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const items = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const addContact = (newItem) => {
    if (checkDoubleName(newItem)) {
      alert(`${newItem.name} уже есть в контактах.`);
      return false;
    }

    const contact = { id: uuidv4(), ...newItem };
    dispatch(fetchCreateContact(contact));
  };

  const checkDoubleName = (newContact) => {
    const { name } = newContact;
    const normalizedName = name.toLowerCase();

    return items.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <div className="form-contacts">
      <form onSubmit={handleSubmit}>
        <label className="form-contacts__input">
          Name:
          <input
            className="form-contacts__text"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
            autoComplete="off"
          />
        </label>
        <label className="form-contacts__input">
          Number:
          <input
            className="form-contacts__text"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            value={number}
            autoComplete="off"
          />
        </label>
        <button type="submit" className="form-contacts__button">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
