import './App.css';
import contactsData from './contacts.json';
import { useState } from 'react';

function App() {

  const [ contacts, setContacts ] = useState(contactsData.slice(0, 5));

  const handleAddRandom = () => {
    const remainContacts = contactsData.filter(contact => !contacts.includes(contact));
    
    if (remainContacts.length) {
      const randomIndex = Math.floor(Math.random() * remainContacts.length);
      setContacts([remainContacts[randomIndex], ...contacts]);
    }
  }

  const handleSortByName = () => {
    setContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name))]);
  }

  const handleSortByPopularity = () => {
    setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
  }

  const handleDelete = (contactId) => {
    setContacts([...contacts.filter(contact => contact.id !== contactId)]);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className='div-btn'>
        <button className='btn' onClick={handleAddRandom}>Add Random Contact</button>
        <button className='btn' onClick={handleSortByPopularity}>Sort by popularity</button>
        <button className='btn' onClick={handleSortByName}>Sort by name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🌟' : ''}</td>
                <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;