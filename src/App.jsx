import "./App.css";
import contactsData from './contacts.json';
import { useState } from "react";


function App() {

  // and set the array from contacts-data.json as the initial state
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  function clickToAddNewContact() {
    const newContact = contactsData.slice(5)
    const randomIndex = Math.floor(Math.random() * newContact.length);
    setContacts((prevContacts) => [newContact[randomIndex], ...prevContacts]);
    // console.log(randomIndex)
  }

  function clickSortNames() {
    const sortedNames = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    // console.log(sortedNames)
    setContacts(sortedNames);
  }

  function clickSortByPopularity() {
    const popularityFirst = [...contacts].sort((a, b) => a.popularity - b.popularity);
    setContacts(popularityFirst)

  }

  function deleteContact(){
    const deletedContacts = contactId => {
      const filteredContacts = contacts.filter(contact => {
        return contacts.id !== contactId;
      });
      setContacts(filteredContacts);
  }

  }

  return (
    <div className="fex flex wrapped">

      <h1>LAB | React IronContacts</h1>
      <div className="buttons">
        <button button onClick={(clickToAddNewContact)} className="btn-add" > Add new Contact!</button >
        <button button onClick={(clickSortNames)} className="btn-add" > Sort by Name!</button >
        <button button onClick={(clickSortByPopularity)} className="btn-add" > Sort by Popularity!</button >
      </div>

      <table>
        <thead>
          {contacts.map((contact) => {
            return (
             
              <tr key={contact.id}>
                <button button onClick={deleteContact} className="btn-dlt"> Delete</button>
                <td><img src={contact.pictureUrl} alt={contact.name} style={{ width: '200px', height: '200px' }} /></td>
                <td>{contact.name}</td>
                <td><p>Popularity</p>{contact.popularity}</td>
                <td>{contact.wonOscar && <p>Got the Oscar Award! </p>}</td>
                <td>{!contact.wonOscar && <p> Great, but no Oscars ! </p>}</td>

              </tr>
            );
          })}

        </thead>
      </table>

    </div>

  );
}

export default App;
