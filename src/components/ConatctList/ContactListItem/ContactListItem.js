import React from "react";
import PropTypes from "prop-types";

import s from "../ContactList.module.css";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={s.listItem}>
    {`${name}: ${number}`}
    <button type="button" onClick={onRemove}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
