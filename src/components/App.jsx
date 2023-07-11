import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact({ name, number }) {
    const isExisting = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExisting) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contactToAdd = {
      name: name,
      number: Number(number),
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, contactToAdd]);
  }

  function removeContact(id) {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }

  function onFilterInput(e) {
    console.log(e.target.value);
    setFilter(e.target.value);
  }

  function getFilterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const filteredContacts = getFilterContacts();
  return (
    <div className={css.phonebook}>
      <h2>Phonebook</h2>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <Filter onFilterInput={onFilterInput} />
      ) : (
        <p className={css.noContact}>You don't have any contact yet</p>
      )}
      <ContactList contacts={filteredContacts} removeContact={removeContact} />
    </div>
  );
}
