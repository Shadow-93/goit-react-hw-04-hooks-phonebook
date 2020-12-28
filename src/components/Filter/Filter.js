import React from "react";
import PropTypes from "prop-types";

import s from "./Filter.module.css";

const Filter = ({ onSearchFilter }) => {
  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.filterInput}
        type="text"
        onChange={(e) => onSearchFilter(e.target.value)}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  onSearchFilter: PropTypes.func.isRequired,
};

export default Filter;
