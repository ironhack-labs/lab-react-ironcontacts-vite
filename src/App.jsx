import { useState } from "react";
import "./App.css";
import  contacts from "./contacts.json"

function App() {
  const getContacts = contacts.slice(0,5)
  const [contact,setContact]=useState(getContacts)
  
  const handleRandom = ()=>{
    const randomValue = Math.floor(Math.random() * contacts.length/2)
    const randomValue2 =Math.floor(Math.random() * (contacts.length-contacts.length/2) +contacts.length/2) 
    setContact(contacts.slice(randomValue,randomValue2))
    console.log(randomValue,randomValue2)
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
        {contact.map((e) => (
          <tr key={e.id}>
            <td>
              <img src={e.pictureUrl} alt="contact-img" />
            </td>
            <td>{e.name}</td>
            <td>{e.popularity.toFixed(2)}</td>
            <td>{e.wonOscar && <span>🏆</span>}</td>
            <td>{e.wonEmmy && <span>🌟 </span>}</td>
            <td><button onClick={()=>handleDelete(e.id)}>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
