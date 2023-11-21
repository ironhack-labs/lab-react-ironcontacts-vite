import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json"

function App() {

  const fiveContacts = contactsData.splice(0, 5)


  const [contacts, setContacts] = useState(fiveContacts)

  const addRandomContact = () => {

    // console.log(contactsData.length)
    const random = Math.floor(Math.random() * contactsData.length)

    const celebrityCopy = [...contacts]

    celebrityCopy.unshift(contactsData[random])

    setContacts(celebrityCopy)



  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button className="btn-random" onClick={() => addRandomContact()}> Add Random Contact</button>
      <button className="btn-sortpopularity" onClick={() => sortPopularity()}> Sort by popularity</button>
      <button className="btn-sortname" onClick={() => sortName()}> Sort by name</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {
          contacts.map(elm => {
            return (
              <tr key={elm.id}>
                <td><img src={elm.pictureUrl} alt={elm.name} className="contact-image" style={{ width: '100px' }} /></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td>{elm.wonOscar ? '🏆' : ' '}</td>
                <td>{elm.wonEmmy ? '🌟' : ' '}</td>
                <td></td>
              </tr>
            )
          })
        }


      </table>
    </div>
  );
}











export default App;
