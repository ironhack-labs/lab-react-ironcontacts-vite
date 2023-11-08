import "./App.css";
import { useState } from 'react';
import contactsArray from "./contacts.json";


function App() {

  const [contacts, setContacts] = useState(contactsArray.slice(0, 5))

  const addContact = () => {

    const randomContact = Math.floor(Math.random() * contactsArray.slice(5).length)
    const newContact = contactsArray[randomContact]

    const contactsCopy = [...contacts]

    contactsCopy.unshift(newContact)

    setContacts(contactsCopy)
  }

  const sortByName = () => {

    const contactsCopy = [...contacts]

    contactsCopy.sort(function (a, b) {
      return a.name - b.name
    })

    setContacts(contactsCopy)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={() => addContact()}>Add Random Contact</button>
      <button onClick={() => sortByPopularity()}>Sort by popularity</button>
      <button onClick={() => sortByName()}>Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>


          {
            contacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar && <span>🏆</span>}</td>
                  <td>{contact.wonEmmy && <span>🏆</span>}</td>
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
