import "./App.css";
import contactsData from "./contacts.json"
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.splice(0, 5));
  const [restOfContacts, setRestOfContacts] = useState(contactsData.slice(5));

  const addRandomContact = () => {
    console.log("the other contacts", restOfContacts);

    const randomSelect = restOfContacts[Math.floor(Math.random() * restOfContacts.length)];
    setContacts((prevState) => [randomSelect, ...prevState]);
    setRestOfContacts((prevState) => prevState.filter(contact => {
      return contact.id !== randomSelect.id;
    }))
    console.log(restOfContacts.length)
  };

  const sortByPopularity = () => {
    const sortedPop = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(sortedPop);
  };
  const sortByName = () => {
    const sortedName = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedName);
  };

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(filteredContacts);
  }

  return (
    <div className="contact-container">
      <h2>IronContacts</h2>
      <button onClick={addRandomContact}>+ Random Contact</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
      <table className="contact-container" >
        <thead className="header">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {contacts.map((contact, index) => (
          <tr className="row" key={index}>
            <td><img src={contact.pictureUrl} alt="" /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            {contact.wonOscar ? <td> 🏆 </td> : <td></td>}
            <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default App;
