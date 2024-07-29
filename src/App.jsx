import "./App.css";
import React, { useState } from 'react';
import contacts from './contacts.json';

function App() {
  const [contactList, setContactList] =
  useState(contacts.slice(0, 5));

  function addRandomContacts() {
    const remainingContacts = contacts.filter(contact => !contactList.includes(contact));
    const randomContacts = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContactList([...contactList, randomContacts]);
  }

  function sortByName() {
    const sortedContacts = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedContacts);
  }

  function sortByPopularity() {
    const sortedContacts = [...contactList].sort((a, b) => b.populairty - a.popularity);
    setContactList(sortedContacts);
  }

  function deleteContact(id) {
    const updatedContacts = contactList.filter(contact => contact.id !== id);
    setContactList(updatedContacts);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button class='button' onClick={addRandomContacts}>Add Random Contact</button>
      <button class='button' onClick={sortByName}>Sort by name</button>
      <button class='button' onClick={sortByPopularity}>Sort by populairty</button>
      <table class='styled-table'>
        <thead class='style-thead'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th><span className="star">🌟</span></th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{width: "50px"}} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <td><button class='button' onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
