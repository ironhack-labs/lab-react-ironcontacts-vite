import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

// const fiveContacts = ;


function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(7, 12));

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const contactsCopy = [...contactsList];
    const newContact = contacts[randomIndex];
    if (!contactsCopy.includes(newContact)) {
      contactsCopy.push(newContact);
      setContactsList(contactsCopy);
    } else {
      addRandomContact();
    }
  }

  // const sortByName = () => {
  //   const contactsCopy = [...contactsList];
  //   setContactsList(contactsCopy.sort((a, b) => a.name.localeCompare(b.name)));
  // }

  const sortByName = () => {
    setContactsList(prevContactsList => {
      const contactsCopy = [...prevContactsList];
      return contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  // const sortByPopularity = () => {
  //   const contactsCopy = [...contactsList];
  //   setContactsList(contactsCopy.sort((a, b) => b.popularity - a.popularity));
  // }

  const sortByPopularity = () => {
    setContactsList(prevContactsList => {
      const contactsCopy = [...prevContactsList];
      return contactsCopy.sort((a, b) => b.popularity - a.popularity);
    });
  }

  const deleteContact = (id) => {
    const contactsCopy = contactsList.filter(contact => contact.id !== id);
    setContactsList(contactsCopy);
  }

  return (
    <div className="App">
        <h1>LAB | React IronContacts</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={()=>setContactsList(contacts.slice(7, 12))}>Reset</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won<br/>Oscar</th>
              <th>Won<br/>Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactsList.map((contact, index) => (
              <tr key={index}>
                <td><img src={contact.pictureUrl} alt={contact.name} width="65" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🌟' : ''}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
