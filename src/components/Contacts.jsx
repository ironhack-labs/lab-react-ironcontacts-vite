import actorsData from "../contacts.json";
import { useState } from "react";
import Button from './Button'
import './Contacts.css'


const Actors = () => {
    const [allActors, setAllActors] = useState(actorsData.slice(5))
    const [actors, setActors] = useState(actorsData.slice(0, 5))


    const onAddRandomActor = () => {
        if (allActors.lenght === 0) {
            return alert('No hay más actores que añadir!!')
        }
    
    const randomIndex = Math.floor(Math.random() * allActors.length)
    setAllActors(allActors.filter((actors, index) => index !== randomIndex));
    
    const itemToAdd = allActors[randomIndex];
    setActors([itemToAdd, ...actors])
    
    }

    const onDelete = (id) => {
        const newArr = actors.filter((actor) => {
            return actor.id !== id
        })
    
        setActors(newArr);

    }

    const sortUsers = () => {
      const sortedActors = [...actors].sort((actor1, actor2) => {
        return actor1.name.localeCompare(actor2.name);
      });
    
      setActors(sortedActors);
    };

    const sortPopularity = () => {
      const sortedPopularity = [...actors].sort((actor1, actor2) => {
        const popularity1 = actor1.popularity;
        const popularity2 = actor2.popularity;

        return popularity2 - popularity1;
      });
    
      setActors(sortedPopularity);
    };


    return (
        <div>
          <Button type="success" onClick={onAddRandomActor} disabled={actors.length === 0}>
            Add new actor
          </Button>
          

          <Button text="Sort" type="secondary" onClick={sortUsers}>
            Sort
          </Button>

          <Button text="Sort" type="secondary" onClick={sortPopularity}>
            Sort Popularity
          </Button>

    
          <table className="table table-bordered mt-3">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
                <th scope="col">Won Oscar</th>
                <th scope="col">Won Emy</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {actors.map((actor) => (
                <tr key={actor.id}>
                  <td>
                    <img src={actor.pictureUrl} className="card-img-top" alt={actor.name} />
                  </td>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                  <td>{actor.wonOscar ? '🏆' : ''}</td>
                  <td>{actor.wonEmy ? '🏆' : ''}</td>
                  <td>
                    <Button className="btn btn-danger" type="danger" onClick={() => onDelete(actor.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default Actors;
    