import "./App.css";
import ContactsList from "./contacts.json";
import { useState } from "react";

const contacts = ContactsList.slice(1,6);

function App() {
  const [cList,SetContacts] = useState(contacts);

  let AddContact = ()=> {
    let remaining = ContactsList.filter(celebrity => {return !contacts.find((element) => element === celebrity);});
    let randomContactPosition= Math.floor(Math.random() * remaining.length);
    const newList = [...cList];
    newList.push(remaining[randomContactPosition])
    SetContacts(newList);
  };

  let SortbyPopularity = ()=> {
    cList.sort((a,b) => {return b.popularity - a.popularity});
    const newList = [...cList];
    SetContacts(newList);
  };

  let SortbyName = ()=> {
    cList.sort((a,b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
        }
      if (nameA > nameB) {
        return 1;
        }
    return 0;
});
const newList = [...cList];
SetContacts(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={AddContact}>Add Random Contact</button>
      <button onClick={SortbyPopularity}>Sort by Popularity</button>
      <button onClick={SortbyName}>Sort by Name</button>
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
