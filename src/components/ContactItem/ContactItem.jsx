// import "./ContactItem.scss";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchDeleteContact } from "redux/phonebook/contacts-operations";
import { ListGroup, Button } from "react-bootstrap";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className="contacts-list__item">
      <span>
        {name}: {number}
      </span>
      <Button
        style={{ marginLeft: 20 }}
        variant="danger"
        size="sm"
        className="contacts-list__button "
        type="button"
        onClick={() => dispatch(fetchDeleteContact(id))}
      >
        delete
      </Button>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactItem;
