import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsToDisplay, setContactsToDisplay] = useState(
    contacts.slice(0, 5)
  );

  const [reaminingContacts, setReaminingContacts] = useState(contacts.slice(5));

  const addContact = () => {
    if (reaminingContacts.length === 0) {
      return;
    }
    const randomContact =
      reaminingContacts[Math.floor(Math.random() * reaminingContacts.length)];
    console.log(randomContact);

    const newList = [...contactsToDisplay, randomContact];
    setContactsToDisplay(newList);
    setReaminingContacts(
      reaminingContacts.filter((contact) => {
        return contact.id !== randomContact.id;
      })
    );
  };

  const sortByPopularity = () => {
    const sortedArr = [...contactsToDisplay].sort(
      (a, b) => b.popularity - a.popularity
    );
    console.log(sortedArr);
    setContactsToDisplay(sortedArr);
  };

  const sortByName = () => {
    const sortedArr = [...contactsToDisplay].sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    console.log(sortedArr);
    setContactsToDisplay(sortedArr);
  };

  const deleteContact = (id) => {
    const arrAfterDlt = contactsToDisplay.filter((contact) => {
      return contact.id !== id;
    });
    setContactsToDisplay(arrAfterDlt);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      {contactsToDisplay.map((contactObj) => {
        return (
          <section key={contactObj.name}>
            <table>
              <tbody>
                <tr>
                  <th> Picture </th>
                  <th> Name </th>
                  <th> Popularity </th>
                  <th> Won Oscar </th>
                  <th> Won Emmy </th>
                  <th>Actions</th>
                </tr>

                <tr>
                  <td>
                    <img src={contactObj.pictureUrl} alt="" />
                  </td>
                  <td>{contactObj.name}</td>
                  <td>{contactObj.popularity.toFixed(2)}</td>
                  <td>{contactObj.wonOscar ? <p>🏆</p> : <p></p>}</td>
                  <td>{contactObj.wonEmmy ? <p>🏆</p> : <p></p>}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        deleteContact(contactObj.id);
                      }}
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              </tbody>
            </table>

            <h5>{contacts.name}</h5>
            <img src={contacts.pictureURL} alt="" />
          </section>
        );
      })}
    </div>
  );
}

export default App;
