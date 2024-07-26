import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contactsState, setContactsState] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(contact => !contactsState.some(c => c.id === contact.id));

    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setContactsState(prevState => [...prevState, randomContact]);
    }
  };

  const sortByName = () => {
    const sortedContacts = [...contactsState].sort((a, b) => a.name.localeCompare(b.name));
    setContactsState(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactsState].sort((a, b) => b.popularity - a.popularity);
    setContactsState(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contactsState.filter(contact => contact.id !== id);
    setContactsState(updatedContacts);
  };


  return (
    <div className="App">
      <h1>IronContacts</h1>
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
          {contactsState.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="50" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
