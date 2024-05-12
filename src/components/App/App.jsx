import UserData from '../UserData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(UserData);
  const addTask = newTask => {};
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList items={tasks} />
    </>
  );
}
