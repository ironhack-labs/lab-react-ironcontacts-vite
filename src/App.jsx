import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(contact => !contacts.includes(contact));
      if (remainingContacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingContacts.length);
        const randomContact = remainingContacts[randomIndex];
        setContacts([...contacts, randomContact]);
    }
  }

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }

  const sortByPopularity = () => {
    const popularityContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(popularityContacts);
  }

  const deleteContact = (id) => {
    const contactsCopy = [...contacts];

    const index = contactsCopy.findIndex((contact) => contact.id === id);
    if (index > -1) {
      contactsCopy.splice(index, 1);
      setContacts(contactsCopy);
    }
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picutre</th>
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
              <td><img src={contact.pictureUrl} alt={contact.name} style={{width: "45px"}}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
