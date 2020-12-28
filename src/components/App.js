import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ConatctList/ContactList";
import Filter from "./Filter/Filter";

import "./App.css";


export default function App () {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

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

        setContacts((prev) =>  [...prev, contact])
      };

      useEffect(() => {localStorage.setItem('contacts', JSON.stringify(contacts))}, [contacts])

      const removeContact = (contactId) => {
      const newCont = (contacts.filter(({ id }) => id !== contactId))
      setContacts(newCont)
  };

      const searchFilter = (filter) => {
      setFilter(filter)
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
          <Filter value={filter} onSearchFilter={searchFilter} />
          {contacts.length>0 &&
            <ContactList
              contacts={getContacts(filter, contacts)}
              onRemoveContact={removeContact}
            />
             } 
           
        </>
      );
}

// class oldApp extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
    
//     return savedContacts ? this.setState({ contacts: JSON.parse(savedContacts) }) : [];
//   }

//   componentDidUpdate(prevProps, prevState){

//     return prevState.contacts !== this.state.contacts ? localStorage.setItem('contacts', JSON.stringify(this.state.contacts)) : [];
//   }

//   addContact = (name, number) => {
//     const { contacts } = this.state;

//     const contact = {
//       id: uuidv4(),
//       name,
//       number,
//     };

//     const contactAlert = contacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (contactAlert) {
//       alert(`${name} is already exists!`);
//       return;
//     }

//     this.setState((prevState) => {
//       return {
//         contacts: [...prevState.contacts, contact],
//       };
//     });
//   };

//   removeContact = (contactId) => {
//     this.setState((prevState) => {
//       return {
//         contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//       };
//     });
//   };

//   searchFilter = (filter) => {
//     this.setState({ filter });
//   };

//   getContacts = () => {
//     const { contacts, filter } = this.state;

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const findContact = this.getContacts();

//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onSearchFilter={this.searchFilter} />
//         {findContact.length > 0 && (
//           <ContactList
//             contacts={findContact}
//             onRemoveContact={this.removeContact}
//           />
//         )}
//       </>
//     );
//   }
// }

// export default App;
