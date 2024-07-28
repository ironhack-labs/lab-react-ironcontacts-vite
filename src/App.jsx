import { useState } from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));
  const [sortedContacts, setSortedContacts] = useState([]);

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    if (!contactList.some((contact) => contact.id === randomContact.id)) {
      const updatedContacts = [...contactList, randomContact];
      setContactList(updatedContacts);

      const updatedRemainingContacts = [
        ...remainingContacts.slice(0, randomIndex),
        ...remainingContacts.slice(randomIndex + 1),
      ];
      setRemainingContacts(updatedRemainingContacts);
    }
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactList(sortedContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactList(sortedContacts);
  };

  const deleteContact = (id) => {
    const index = contactList.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      const updatedContacts = [...contactList];
      updatedContacts.splice(index, 1);
      setContactList(updatedContacts);
    }
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>
              Won <br /> Oscar
            </th>
            <th>
              Won <br /> Emmy
            </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.length > 0
            ? sortedContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      width="50"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? <span>🏆</span> : null}</td>
                  <td>{contact.wonEmmy ? <span>🌟</span> : null}</td>
                  <td>
                    <button onClick={() => deleteContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : contactList.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      width="50"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar ? <span>🏆</span> : null}</td>
                  <td>{contact.wonEmmy ? <span>🌟</span> : null}</td>
                  <td>
                    <button onClick={() => deleteContact(contact.id)}>
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
