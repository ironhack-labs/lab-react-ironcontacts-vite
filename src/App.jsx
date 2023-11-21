import { useState } from "react";
import "./App.css";
import contactsData from './contacts.json'

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5))

  const addContact = () => {
    let newContact = contactsData[Math.floor(Math.random() * contactsData.length)]
    while ((contacts.filter(e => e.id === newContact.id)).length) {
      newContact = contactsData[Math.floor(Math.random() * contactsData.length)]
    }
    const contactsCopy = [...contacts]
    contactsCopy.push(newContact)
    setContacts(contactsCopy)
  }

  const sortByName = () => {
    const contactsCopy = [...contacts]
    contactsCopy.sort((a, b) => a.name < b.name ? -1 : 1)
    setContacts(contactsCopy)
  }

  const sortByPopularity = () => {
    const contactsCopy = [...contacts]
    contactsCopy.sort((a, b) => a.popularity > b.popularity ? -1 : 1)
    setContacts(contactsCopy)
  }

  const deleteContact = contactToDelete => {
    const newContacts = contacts.filter(e => e.id != contactToDelete)
    setContacts(newContacts)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        <tbody>
          {
            contacts.map(e => {
              return (
                <tr key={e.id}>
                  <td><img className="cardImage" src={e.pictureUrl} alt={e.name} /></td>
                  <td>{e.name}</td>
                  <td>{e.popularity.toFixed(2)}</td>
                  <td>{e.wonOscar && '🏆'}</td>
                  <td>{e.wonEmmy && '🌟'}</td>
                  <td><button onClick={() => deleteContact(e.id)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
