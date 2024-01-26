import actorsData from "../contacts.json";
import "./Actors.css"
import {useState} from "react";
import Button from "./Button";

const Actors = () => {
    const [allActors, setAllActors] = useState(actorsData.slice(6));
    const [actors, setActors] = useState(actorsData.slice(0, 6)) 

    const onAddRandom = () => {
        if (allActors.lenght === 0) {
            return alert('No hay más actores que añadir')
        }

        const randomIndex = Math.floor(Math.random() * allActors.length)
        setAllActors(allActors.filter((actors, index) => index !== randomIndex));
    
        const newItem = allActors[randomIndex];
        setActors([newItem, ...actors])
    }

    const sortPopularity = () => {
        const sortedPopularity = [...actors].sort((actor1, actor2) => {
            const popularity1 = actor1.popularity;
            const popularity2 = actor2.popularity;

            return popularity2 - popularity1;
        });

        setActors(sortedPopularity);
    };

    const sortActors = () => {
        const sortedActors = [...actors].sort((actor1, actor2) => {
            return actor1.name.localeCompare(actor2.name);
        }); 
        
        setActors(sortedActors);
    };

    const onDelete = (id) => {
        const newArr = actors.filter((actor) => {
            return actor.id !== id
        }); 

        setActors(newArr);
    };

   

    return (
        <div className="container">
            <div className="Buttons">
                <Button text ="Add new actor" type="primary" onClick={onAddRandom}></Button>

                <Button text ="Sort by popularity" type="primary" onClick={sortPopularity}></Button>

                <Button text ="Sort by name" type="primary" onClick={sortActors}></Button>
            </div>
        
                <table className="list-title">
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won an Oscar</th>
                    <th>Won an Emy</th>
                    </tr>
                </table>
            {actors.map((actor) => (
                <div key={actor.id}>
               <table className="acotr-contact">
                    <tr>
                    <img src={actor.pictureUrl} className="ProfilePic"/>
                    <td>{actor.name}</td>
                    <td>{actor.popularity}</td>
                    <td>{actor.wonOscar ? '🏆' : ''}</td>
                    <td>{actor.wonEmmy ? '🌟' : ''}</td>
                    <td>
                    <Button text ="Delete" type="danger" onClick={() => onDelete(actor.id)}></Button>
                    </td>
                    </tr>
                </table>
                </div>
            ))}

        </div>
    )

}

 
export default Actors;