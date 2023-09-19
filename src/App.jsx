import "./App.css";
import contactsData from './contacts.json';
import { useState } from "react";


function App() {
  // and set the array from contacts-data.json as the initial state
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  return (
    <div className="fex flex wrapped">

      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
        {contacts.map((contact) => {
          return <tr key={contact.name}><td >{contact.name}</td></tr>


        })}
        </thead>
      </table>

    </div>

  );
}

export default App;
