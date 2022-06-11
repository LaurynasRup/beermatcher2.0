import { useState } from 'react';
import styles from '../styles/Search.module.css';
import { useBeerContext } from '../Context/beersContext';
// Components
import Carousel from './Carousel';

const Search = () => {
  const options = [
    { value: 'meal', text: 'by Meal' },
    { value: 'name', text: 'by Name' },
    { value: 'random', text: 'Random' },
  ];

  // State
  const [placeholder, setPlaceholder] = useState('Enter a meal to match...');
  const [disabled, setDisabled] = useState(false);
  const [input, setInput] = useState('');
  const [selectInput, setSelectInput] = useState('meal');

  // Context
  const { items, updateItems } = useBeerContext();

  // Functions
  const formSubmitHandler = async (e, selectValue) => {
    e.preventDefault();
    if (input === '') return;

    let url;
    const baseUrl = 'https://api.punkapi.com/v2/beers';
    const strippedInput = input.trim().split(' ').join('_');

    switch (selectValue) {
      case 'name':
        url = `${baseUrl}?beer_name=${strippedInput}`;
        break;
      case 'meal':
        url = `${baseUrl}?food=${strippedInput}`;
        break;
      case 'random':
        url = `${baseUrl}/random`;
        break;
      default:
        break;
    }

    const response = await fetch(url);
    const data = await response.json();

    updateItems(data);

    setInput('');
  };

  const inputChangehandler = e => {
    setInput(e.target.value);
  };

  const selectChangeHandler = e => {
    switch (e.target.value) {
      case 'name':
        setSelectInput('name');
        setPlaceholder('Find a beer by name...');
        setDisabled(false);
        break;
      case 'meal':
        setSelectInput('meal');
        setPlaceholder('Enter a meal to match...');
        setDisabled(false);
        break;
      case 'random':
        setSelectInput('random');
        setPlaceholder('Find random beer...');
        setDisabled(true);
        break;
      default:
        break;
    }
  };

  return (
    <section className={styles.search}>
      <form onSubmit={e => formSubmitHandler(e, selectInput)}>
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
            <select onChange={selectChangeHandler} value={selectInput}>
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
      <Carousel />
    </section>
  );
};

export default Search;
