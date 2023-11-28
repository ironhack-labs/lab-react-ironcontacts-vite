import { useState } from "react";
import contactsData from "../contacts.json";
import ContactCard from "./ContactCard";

// function ContactsList() {
//   const [contacts, setContacts] = useState([
//     // Initial contacts
//     // ...
//   ]);

//   const remainingContacts = [
//     /* Array of remaining contacts */
//   ];

//   const addRandomContact = () => {
//     if (remainingContacts.length > 0) {
//       const randomIndex = Math.floor(Math.random() * remainingContacts.length);
//       const randomContact = remainingContacts[randomIndex];

//       // Update state using the state updater function returned by useState
//       setContacts((prevContacts) => [...prevContacts, randomContact]);

//       // Remove the added contact from remainingContacts array
//       const updatedRemainingContacts = remainingContacts.filter(
//         (contact, index) => index !== randomIndex
//       );
//       // Update remainingContacts (if needed)
//       // setRemainingContacts(updatedRemainingContacts);
//     } else {
//       // Handle case when no remaining contacts are available
//       console.log("No more contacts to add!");
//     }
//   };

//   return (
//     <div>
//       {/* Other JSX elements */}
//       <button onClick={addRandomContact}>Add Random Contact</button>
//     </div>
//   );
// }

function ContactsList() {
  const restOfContacts = contactsData.slice(5);
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      //in this line it is said that contact is not defined
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  };

  const addRandomContact = () => {
    const randomNumber = Math.floor(Math.random() * restOfContacts.length);
    const randomContact = restOfContacts[randomNumber];

    setContacts([...contacts, randomContact]);
  };

  // here i should create a constant that sort by popularity

  const sortPop = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  //end of the iteration

  // here i should create a constant that sort by popularity

  const alphaSort = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedContacts);
  };

  //end of the iteration

  return (
    <div>
      <h2>Contacts List</h2>

      {contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.id}
            contact={contact}
            clickToDelete={() => deleteContact(contact.id)}
          />
        );
      })}
      {/* creating the button to add the new contacts */}
      <button onClick={addRandomContact} className="btn-delete">
        Add Random Contact 🌚
      </button>
      <button onClick={sortPop} className="btn-delete">
        Sort By Popularity 👼🏼
      </button>
      <button onClick={alphaSort} className="btn-delete">
        Sort By Alphabet 🙊
      </button>
    </div>
  );
}

export default ContactsList;
