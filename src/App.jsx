import './App.css';
import contact from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));

  const addRandom = () => {
    const newA = Math.floor(Math.random() * contact.length);
    const updatedContact = [...contacts, contact[newA]];

    setContacts(updatedContact);
  };
  const updateByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };
  const updateByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={updateByPopularity}>Sort by popularity</button>
      <button onClick={updateByName}>Sort by name</button>

      <table>
        <th>
          <h2>Picture</h2>
        </th>
        <th>
          <h2>Name</h2>
        </th>
        <th>
          <h2>Popularity</h2>
        </th>
        <th>
          <h2>Won Oscar</h2>
        </th>
        <th>
          <h2>Won Emmy</h2>
        </th>
      </table>
      {contacts.map(contact => {
        return (
          <table class="GeneratedTable">
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} width="50" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🏆'} </td>
                <td>
                  <button onClick={() => removeContact(contact.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;