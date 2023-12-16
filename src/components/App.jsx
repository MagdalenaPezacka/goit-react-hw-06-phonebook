import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
import { Phonebook, Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const users = useSelector(state => state.contacts.items);
  // const [contacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Phonebook>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>
      <Container>
        <h2>Contacts</h2>
        {!users.length ? (
          <h3>Your phonebook is empty. Add your first contact</h3>
        ) : (
          <>
            <h3>Your phonebook has {users.length} contacts</h3>
            <Filter />
            <ContactList />
          </>
        )}
      </Container>
    </Phonebook>
  );
};
