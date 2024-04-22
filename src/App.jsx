import React, { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState([...contactsData].slice(0, 5));

  function addRandom() {
    const randomNum = Math.floor(Math.random() * (contactsData.length - 5));
    const randomContent = contactsData.slice(5)[randomNum];
    setContacts((prevContacts) => [...prevContacts, randomContent]);
  }

  function sortPop() {
    setContacts((prevContacts) =>
      [...prevContacts].sort((a, b) => b.popularity - a.popularity)
    );
  }

  function sortName() {
    setContacts((prevContacts) =>
      [...prevContacts].sort((a, b) => a.name.localeCompare(b.name))
    );
  }

  function deleteRow(id) {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }

  return (
    <div>
      <h1>Contacts List</h1>
      <button onClick={sortPop}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscary</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button
                  onClick={() => {
                    deleteRow(contact.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRandom}>ADD RANDOM</button>
    </div>
  );
}

export default App;
