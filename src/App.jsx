import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

//const [shortList, setContacts] = useState()

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

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won <br />Oscar</th>
            <th>Won <br />Emmy</th>
          </tr>
        </thead>
        <tbody>
        {contacts.slice(0,5).map(contact => (
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
