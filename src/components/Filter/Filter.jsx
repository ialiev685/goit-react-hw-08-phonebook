import "./Filter.scss";

import { useSelector, useDispatch } from "react-redux";
import { getFilter, getFilterItems } from "redux/phonebook";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = (e) => dispatch(getFilterItems(e.target.value));

  return (
    <label className="filter-input">
      Поиск:
      <input
        className="filter-input__text"
        type="text"
        value={filter}
        name="filter"
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
