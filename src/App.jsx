import contactsData from './contacts.json'
import { useState } from 'react'
import "./App.css";




function App() {
  const actorsList = contactsData.slice(0, 5)
  const [contacts, setContacts] = useState(actorsList)

  const haveOscar = (wonOscar) => {
    return wonOscar ? <span role="img" >🏆</span> : <span role='img'>❌</span>
  }

  const haveEmmy = (wonEmmy) => {
    return wonEmmy ? <span role='img'>🌟</span> : <span role='img'>❌</span>
  }

  const addActor = () => {
    const newActor = contactsData[Math.floor(Math.random() * contactsData.length)]
    const contactsDataCopy = [newActor, ...contacts]
    setContacts(contactsDataCopy)
  }

  const sortByName = () => {
    const sortedActor = [...contactsData].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    return setContacts(sortedActor)
  }

  const sortByPopularity = () => {
    const sortedPopActor = [...contactsData].sort((a, b) => {
      return b.popularity - a.popularity
    })
    return setContacts(sortedPopActor)
  }



  return (
    <div className="App">
      <button onClick={addActor}>Add new Actor</button>
      <button onClick={sortByName}>Sort By name</button>
      <button onClick={sortByPopularity}>Sort By popularity</button>
      <h1>LAB | React IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {
          contacts.map(elm => {
            return (

              < tr >
                <td><img src={elm.pictureUrl} alt={elm.name} /></td>
                <td>{elm.name}</td>
                <td>{Math.round(elm.popularity)}</td>
                <td>{haveOscar(elm.wonOscar)}</td>
                <td>{haveEmmy(elm.wonEmmy)}</td>
                <td></td>
              </tr>)

          })
        }
      </table>

    </div >
  );
}

export default App;