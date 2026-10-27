import ContactItem from './ContactItem';

function ContactList({ contacts, totalContacts, searchText, onDeleteContact }) {
  if (totalContacts === 0) {
    return <p>No contacts yet. Add one above!</p>;
  }

  if (contacts.length === 0) {
    return <p>No matches found for "{searchText}".</p>;
  }

  return (
    <div>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
}

export default ContactList;