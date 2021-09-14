import "./ContactItem.scss";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchDeleteContact } from "redux/phonebook/contacts-operations";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className="contacts-list__item">
      <span>
        {name}: {number}
      </span>
      <input
        className="contacts-list__button"
        type="button"
        value="delete"
        onClick={() => dispatch(fetchDeleteContact(id))}
      />
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactItem;
