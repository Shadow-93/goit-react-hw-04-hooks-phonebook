import React from "react";
import PropTypes from 'prop-types'

import ContactListItem from "./ContactListItem";

import s from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        const { name, number, id } = contact;

        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
}

export default ContactList;
