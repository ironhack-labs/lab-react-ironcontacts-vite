import "./App.css";
import contactDeets from "./contacts.json";
import React, { useState } from "react";

function App(props) {


// const contacts = contactDeets;
const [contacts, setContacts] = useState(contactDeets.slice(0,5));
const [randomContacts, setRandomContacts] = useState(contactDeets.slice(5));
console.log(contacts);

const random = Math.floor(Math.random() * (randomContacts.length));

console.log(random);







  return (
    <div>
      <h1>My Contacts</h1>

      <button
        onClick={() =>
          setContacts((prevContacts) => [
            ...prevContacts,
            randomContacts[random],
          ])
        }>
        Random Contact
      </button>
      <button
        onClick={() =>
          setContacts((prevContacts) => [
            ...prevContacts.sort((a, b) =>
              a.popularity > b.popularity ? 1 : -1
            ),
          ])
        }>
        Sort By Popularity
      </button>
      <button
        onClick={() =>
          setContacts((prevContacts) => [
            ...prevContacts.sort((a, b) => (a.name > b.name ? 1 : -1)),
          ])
        }>
        Sort By Name
      </button>
      <table className="App">
        <tr>
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity </th>
          <th> Won Oscar </th>
          <th> Won Emmy </th>
          <th> Actions </th>
        </tr>

        {contacts.map((contact, index) => (
          <tr>
            <td>
              <img src={contact.pictureUrl}></img>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar && "🏆"}</td>
            <td>{contact.wonEmmy && "🏆"}</td>
            <td><button onClick={()=> setContacts((prevContacts)=> prevContacts.filter((_,i) => i !== index))}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
