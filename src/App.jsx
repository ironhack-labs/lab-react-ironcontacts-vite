// App.js
import React, { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css"; // optional: add your CSS here

function App() {
  // Initialize with the first 5 contacts
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  // Add a random contact from remaining contacts
  function addRandomContact() {
    const remainingContacts = contactsData.filter(
      (c) => !contacts.find((contact) => contact.id === c.id)
    );
    if (remainingContacts.length === 0) return;

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    setContacts((prev) => [...prev, randomContact]);
  }

  // Sort contacts alphabetically by name
  function sortByName() {
    const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  }

  // Sort contacts by popularity (highest first)
  function sortByPopularity() {
    const sorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sorted);
  }

  // Delete a contact by id
  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>

      {/* Action Buttons */}
      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>

      {/* Contacts Table */}
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="50" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🌟"}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
