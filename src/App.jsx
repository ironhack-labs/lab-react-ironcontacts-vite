import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contactsState, setContactsState] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    // Filter out contacts that are already displayed
    const remainingContacts = contactsData.filter(contact => !contactsState.some(c => c.id === contact.id));

    // Check if there are any remaining contacts
    if (remainingContacts.length > 0) {
      // Select a random contact from the remaining contacts
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      // Update the state with the new random contact
      setContactsState(prevState => [...prevState, randomContact]);
    }
  };

  // Function to sort contacts by name (alphabetically)
  const sortByName = () => {
    const sortedContacts = [...contactsState].sort((a, b) => a.name.localeCompare(b.name));
    setContactsState(sortedContacts);
  };

  // Function to sort contacts by popularity (highest first)
  const sortByPopularity = () => {
    const sortedContacts = [...contactsState].sort((a, b) => b.popularity - a.popularity);
    setContactsState(sortedContacts);
  };

  // Function to delete a contact by id
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
            <th>Actions</th> {/* Column for action buttons */}
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
