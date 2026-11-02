import { useState } from "react";

function ContactList({ contacts, setContacts }) {

const handleDeleteContact = (index) => {
const stateCopy = [...contacts];
stateCopy.splice(index,1);
setContacts(stateCopy);
}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populartity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact,index) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" width="100px" />
                </td>
                <td>{contact.name}</td>
                <td>{(contact.popularity).toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🌟"}</td>
                <td><button onClick={()=>handleDeleteContact(index)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
