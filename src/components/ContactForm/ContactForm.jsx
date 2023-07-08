import React, { Component } from 'react';
import css from './ContactForm.module.css';
import shortid from 'shortid';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  nameId = shortid.generate();
  numberId = shortid.generate();

  render() {
    return (
      <div className={css.formbox}>
        <form onSubmit={this.onSubmit}>
          <label htmlFor={this.nameId}>Name</label>
          <input
            type="text"
            name="name"
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={this.numberId}>Number</label>
          <input
            type="tel"
            name="number"
            id={this.numberId}
            value={this.state.number}
            onChange={this.handleInputChange}
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
}
