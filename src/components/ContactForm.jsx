
import { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === '' || email.trim() === '') {
      setError('Name and email are required.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email.');
      return;
    }

    onAddContact(name.trim(), email.trim(), phone.trim());

    setName('');
    setEmail('');
    setPhone('');
    setError('');
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Add New Contact</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={event => setPhone(event.target.value)}
      />

      {error && <p>{error}</p>}

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
