import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const remainingContacts = contactsData.filter(
    (c) => !contacts.find((contact) => contact.id === c.id)
  );

  const addRandom = () => {
    if (remainingContacts.length === 0) return;
    const idx = Math.floor(Math.random() * remainingContacts.length);
    setContacts([...contacts, remainingContacts[idx]]);
  };

  const sortByName = () => {
    const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  };

  const sortByPopularity = () => {
    const sorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sorted);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="60" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "\u{1F3C6}" : ""}</td>
              <td>{contact.wonEmmy ? "\u{1F31F}" : ""}</td>
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
