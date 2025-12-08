import "./index.css";
import data from "./contacts.json";
import { useState } from "react";

function App() {
  
  const [ contacts, setContacts ] = useState(data.slice(0,5));
  const [ num, setNum ] = useState(0);
  const [ popularity, setPopularity ] = useState(0);

  function addContact() {
    const missing = data.filter((c) => !contacts.includes(c));
    if (missing.length > 0) {
      const random = Math.floor(Math.random() * missing.length);
      setContacts([missing[random], ...contacts]);
    }
  }

  function sortByName(){
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    setNum(num + 1);
  }
  
  function sortByPopularity(){
    contacts.sort((a, b) => b.popularity - a.popularity);
    setPopularity(popularity + 1);
  }

  function removeContact(contact){
    setContacts(contacts.filter((c) => c.id !== contact.id));
  }
  
  return (
    <div className="App">
      <h2>IronContacts</h2>
      <div className="buttons m-2">
        <button className="btn bg-dark text-white" disabled={contacts.length === data.length } onClick={addContact} type="button">Add Random Contact</button>
        <button className="btn bg-dark text-white" onClick={sortByName} type="button">Sort by name</button>
        <button className="btn bg-dark text-white" onClick={sortByPopularity} type="button">Sort by popularity</button>
      </div>
      <table className="m-2">
        <thead className="border bg-dark text-white text-center">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr className="border text-center" key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {(contact.wonOscar)? <td>🏆</td>: <td></td>}
                {(contact.wonEmmy)? <td>🌟</td>: <td></td>}
                <td>
                  <button className="btn bg-dark text-white" type="button" onClick={() => removeContact(contact)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
