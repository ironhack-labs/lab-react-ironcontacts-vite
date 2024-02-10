import contactsData from "./../../contacts.json"
import { useState } from "react"
import "./ContactsTable.css"


const ContactsTable = props => {
    const [contacts, setContacts] = useState(contactsData)
    
const deleteContact = (contactIdToDelete) => {
        const filteredContacts = contacts.filter(elm =>{
            return elm.id !== contactIdToDelete
            })
            setContacts(filteredContacts)
    }

return (
    <section className = "ContactsTable">
    <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map(contact => {
        return (
            <tr key={contact.id}>
                <td>
                <img src={contact.pictureUrl} alt="img-ironcontacts"/>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🌟" : ""}</td>
                <td><button className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>)})}
        </tbody>
      </table>
      </section>
    )
}

export default ContactsTable