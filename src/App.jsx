import "./App.css";
import Contacts from './contacts.json';
import { useState } from "react";


function App() {
  // and set the array from contacts-data.json as the initial state
  const [contacts, setContacts] = useState(Contacts);

  return (
    <div className="fex flex wrapped">

      <h1>LAB | React IronContacts</h1>
      <table>
        {contacts.map(name => {
          console.log(contacts)
          return <p> {name} </p>
        })}
      </table>

      <Contacts />
    </div>

  );
}

export default App;
