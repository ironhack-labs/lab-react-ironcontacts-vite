import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5));
  
  const randomContact = () => {
    const restContacts = contactsData.slice(5);
    const randomIndex = Math.floor(Math.random() * restContacts.length)
    setContacts((prevState) => [restContacts[randomIndex], ...prevState]);
  };

  const handleSortByPopularity = () => {
    const sortbyPopularity = [...contactsData].sort((a, b) => a.popularity - b.popularity )
    setContacts(sortbyPopularity)
  }

  const handleSortByName = () => {
    const sortbyName = [...contactsData].sort((a, b) => a.name.localeCompare(b.name)  )
    setContacts(sortbyName)
  }

  const deleteContact = contactId => {
    const filteredContact = contactsData.filter(contact => {
      return contact._id !== contactId;
    });

    setContacts(filteredContact);
  };

    
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>
      <button onClick={handleSortByName}>Sort by name</button>
     
      <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td><img src={contact.pictureUrl}></img></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar ? <p>🏆</p> : <p></p>}
                </td>
                <td>
                  {contact.wonEmmy ? <p>🌟</p> : <p></p>}
                </td>
                <td>
                {/* <button onClick={deleteContact}>Delete</button> */}
                  <button onClick={() => deleteContact(contact._id)} className="btn-delete">
                    Delete 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App;
