import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";


function App() {

  const copyContacts = [...contacts].slice(0, 5)

  const [actors, setActors] = useState(copyContacts)


  function addActor() {
    // const restContacts = [...contacts].slice(6, contacts.length - 1)

    const random = Math.floor(Math.random() * (contacts.length - 1))

    const newlist = [...actors]

    newlist.push(contacts[random])

    setActors(newlist)
  }

  function sortAlf() {

    const actorCopy2 = [...actors]
    actorCopy2.sort(function (a, b) {

      if (a.name < b.name) {
        return -1
      } if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    setActors(actorCopy2)
  }

  function sortPop() {

    const actorCopy3 = [...actors]

    actorCopy3.sort((a, b) => b.popularity - a.popularity)

    setActors(actorCopy3)
  }

  const delActor = (id) => {
    const actorCopy4 = [...actors]
    const borrao = actorCopy4.filter(e => e.id != id)

    setActors(borrao)

  }





  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <section className="button">
        <button onClick={() => addActor()}>Add ramdom actor</button>
      </section>
      <section className="button">
        <button onClick={() => sortAlf()}>Name</button>
      </section>
      <section className="button">
        <button onClick={() => sortPop()}>popularity</button>
      </section>

      {
        actors.map(e => {
          return (
            <section key={e.id} className="celCard">
              <img src={e.pictureUrl} alt={e.name} />
              <p>{e.name}</p>
              <p>{e.popularity.toFixed(2)}</p>
              <p>{e.wonOscar ? `🏆` : "✗"}</p>
              <p>{e.wonEmmy ? `🌟` : "✗"}</p>
              <button onClick={() => delActor(e.id)}>delete</button>
            </section>
          )
        })
      }
    </div>
  );
}

export default App;
