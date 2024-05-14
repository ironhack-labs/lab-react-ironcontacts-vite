import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";


function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); /* !!! useState([...contactsData.slice(0, 5)]); */
  /* const copiedContacts = [...contacts] */

  const [restOfContacts, setRestOfContacts] = useState(contactsData.slice(5));

  /* !!! const copiedContacts = [...contacts] */

  const addContact = () => {
    /* !!! setContacts(contacts.push(randomContact)); */
    const randomContact = restOfContacts[Math.floor(Math.random() * restOfContacts.length)];
    setContacts([...contacts, randomContact]);
    setRestOfContacts(restOfContacts.filter(contact => randomContact.id !== contact.id))
    
    
  }

  const sortByPopularity = () => {
    
    setContacts([...contacts].sort((contactA, contactB) => {
      return contactB.popularity - contactA.popularity

  }))}

  const sortByName = () => {
    setContacts([...contacts].sort((contactA, contactB) => {
      return (contactA.name).localeCompare(contactB.name)
    }))
  }

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter(contact => contactId !== contact.id)
    setContacts(filteredContacts);
  }
  
  
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button className="button" onClick={addContact}>Add Random Contact</button>

      <button className="button" onClick={sortByName}>Sort by name</button>
      <button className="button" onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr className="table-column">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {contacts.map(contact => {
            
            return (
              <tr className="table-column" key={contact.id}>
                <td><img className="picture" key = {contact.id} src={contact.pictureUrl}></img></td>
                <td><p className="name" key = {contact.id}>{contact.name}</p></td>
                <td><p key = {contact.id}>{contact.popularity.toFixed(2)}</p></td>
                <td>{ contact.wonOscar ? <p>🏆</p> : ""}</td>
                <td>{ contact.wonEmmy ? <p>🌟</p> : ""}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
