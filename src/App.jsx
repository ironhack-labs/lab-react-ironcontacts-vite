import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json"

function App() {

  const fiveContacts = contactsData.slice(0, 5)

  const [contact, setContact] = useState(fiveContacts)

  const addRandom = () => {

    const numRandom = Math.floor(Math.random() * (contactsData.length - 1))

    const fiveContactsCopy = [...contact]

    fiveContactsCopy.push(contactsData[numRandom])

    setContact(fiveContactsCopy)
  }

  const sortingPop = () => {

    const sortedContacts = [...contact]

    sortedContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1
      } else {
        return 1
      }
    })

    setContact(sortedContacts)
  }

  const sortingName = () => {

    const sortedContacts = [...contact]

    sortedContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    })

    setContact(sortedContacts)
  }


  const deleteContact = contactId => {

    const caractersFiltered = contact.filter(elm => elm.id != contactId)
    setContact(caractersFiltered)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortingPop}>Sort By Popularity</button>
      <button onClick={sortingName}>Sort By Name</button>
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
            contact.map((elm, i) => {
              return (<tr key={i}>
                <td><img src={elm.pictureUrl} alt={elm.name} /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity.toFixed(2)}</td>
                <td>{elm.wonOscar && '🏆'}</td>
                <td>{elm.wonEmmy && '🌟'}</td>
                <td><button onClick={() => deleteContact(elm.id)}>Delete</button></td>
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
