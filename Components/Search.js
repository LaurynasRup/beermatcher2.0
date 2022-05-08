import { useState } from 'react';
import styles from '../styles/Search.module.css';

const Search = () => {
  const options = [
    { value: 'meal', text: 'by Meal' },
    { value: 'name', text: 'by Name' },
    { value: 'random', text: 'Random' },
  ];

  const [placeholder, setPlaceholder] = useState('Enter a meal to match...');

  const [disabled, setDisabled] = useState(false);

  const [input, setInput] = useState('');

  const formSubmitHandler = e => {
    e.preventDefault();
    console.log(input);
  };

  const inputChangehandler = e => {
    setInput(e.target.value);
  };

  const selectChangeHandler = e => {
    switch (e.target.value) {
      case 'name':
        setPlaceholder('Find a beer by name...');
        setDisabled(false);
        break;
      case 'meal':
        setPlaceholder('Enter a meal to match...');
        setDisabled(false);
        break;
      case 'random':
        setPlaceholder('Find random beer...');
        setDisabled(true);
        break;
    }
  };

  return (
    <section className={styles.search}>
      <form onSubmit={formSubmitHandler}>
        <h1 className={styles.search__heading}>
          Match your MEAL with our BREWDOG
        </h1>
        <div />
        <div className={styles.search__inputCont}>
          <input
            className={styles.search__input}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            onChange={inputChangehandler}
            value={input}
          />
          <div className={styles.search__inputControls}>
            <select onChange={selectChangeHandler}>
              {options.map((opt, idx) => (
                <option key={idx} value={opt.value}>
                  {opt.text}
                </option>
              ))}
            </select>
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Search;
