import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Section } from './Section';
import { AddContactForm } from './AddContactForm';
import { Filter } from './Filter';
import { ContactsList } from './ContactsList';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function App() {
  const contactsFromState = useSelector(getContacts);
  // const [contacts, setContacts] = useState(initialContacts);
  // const [localStorageInitialized, setLocalStorageInitialized] = useState(false);

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   const contactsParsed = JSON.parse(storedContacts);

  //   if (contactsParsed !== null) {
  //     setContacts(contactsParsed);
  //   } else {
  //     setContacts(initialContacts);
  //   }

  //   if (!localStorageInitialized) {
  //     setLocalStorageInitialized(true);
  //   }
  // }, [localStorageInitialized]);

  // useEffect(() => {
  //   if (localStorageInitialized) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts, localStorageInitialized]);

  return (
    <div className="main-wrapper">
      <Section className="addContactSection" title="Phonebook">
        <AddContactForm />
      </Section>
      {contactsFromState.length !== 0 && (
        <Section className="contactListSection" title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </div>
  );
}
