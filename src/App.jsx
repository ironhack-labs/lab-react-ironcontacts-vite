import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

//const [shortList, setContacts] = useState()

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
          </tr>
        </thead>
        <tbody>
        {contacts.slice(0,5).map(contact => (
          <tr key={contact.id}> {/* Assurez-vous que chaque contact a un identifiant unique pour la clé */}
              <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px' }}/></td> {/* Utilisation de <td> pour les images */}
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td> {/* Formatage de la popularité pour n'afficher que deux décimales */}
            </tr>
        )
        )}
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
