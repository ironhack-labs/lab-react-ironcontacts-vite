import "./App.css";
import ContactsList from "./contacts.json";
import { useState } from "react";

const contacts = ContactsList.slice(0,5);

function App() {
  const [cList,SetContacts] = useState(contacts);

  let AddContact = ()=> {
    let remaining = ContactsList.filter(celebrity => {return !contacts.find((element) => element === celebrity);});
    let randomContactPosition= Math.floor(Math.random() * remaining.length);
    const newList = [...cList];
    newList.push(remaining[randomContactPosition])
    SetContacts(newList);
  };
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={AddContact}>Add Random Contact</button>
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
    { cList.map(celeb => {
        return (
          <tr key={celeb.name}>
            <td>
              <img style={{width:"50px"}} src={celeb.pictureUrl} alt={celeb.name}></img>
            </td>
            <td>
              { celeb.name }
            </td>
            <td>
              { celeb.popularity }
            </td> 
            <td>
              { celeb.wonOscar ? <i>🏆</i> : null }
            </td> 
            <td>
            { celeb.wonEmmy ? <i>🌟</i> : null }
            </td> 
          </tr>
          )
      })}
    </tbody>
      </table>
    </div>
  );
}

export default App;
