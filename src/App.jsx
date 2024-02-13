import "./App.css";
import contactsJson from "./contacts.json"
import { useState } from "react";

function App() {
  // set as value for contacts the first 5 objects of the contactsJson array
  const [contacts, setContacts] = useState(contactsJson.slice(0,5));
  // get a new random contact and add it to the variable contacts using useState to update the value
  const newArray = contactsJson.slice(5)
  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    const randomContact = newArray[randomIndex]
    setContacts([...contacts, randomContact])
  }  
  const sortArrayByPopularity = () => {
    const sortedContactsByPopularity = [...contacts].sort((a,b)=> b.popularity - a.popularity)
    setContacts(sortedContactsByPopularity)
  }
  const sortArrayByName = () => {
    const sortedContactsByName = [...contacts].sort((a,b)=>(a.name > b.name ? 1 : -1))
    setContacts(sortedContactsByName)
  }
  const deleteContact = (contactId) => {
    const newContactsList = contacts.filter((obj) => {
      return obj.id !== contactId;
    })
    setContacts(newContactsList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortArrayByPopularity}>Sort by popularity</button>
      <button onClick={sortArrayByName}>Sort by name</button>
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
        {contacts.map((obj) => {
          return(
            <tr key={obj.id}>
              <td><img style={{width:70}} src={obj.pictureUrl}/></td>
              <td>{obj.name}</td>
              <td>{Math.floor(obj.popularity*100)/100}</td>
              <td>{obj.wonOscar && '🏆'}</td>
              <td>{obj.wonEmmy && '🌟'}</td>
              <td><button onClick={() => deleteContact(obj.id)}>Delete</button></td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
