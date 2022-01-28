import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { allFilteredContacts } from "../../redux/contacts/selector";
import actions from "../../redux/contacts/actions";

const ContactList = () => {
  const getContacts = useSelector(allFilteredContacts);
  const dispatch = useDispatch();

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {getContacts.map(({ name, number, id }) => {
          return (
            <li className={s.item} key={id}>
              <p className={s.text}>{name}:</p>
              <p className={s.text}>{number}</p>
              <button
                className={s.button}
                type="button"
                onClick={() => dispatch(actions.deleteContacts(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default ContactList;
