import UserData from '../UserData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(UserData);
  const addTask = newTask => {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = taskId => {
    console.log(taskId);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox />
      <ContactList items={tasks} onDelete={deleteTask} />
    </>
  );
}
