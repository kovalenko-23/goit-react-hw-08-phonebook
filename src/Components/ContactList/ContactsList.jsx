import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactsItem from '../ContactsItem/ContactsItem';
import { List } from './ContactList.styled';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import operationsContact from '../../redux/phonebook/phonebook-operations';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';

const ContactsList = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operationsContact.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  console.log(contacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter),
  );
  return (
    <div>
      {contacts && (
        <List>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactsItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </div>
  );
};

export default ContactsList;
