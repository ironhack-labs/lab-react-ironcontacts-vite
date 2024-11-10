import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  function sortByPopularity() {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  }

  function sortByName() {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  }

  function addRandomContact() {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );
    if (remainingContacts.length === 0) return;
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContacts([...contacts, randomContact]);
  }

  function removeContact(contactId) {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
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
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
