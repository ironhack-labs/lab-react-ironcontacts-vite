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


  return (
    <div className="fex flex wrapped">

      <h1>LAB | React IronContacts</h1>
      <div className="buttons">
        <button button onClick={(clickToAddNewContact)} className="btn-add" > Add new Contact!</button >
        <button button onClick={(clickToAddNewContact)} className="btn-add" > Sort by Name!</button >
        <button button onClick={(clickToAddNewContact)} className="btn-add" > Sort by Popularity!</button >
      </div>

      <table>
        <thead>

          {contacts.map((contact) => {
            return (

              <tr key={contact.id}>
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
