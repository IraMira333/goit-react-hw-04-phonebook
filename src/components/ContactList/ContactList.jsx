import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={css.listBox}>
      {contacts.map(contact => {
        return (
          <li className={css.liContact} key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>

            <button
              className={css.listBtn}
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
