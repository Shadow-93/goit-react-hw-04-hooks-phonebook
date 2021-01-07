import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ConatctList/ContactList";
import Filter from "../Filter/Filter";
import Notification from "../Notification/Notification";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    const contactAlert = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactAlert) {
      alert(`${name} is already exists!`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts((prev) => [...prev, contact]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = (contactId) => {
    const newCont = contacts.filter(({ id }) => id !== contactId);
    setContacts(newCont);
  };

  const searchFilter = (filter) => {
    setFilter(filter);
  };

  const getContacts = (filter, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter value={filter} onSearchFilter={searchFilter} />
      ) : (
        <Notification title={"Please add contact"} />
      )}

      <ContactList
        contacts={getContacts(filter, contacts)}
        onRemoveContact={removeContact}
      />
    </>
  );
}
