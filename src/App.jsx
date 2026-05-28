import Contacts from './contacts.json'
import "./App.css";
import { useState } from 'react'

function App() {

  const [contacts, setContacts] = useState(Contacts.slice(0, 5))

  const randomContact = () => {
    const displayedIds = contacts.map((c) => c.id)
    const remaining = Contacts.filter((contact) => !displayedIds.includes(contact.id))
    const randomIndex = Math.floor(Math.random() * remaining.length)
    return remaining[randomIndex]
  }

  const addContact = () => {
    const newContact = randomContact()
    setContacts([...contacts, newContact])
  }
  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add random contact</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won an Oscar</th>
            <th scope="col">Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (<tr key={contact.id}>
              <td><img className="contact-img" src={contact.pictureUrl} alt="" /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && ' 🏆 '}</td>
              <td>{contact.wonEmmy && ' 🌟 '}</td>
            </tr>)

          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
