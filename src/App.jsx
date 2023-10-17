import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const deleteContact = (contactId) => {
    const fiteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(fiteredContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((contactA, contactB) => {
      return contactA.name.localeCompare(contactB.name);
    });
    setContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedPopularity = [...contacts];
    sortedPopularity.sort((contactA, contactB) => {
      // return nameA.popularity.localeCompare(nameB.popularity)
      return contactB.popularity - contactA.popularity;
    });
    setContacts(sortedPopularity);
  };

  const addRandomcontact = () => {
    const remainingList = contactsData.slice(5);
    const randomIndex = Math.floor(Math.random() * remainingList.length);
    const randomContact = remainingList[randomIndex];

    if (!contacts.some((contact) => contact.id === randomContact.id)) {
      setContacts((prevState) => [randomContact, ...prevState]);
    }
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomcontact}> Add Random Contact</button>
      <button onClick={() => sortByName()}>Sort by Name</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
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
        {contacts.map((contact, index) => {
          return (
            <tbody>
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} className="contactimg" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
                <td>
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
