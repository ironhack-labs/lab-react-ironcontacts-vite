import React, { useState } from 'react';
import contacts from './contacts.json';

function App() {
  // Initial state with the first 5 contacts
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

  // Add a random contact
  const addRandomContact = () => {
    if (remainingContacts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const newContact = remainingContacts[randomIndex];
    setContactsList(prevList => [...prevList, newContact]);
    setRemainingContacts(prevList => prevList.filter((_, index) => index !== randomIndex));
  };

  // Sort contacts by name
  const sortByName = () => {
    setContactsList([...contactsList].sort((a, b) => a.name.localeCompare(b.name)));
  };

  // Sort contacts by popularity
  const sortByPopularity = () => {
    setContactsList([...contactsList].sort((a, b) => b.popularity - a.popularity));
  };

  // Remove a contact by id
  const removeContact = (id) => {
    setContactsList(prevList => prevList.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px' }} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td><button onClick={() => removeContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
