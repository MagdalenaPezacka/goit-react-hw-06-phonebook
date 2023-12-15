import { useSelector } from 'react-redux';
import { Phonebook, Container } from './App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

export const App = () => {
  const users = useSelector(state => state.contacts.items);

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
