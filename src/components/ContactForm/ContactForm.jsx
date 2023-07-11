import { useState } from 'react';
import css from './ContactForm.module.css';
import shortid from 'shortid';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`Field type ${name} is not processed`);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  let nameId = shortid.generate();
  let numberId = shortid.generate();

  return (
    <div className={css.formbox}>
      <form onSubmit={onSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          name="name"
          id={nameId}
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={numberId}>Number</label>
        <input
          type="tel"
          name="number"
          id={numberId}
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
