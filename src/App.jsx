import contactsList from "./contacts.json";
import "./App.css";
import { useState } from 'react'

function App() {
  const initialArray = Array.from(contactsList.slice(0, 5))

  const [contacts, setContacts] = useState(initialArray)



  const addRandomContact = (contactsList) => {

    const randomContact = contactsList[Math.floor(Math.random() * contactsList.length)]
    const contactsListCopy = [...contactsList]
    initialArray.unshift(randomContact)


    setContacts(initialArray)
  }




  return (
    <>
      <button onClick={() => addRandomContact(initialArray)}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="pic" style={{ width: "50px" }} /></td>
                  <td>{contact.name}</td>
                  <td>{(contact.popularity).toFixed(2)}</td>
                  <td>{contact.wonOscar && "🏆"}</td>
                  <td>{contact.wonEmmy && "🌟"}</td>
                </tr>
              )
            })
          }


        </tbody>
      </table>
    </>
  );
}


export default App;
