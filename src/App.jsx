import data from './contacts.json';
import "./App.css";
import { useState } from 'react';

function App() {
  
  const firstFive = data.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  function randomContact() {
    const contactsFiltered = data.filter((contact) => !contacts.includes(contact));
    const randomNumber = Math.floor(Math.random() * (contactsFiltered.length - 1));
    setContacts([...contacts, contactsFiltered[randomNumber]]);
  }

  function sortByPopularity() {
    setContacts(contacts.toSorted((a, b) => b.popularity - a.popularity));
  }

  function sortByName() {
    setContacts(contacts.toSorted((a, b) => a.name.localeCompare(b.name)));
  }

  function deleteButton(contactId) {
    setContacts(contacts.filter((contact) => contact.id !== contactId.id))
  }

  return (
    <div className="App">
      <h1 className='mb-5'>LAB | React IronContacts</h1>
      <h1>IronContacts</h1>
      <div className='d-flex justify-content-around gap-5 mt-5 mb-5'>
        <button disabled={contacts.length === data.length} onClick={() => randomContact()}>Add Random Contact</button>
        <button onClick={() => sortByPopularity()}>Sort by popularity</button>
        <button onClick={() => sortByName()}>Sort by name</button>
      </div>
      <table className='fs-5' cellpadding="15">
        <thead>
          <tr style={{fontSize: '20px'}}>
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
                <td><img src={contact.pictureUrl} style={{width: '150px'}} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🌟'}</td>
                <td><button onClick={() => deleteButton(contact)}>Delete</button></td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
