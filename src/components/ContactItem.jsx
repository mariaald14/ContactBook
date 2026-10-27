
function ContactItem({ contact, onDeleteContact }) {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

      <button onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </div>
  );
}

export default ContactItem;
