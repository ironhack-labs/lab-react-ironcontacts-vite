import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";


function App() {

  const [shortList, setContacts] = useState(contacts.slice(0,5))

  const randomIndex = () => {
    return Math.floor(Math.random() * contacts.length)
  }

  const Shuffle = () => {
    let newList = []

    for (let i = 0; i < 4; i++) {
      newList.push(contacts[randomIndex()])
    }

    setContacts(newList); 
    console.log(newList)

  }
  
  const wonOscar = (contact) => {
    if(contact.wonOscar) {
      return "🏆"
    } else {
      return ""
    }
  }
  
  const wonEmmy = (contact) => {
    if(contact.wonEmmy) {
      return "🌟"
    } else {
      return ""
    }
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={Shuffle}>Add Random Contact</button>
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
        {shortList.map(contact => (
          <tr key={contact.id}> 
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px' }}/></td> {/* Utilisation de <td> pour les images */}
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{wonOscar(contact)}</td>
              <td>{wonEmmy(contact)}</td>

            </tr>
        )
        )}
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
