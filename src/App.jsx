import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const fiveContacts = contactsData.slice(0, 5);
  console.log(fiveContacts);
  const [contacts, setContacts] = useState(fiveContacts);

  const addContact = () => {
    const leftoverContacts = contactsData.slice(5);
    const randomContactIndex = Math.floor(
      Math.random() * leftoverContacts.length
    );
    const randomContact = leftoverContacts[randomContactIndex];
    setContacts((prevState) => [randomContact, ...prevState]);
  };

  const sortContactByPopularity = () => {
    const popularity = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(popularity);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortContactByPopularity}>Sort by popularity</button>
      <table className="contacts-table">
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
          {contacts.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img src={actor.pictureUrl} />
                </td>
                <td>{actor.name}</td>
                <td>{Math.round(actor.popularity * 100) / 100}</td>
                {actor.wonOscar ? <td>🏆</td> : <td></td>}
                {actor.wonEmmy ? <td>🌟</td> : <td></td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
