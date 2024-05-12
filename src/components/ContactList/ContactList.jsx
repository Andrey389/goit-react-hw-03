import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ items }) {
  return (
    <ul className={css.ulContact}>
      {items.map(item => (
        <li key={item.id} className={css.container}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
}
