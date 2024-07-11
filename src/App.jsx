import { useState } from "react";
import Contacts from "./contacts.json";

function App() {
  const [newContacts, setNewContacts] = useState(Contacts.slice(0, 5));
  function addRandom() {
    let random = Math.floor(Math.random() * Contacts.length);
    setNewContacts([...newContacts, Contacts[random]]);
  }
  function sortByName() {
    setNewContacts(
      [...newContacts].sort((a, b) => a.name.localeCompare(b.name))
    );
  }
  function sortByPopularity() {
    setNewContacts(
      [...newContacts].sort((a, b) => b.popularity - a.popularity)
    );
  }
  const deleteContact = (id) => {
    const newArray = newContacts.filter((contact) => {
      return contact.id !== id;
    });
    setNewContacts(newArray);
  };
  return (
    <>
      <h1 className="font-bold text-center text-2xl">IronContacts</h1>
      <div className="flex justify-center">
        <table className="size-1/2">
          <thead>
            <tr className="flex justify-between">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody className="flex flex-col">
            {newContacts.map((contact, index) => (
              <tr className="flex justify-between" key={index}>
                <td>
                  <img
                    className="size-12"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td className="w-20">{contact.name}</td>
                <td className="w-20">{contact.popularity}</td>
                <td className="w-20">{contact.wonOscar ? "🏆" : ""}</td>
                <td className="w-20">{contact.wonEmmy ? "🌟" : ""}</td>
                <td className="w-20">
                  <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px
                  -4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => deleteContact(contact.id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addRandom}
      >
        Add Random
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={sortByName}
      >
        Sort by Name
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={sortByPopularity}
      >
        Sort by Popularity
      </button>
    </>
  );
}

export default App;
