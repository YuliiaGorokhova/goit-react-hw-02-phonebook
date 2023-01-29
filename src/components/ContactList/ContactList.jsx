import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ getFilteredContacts, handleDelete }) => (
  <div className={css.wraperContactList}>
    <ul className={css.contactList}>
      {getFilteredContacts.map(({id, name, number}) => (
        <li key={id} className={css.contactListItem}>
          {name}: {number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  getFilteredContacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};