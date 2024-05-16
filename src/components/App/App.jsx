import UserData from '../UserData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useState, useEffect } from 'react';

const getContact = () => {
  const saveContact = localStorage.getItem('render-value');
  if (saveContact !== null) {
    return JSON.parse(saveContact);
  }
  return UserData;
};

export default function App() {
  const [contacts, setContacts] = useState(getContact);
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('render-value', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList items={visibleContact} onDelete={deleteContact} />
    </>
  );
}
