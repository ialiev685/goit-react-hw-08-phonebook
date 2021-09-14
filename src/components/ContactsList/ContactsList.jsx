import ContactItem from "../ContactItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getError } from "redux/phonebook";
import { getIsLoader, getFilterContacts, fetchContacts } from "redux/phonebook";
import "./ContactsList.scss";

const ContactsList = () => {
  const items = useSelector(getFilterContacts);
  const loading = useSelector(getIsLoader);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contacts-wrapper">
      {loading && <p className="contacts-wrapper__loader">loading...</p>}
      {error && <p className="contacts-wrapper__error">{error}</p>}
      <ul className="contacts-wrapper__contacts-list">
        {items.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
