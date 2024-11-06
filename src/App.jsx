import { useState } from "react"
import "./App.css";
import contactsArray from "./../src/contacts.json"

function App() {
  // Inicializamos el estado con los primeros 5 contactos
  const [contacts, setContacts] = useState(contactsArray.slice(0, 5))

  // Función para añadir un contacto aleatorio
  const addRandomContact = () => {
    // Filtrar los contactos que aún no están en la lista actual
    const remainingContacts = contactsArray.filter(
      (contact) => !contacts.some((c) => c.id === contact.id)
    )

    if (remainingContacts.length === 0) return // Si no hay contactos restantes, salir

    // Elegir un contacto aleatorio
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)]

    // Actualizar el estado agregando el contacto aleatorio
    setContacts((prevContacts) => [randomContact, ...prevContacts])
  }
  // Function to sort contacts by name (alphabetically)
  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sortedContacts)
  }

  // Function to sort contacts by popularity (highest first)
  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity)
    setContacts(sortedContacts);
  }

  // Function to delete a contact by id
  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId)
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact) => (
            <tr key={eachContact.id}>
              <td>
                <img src={eachContact.pictureUrl} alt={eachContact.name} width="50" />
              </td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              <td>{eachContact.wonOscar ? "🏆" : ""}</td>
              <td>{eachContact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => deleteContact(eachContact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App

