import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {

  const firtsContacts = contacts.splice(0, 5)
  const [contactsList, setContactsList] = useState(firtsContacts)

  const addRandomContact = () => {

    const randomNum = Math.floor(Math.random() * (contacts.length - 4) + 5)

    const randomContact = contacts[randomNum]

    const contactsListsCopy = [...contactsList]

    contactsListsCopy.push(randomContact)

    setContactsList(contactsListsCopy)
  }

  const sortPopularity = () => {
    const contactsListsCopy = [...contactsList]
    contactsListsCopy.sort((a, b) => b.popularity - a.popularity)
    setContactsList(contactsListsCopy)
  }

  const sortName = () => {
    const contactsListsCopy = [...contactsList]
    contactsListsCopy.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    setContactsList(contactsListsCopy)
  }

  const deleteContact = contactId => {
    const updatedContactList = contactsList.filter(contact => contact.id != contactId)
    setContactsList(updatedContactList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by name</button>

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
          {
            contactsList.map(contact => {
              return (

                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
                  <td>{contact.name}</td>
                  <td>{Math.round(contact.popularity * 100) / 100}</td>
                  <td>{contact.wonOscar && "🏆"}</td>
                  <td>{contact.wonEmmy && "🏆"}</td>
                  <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
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
