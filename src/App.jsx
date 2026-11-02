import "./App.css";
import ContactList from "./components/ContactList";
import contactsJson from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));

  function genRandomNum() {
    const randomNum =
      Math.floor(Math.random() * (contactsJson.length - 5 )) + 5;
    return randomNum;
  }

  const handleAddRandomContact = () => {
    const stateCopy = [...contacts];
    const randomNum = genRandomNum();
    const contactExist = contacts.some((contact) => {
      return contact.id === contactsJson[randomNum].id;
    });

    if (!contactExist) {
      stateCopy.push(contactsJson[randomNum]);
      setContacts(stateCopy);
    }
  };

  const handleSortByPopularity = () => {
    const stateCopy = [...contacts];
    stateCopy.sort((a, b) => b.popularity - a.popularity);
    setContacts(stateCopy);
  };

  const handleSortByName = () => {
    const stateCopy = [...contacts];
    stateCopy.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(stateCopy);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleAddRandomContact}>Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort by popularity</button>
      <button onClick={handleSortByName}>Sort by name</button>
      <ContactList contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
