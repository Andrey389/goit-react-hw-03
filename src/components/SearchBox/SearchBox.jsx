import css from './SearchBox.module.css';

export default function SearchBox() {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input className={css.box} type="text" />
    </>
  );
}
