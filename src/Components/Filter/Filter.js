import s from "./Filter.module.css";
import PropTypes from "prop-types";
import actions from "../../redux/contacts/actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/selector";
function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
        onChange={(e) => dispatch(actions.filterChange(e.target.value))} //можно вынести в отдельную функцию, она вверху
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
