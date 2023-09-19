import "./App.css";
import contactsData from './contacts.json';
import { useState } from "react";


function App() {
  // and set the array from contacts-data.json as the initial state
  const [contacts, setContacts] = useState(contactsData);

  return (
    <div className="fex flex wrapped">

      <h1>LAB | React IronContacts</h1>
      <table>
        {contacts.map((contact) => {
          return <td key={contact.name}>{contact.name}</td>
        })}
      </table>

    </div>

  );
}

export default App;
