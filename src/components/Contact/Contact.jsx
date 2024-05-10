import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

export default function Contact({ item: { name, number } }) {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <FaUser className={css.icons} /> {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icons} /> {number}
        </p>
      </div>
      <button>Delete</button>
    </>
  );
}
