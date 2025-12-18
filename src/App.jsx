import { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  const [visibleContacts, setVisibleContacts] = useState(
    contactsData.slice(0, 5)
  );

  const handleAddRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) =>
        !visibleContacts.some((visibleContact) => visibleContact.id === contact.id)
    );

    if (remainingContacts.length === 0) return;

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    setVisibleContacts((currentContacts) => [
      ...currentContacts,
      randomContact,
    ]);
  };

  const handleSortByName = () => {
    const sortedContacts = [...visibleContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setVisibleContacts(sortedContacts);
  };

  const handleSortByPopularity = () => {
    const sortedContacts = [...visibleContacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setVisibleContacts(sortedContacts);
  };

  const handleDeleteContact = (id) => {
    const filteredContacts = visibleContacts.filter(
      (contact) => contact.id !== id
    );
    setVisibleContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <div className="actions">
        <button onClick={handleAddRandomContact}>Add Random Contact</button>
        <button onClick={handleSortByName}>Sort by Name</button>
        <button onClick={handleSortByPopularity}>Sort by Popularity</button>
      </div>

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
          {visibleContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>
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
