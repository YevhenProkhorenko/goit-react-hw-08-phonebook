import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading } from 'redux/contacts/contactsSelectors.js';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter';
import css from '../Phonebook/Phonebook.module.scss';

import React from 'react';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.mainTitle}>Phonebook</h1>
        <div className={css.mainWrapper}>
          <ContactForm />
        </div>
        <div>
          <h2 className={css.title}>Contacts</h2>
          <Filter />
          {isLoading && <h1>Loading...</h1>}
          <ContactList />
        </div>
      </div>
    </>
  );
}
