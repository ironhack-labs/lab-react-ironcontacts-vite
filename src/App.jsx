import { useState } from "react";
import "./App.css";
import contactsList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0, 5));
  const [nameSortDirection, setNameSortDirection] = useState("🔼");
  const [popularitySortDirection, setPopularitySortDirection] = useState("🔼");
  const handleDelete = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };
  const handleRandom = () => {
    const randomContact =
      contactsList[Math.floor(Math.random() * contactsList.length)];
    setContacts([...contacts, randomContact]);
  };
  const handleSortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      nameSortDirection === "🔼"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setNameSortDirection(nameSortDirection === "🔼" ? "🔽" : "🔼");
    setContacts(sortedContacts);
  };
  const handleSortByPopularity = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) =>
        (popularitySortDirection === "🔼" ? 1 : -1) *
        (a.popularity - b.popularity)
    );
    setPopularitySortDirection(popularitySortDirection === "🔼" ? "🔽" : "🔼");
    setContacts(sortedContacts);
  };
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="sortButtons">
        <button onClick={handleSortByName}>{nameSortDirection} Name</button>
        <button onClick={handleSortByPopularity}>
          {popularitySortDirection}Popularity
        </button>
      </div>
      <table className="contacts">
        <thead>
          <tr className="contacts__header">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr className="card__contact" key={contact.id}>
              <td>
                <img
                  className="contact__image"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td className="contact__name">{contact.name}</td>
              <td className="contact__popularity">
                {contact.popularity.toFixed(2)}
              </td>
              <td className="contact__wonOscar">
                {contact.wonOscar ? "🏆" : "❌"}
              </td>
              <td className="contact__wonEmmy">
                {contact.wonEmmy ? "🌟" : "❌"}
              </td>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleRandom}>Add Random Contact</button>
    </div>
  );
}

export default App;
