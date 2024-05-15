import UserData from '../UserData.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useState, useEffect } from 'react';

const getTask = () => {
  const saveTask = localStorage.getItem('render-value');
  if (saveTask !== null) {
    return JSON.parse(saveTask);
  }
  return [UserData];
};

export default function App() {
  const [tasks, setTasks] = useState(getTask);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('render-value', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = newTask => {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = taskId => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== taskId);
    });
  };

  const visibleTask = tasks.filter(task =>
    task.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList items={visibleTask} onDelete={deleteTask} />
    </>
  );
}
