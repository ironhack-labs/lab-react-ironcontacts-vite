import { useState } from "react";
import "./App.css";
import  contacts from "./contacts.json"

function App() {
  const [contact,setContact]=useState(contacts.slice(0,5))
  const [remaining,setRemaining]=useState(contacts.slice(5,contacts.length))
  const handleRandom = ()=>{
    let randomNum = Math.floor(Math.random() * remaining.length);
    let randomContact = remaining[randomNum]

    const updatedRemaining = [...remaining]
    updatedRemaining.splice(randomNum,1)
    setRemaining(updatedRemaining)
    setContact([...contact,randomContact])
  }


  const handleSortName= ()=>{
    const sortByName=[...contact].sort((a,b)=>a.name.localeCompare(b.name))
    return setContact(sortByName)
  }
  const handlePopularity= () =>{

    const sortByPopularity = [...contact].sort((a,b)=>b.popularity-a.popularity)
    return setContact(sortByPopularity)
  }
  const handleDelete=(id)=>{
    return setContact(contact.filter((actress)=> actress.id!==id))
  }
  return (
    <div className="App">
      <h1>Ironhack Contacts</h1>
      <button name="Add Random Contact" onClick={handleRandom}>Add Random Contact</button>
      <button onClick={handlePopularity}>Sort by Popularity </button>
      <button onClick={handleSortName}>Sort by Name</button>
      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((person) => (
          <tr key={person.id}>
            <td>
              <img src={person.pictureUrl} alt="contact-img" />
            </td>
            <td>{person.name}</td>
            <td>{person.popularity.toFixed(2)}</td>
            <td>{person.wonOscar && <span>🏆</span>}</td>
            <td>{person.wonEmmy && <span>🌟 </span>}</td>
            <td><button onClick={()=>handleDelete(person.id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
