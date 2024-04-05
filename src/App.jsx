import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5));

  function addRandomContact() {
    if (remainingContacts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    setContacts(prevContacts => [...prevContacts, randomContact]);
    setRemainingContacts(prevRemainingContacts => {
      const updatedRemainingContacts = [...prevRemainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1);
      return updatedRemainingContacts;
    });
  }

  function sortName() {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }

  function sortPopularity() {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  }

  function deleteContact(index) {
    const removeContact = [...contacts];
    removeContact.splice(index, 1);

    setContacts(removeContact);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortName}>Sort By Name</button>
      <button onClick={sortPopularity}>Sort By Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img src={contact?.pictureUrl} alt={contact?.name} />
              </td>
              <td>
                {contact?.name}
              </td>
              <td>
                {contact?.popularity}
              </td>
              <td>
                {contact?.wonOscar ? '🏆' : null}
              </td>
              <td>
                {contact?.wonEmmy ? '🌟' : null}
              </td>
              <td>
                <button onClick={deleteContact}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
