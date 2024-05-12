import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";


function App() {

  const[contacts, setContacts] = useState(contactsData.slice(0, 5));


  const[restOfContacts, setRestOfContacts] = useState([...contactsData.slice(5)]);


  const randomContact = restOfContacts[Math.floor(Math.random() * restOfContacts.length)];
  
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      {/* why it doesn't work: onClick={() => setContacts((contacts) => contacts.push(randomContact))} */}
      {/*       <button onClick={() => {
        setContacts((contacts) => contacts.push(randomContact));
        setRestOfContacts((restOfContacts) => restOfContacts.filter(!randomContact));
        }
      }>Add Random Contact</button> */}
      {/* {contacts.push(randomContact)} - it pushes a new contact when refreshing the page */}

      <button onClick={() => contacts.push(randomContact)}>Add Random Contact</button>
      <button>Sort by name</button>
      <button>Sort by popularity</button>
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

                {contacts.map((contact) => {
                  
                  return (
                    <tr key={contact.id}>
                    <td><img className="picture" key = {contact.id} src={contact.pictureUrl}></img></td>
                    <td><p className="name" key = {contact.id}>{contact.name}</p></td>
                    <td><p key = {contact.id}>{contact.popularity.toFixed(2)}</p></td>
                    <td>{ contact.wonOscar ? <p>🏆</p> : ""} </td>
                    <td>{ contact.wonEmmy ? <p>🌟</p> : ""}</td>
                    <td><button onClick={() => contacts.deleteHandler(contacts.contact.id)}>Delete</button></td>
                </tr>
                  )
                })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
