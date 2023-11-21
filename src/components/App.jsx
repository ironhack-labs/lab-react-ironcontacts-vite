import "./App.css"
import contacts from "./../contacts.json"
import { useState } from "react"

function App() {

  const [fiveContacts, setFiveContacts] = useState(contacts.slice(0, 5))

  const addContact = () => {

    const newContact = contacts[Math.floor(Math.random() * (contacts.length - 0))]

    if (!fiveContacts.includes(newContact)) {

      const fiveContactsCopy = [...fiveContacts]

      fiveContactsCopy.unshift(newContact)

      setFiveContacts(fiveContactsCopy)
    }
  }

  const orderByName = () => {

    const orderedContacts = fiveContacts.toSorted((a, b) => a.name.localeCompare(b.name))

    setFiveContacts(orderedContacts)

  }

  const orderByPopularity = () => {

    const orderedContacts = fiveContacts.toSorted((a, b) => b.popularity - a.popularity)

    setFiveContacts(orderedContacts)

  }

  const removeContact = contactToDelete => {

    const newConctacts = fiveContacts.filter(elm => elm.id != contactToDelete)
    setFiveContacts(newConctacts)

  }

  return (
    <div className="App">
      <button onClick={addContact}>Add new contact</button>
      <button onClick={orderByName}>Order by Name</button>
      <button onClick={orderByPopularity}>Order by popularity</button>
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
        <tbody>
          {
            fiveContacts.map(elm => {
              return (
                <tr key={elm.id}>
                  <td><img src={elm.pictureUrl} alt={elm.name} /></td>
                  <td>{elm.name}</td>
                  <td>{elm.popularity.toFixed(2)}</td>
                  <td>{elm.wonOscar ? '🏆' : ''}</td>
                  <td>{elm.wonEmmy ? '🌟' : ''}</td>
                  <td>  <button onClick={() => removeContact(elm.id)}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default App;
