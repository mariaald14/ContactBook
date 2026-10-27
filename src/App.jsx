import { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState('');

  function addContact(name, email, phone) {
    const newContact = {
      id: Date.now().toString(),
      name: name,
      email: email,
      phone: phone
    };

    setContacts([...contacts, newContact]);
  }

  function deleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Book</h1>
      <p>My Contact List</p>

      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      <SearchBar
       searchText={searchText}
       setSearchText={setSearchText}
      />

      <ContactList
        contacts={filteredContacts}
       totalContacts={contacts.length}
       searchText={searchText}
       onDeleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
