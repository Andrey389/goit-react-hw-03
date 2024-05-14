import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ items, onDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className={css.container}>
          <Contact item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
