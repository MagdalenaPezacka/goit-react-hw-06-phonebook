import {
  List,
  Contact,
  ContactName,
  ContactNumber,
  Button,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  return (
    <>
      <List>
        {contacts.map(item => (
          <Contact key={item.id}>
            <ContactName>{item.name}</ContactName>
            <ContactNumber> {item.number}</ContactNumber>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </Contact>
        ))}
      </List>
    </>
  );
};
